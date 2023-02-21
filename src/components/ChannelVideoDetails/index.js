import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import NavBar from '../NavBar'
import UpdateValues from '../../context/UpdateValues'

import {
  VideoDetailsContainer,
  VideosBody,
  VideoDataBody,
  VideoPlayer,
  VideoTitle,
  MetaDataContainer,
  VideosViewsDateBox,
  VideosDateText,
  VideosViewsText,
  DotDivider,
  VideosLikeDislikeBox,
  VideosDislike,
  VideosLike,
  VideoSaved,
  WrapBox,
  LikeText,
  DislikeText,
  SavedVideosText,
  CommentBox,
  ChannelImg,
  CommentDataBox,
  ChannelNameSubscribersBox,
  ChannelName,
  ChannelSubscribers,
  CommentText,
  VideoTitleBox,
  LoaderBox,
  FailureImage,
  FailureImageBox,
  FailureHeading,
  FailurePara,
  FailureBtn,
} from './styledComponents'

let contextValues = null

class ChannelVideoDetails extends Component {
  state = {
    videoContent: '',
    status: '',
    likeColor: false,
    dislikeColor: false,
    savedColor: false,
  }

  componentDidMount() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.getMatchedIdVideoDetails(id)
    const value = this.context
    console.log(value)
    contextValues.changeNavBarActiveItem('NONE')
  }

  fetchData = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.getMatchedIdVideoDetails(id)
  }

  getMatchedIdVideoDetails = async id => {
    try {
      const {status} = this.state
      const jwtToken = Cookies.get('jwt_token')
      const url = `https://apis.ccbp.in/videos/${id}`
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }

      const response = await fetch(url, options)

      if (response.ok) {
        const data = await response.json()
        const resData = this.getConvertedData(data.video_details)
        this.setState({videoContent: resData, status: 'SUCCESS'})
      } else {
        this.setStatus({status: 'FAILURE'})
      }
    } catch (e) {
      this.setState({status: 'FAILURE'})
    }
  }

  getConvertedData = data => {
    const newVideoDetails = {
      channel: {
        name: data.channel.name,
        profileImageUrl: data.channel.profile_image_url,
        subscriberCount: `${data.channel.subscriber_count} subscribers`,
      },
      description: data.description,
      id: data.id,
      publishedAt: this.getConvertedDate(data.published_at),
      thumbnailUrl: data.thumbnail_url,
      title: data.title,
      videoUrl: data.video_url,
      viewCount: `${data.view_count} views`,
    }
    return newVideoDetails
  }

  getConvertedDate = date => {
    const newDate = formatDistanceToNow(new Date(date))
    console.log(newDate)
    const dateValuesList = newDate.split(' ')
    const dateValue =
      dateValuesList[0] === 'almost'
        ? parseInt(dateValuesList[1]) - 1
        : dateValuesList[1]
    return `${dateValue} ${dateValuesList[2]} ago`
  }

  likeColorChange = () => {
    const {likeColor, dislikeColor} = this.state

    if (dislikeColor) {
      this.setState({dislikeColor: !dislikeColor, likeColor: !likeColor})
    } else {
      this.setState({likeColor: !dislikeColor})
    }
  }

  dislikeColorChange = () => {
    const {dislikeColor, likeColor} = this.state
    if (likeColor) {
      this.setState({dislikeColor: !dislikeColor, likeColor: !likeColor})
    } else {
      this.setState({dislikeColor: !dislikeColor})
    }
  }

  saveColorChange = () => {
    const {videoContent} = this.state
    const {savedColor} = this.state
    this.setState({savedColor: !savedColor})
    contextValues.addVideosToSavedPage(videoContent)
  }

  checkSavedVideoStatus = data => {
    const {videoContent, savedColor} = this.state
    const checkStatus = data.map(item => item.id === videoContent.id)
  }

  renderVideoDetails = (mode, savedVideos) => {
    const {videoContent, likeColor, dislikeColor, savedColor} = this.state
    const initialColor = savedVideos.filter(item => item.id === videoContent.id)
    console.log(initialColor, 'initial')
    let checkStatus = false

    if (initialColor.length > 0) {
      checkStatus = true
    }

    const saveText = checkStatus ? 'Saved' : 'Save'

    const {
      channel,
      viewCount,
      videoUrl,
      title,
      publishedAt,
      thumbnailUrl,
      id,
      description,
    } = videoContent

    const {name, profileImageUrl, subscriberCount} = {...channel}

    return (
      <VideoPlayer>
        <ReactPlayer url={videoUrl} width="80%" height="80%" />
        <VideoTitleBox>
          <VideoTitle>{title}</VideoTitle>
        </VideoTitleBox>
        <MetaDataContainer>
          <VideosViewsDateBox>
            <VideosViewsText>{viewCount}</VideosViewsText>
            <DotDivider />
            <VideosDateText>{publishedAt}</VideosDateText>
          </VideosViewsDateBox>
          <VideosLikeDislikeBox>
            <WrapBox type="button" onClick={this.likeColorChange}>
              <VideosLike likeColor={likeColor} />
              <LikeText likeColor={likeColor}>Like</LikeText>
            </WrapBox>
            <WrapBox type="button" onClick={this.dislikeColorChange}>
              <VideosDislike dislikeColor={dislikeColor} />
              <DislikeText dislikeColor={dislikeColor}>Dislike</DislikeText>
            </WrapBox>
            <WrapBox type="button" onClick={this.saveColorChange}>
              <VideoSaved checkStatus={checkStatus} savedColor={savedColor} />
              <SavedVideosText
                checkStatus={checkStatus}
                savedColor={savedColor}
              >
                {saveText}
              </SavedVideosText>
            </WrapBox>
          </VideosLikeDislikeBox>
        </MetaDataContainer>
        <CommentBox>
          <ChannelImg src={profileImageUrl} alt="channel logo" />
          <CommentDataBox>
            <ChannelNameSubscribersBox>
              <ChannelName mode={mode}>{name}</ChannelName>
              <ChannelSubscribers>{subscriberCount}</ChannelSubscribers>
            </ChannelNameSubscribersBox>
            <CommentText mode={mode}>{description}</CommentText>
          </CommentDataBox>
        </CommentBox>
      </VideoPlayer>
    )
  }

  renderLoader = () => (
    <LoaderBox data-testid="loader">
      <Loader
        color="#00306e"
        type="ThreeDots"
        height="50"
        width="50"
        data-testid="loader"
      />
    </LoaderBox>
  )

  renderFailure = mode => (
    <FailureImageBox>
      <FailureImage
        src={
          mode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <FailureHeading mode={mode}>Oops! Something Went Wrong</FailureHeading>
      <FailurePara mode={mode}>
        We are having some trouble to complete your request. Please try again.
      </FailurePara>
      <FailureBtn type="button" onClick={this.fetchData}>
        Retry
      </FailureBtn>
    </FailureImageBox>
  )

  renderFinalOutput = (mode, savedVideos) => {
    const {status} = this.state

    switch (status) {
      case 'SUCCESS':
        return this.renderVideoDetails(mode, savedVideos)
      case 'FAILURE':
        return this.renderFailure(mode)
      default:
        return this.renderLoader()
    }
  }

  render() {
    const {videoContent, likeColor, dislikeColor, savedColor} = this.state
    console.log(videoContent, likeColor, dislikeColor, savedColor)
    return (
      <UpdateValues.Consumer>
        {value => {
          contextValues = value
          const {
            changeNavBarActiveItem,
            savedVideos,
            addVideosToSavedPage,
            activeItem,
            mode,
          } = value
          return (
            <VideoDetailsContainer data-testid="videoItemDetails" mode={mode}>
              <Header />
              <VideosBody>
                <NavBar />
                <VideoDataBody mode={mode}>
                  {this.renderFinalOutput(mode, savedVideos)}
                </VideoDataBody>
              </VideosBody>
            </VideoDetailsContainer>
          )
        }}
      </UpdateValues.Consumer>
    )
  }
}

export default ChannelVideoDetails

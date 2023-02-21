import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NavBar from '../NavBar'
import Header from '../Header'
import UpdateValues from '../../context/UpdateValues'

import {
  TrendingMainContainer,
  NavBarAndBodyContainer,
  TrendingVideosContainer,
  TrendingVideosBodyBox,
  TrendingLogoHeader,
  TrendingLogoHeadingBox,
  Logo,
  LogoHeading,
  TrendingVideoDetails,
  TrendingVideosThumbnail,
  TrendingThumbnailBtn,
  TrendingVideosChannelData,
  TrendingVideosChannel,
  TrendingVideosTitle,
  TrendingVideosViewsTimeBox,
  TrendingVideosViews,
  TrendingVideosDotIcon,
  TrendingVideosTime,
  LoaderBox,
  FailureImage,
  FailureImageBox,
  FailureHeading,
  FailurePara,
  FailureBtn,
} from './styledComponents'

let contextValues = null

class TrendingRoute extends Component {
  state = {trendingData: '', status: ''}

  componentDidMount() {
    this.fetchData()
    contextValues.changeNavBarActiveItem('TRENDING')
  }

  fetchData = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const formattedData = this.videosApiDataToJsonData(data.videos)
      this.setState({trendingData: formattedData, status: 'SUCCESS'})
    } else {
      this.setState({status: 'FAILURE'})
    }
  }

  renderLoader = () => (
    <LoaderBox data-testid="loader">
      <Loader
        type="ThreeDots"
        color="#00306e"
        height="50"
        width="50"
        data-testid="loader"
      />
    </LoaderBox>
  )

  videosApiDataToJsonData = data => {
    const formattedData = data.map(items => ({
      channel: {
        name: items.channel.name,
        profileImageUrl: items.channel.profile_image_url,
      },
      id: items.id,
      publishedAt: items.published_at,
      thumbnailUrl: items.thumbnail_url,
      title: items.title,
      viewCount: `${items.view_count} views`,
    }))

    return formattedData
  }

  dateConvertion = item => {
    const date = formatDistanceToNow(new Date(item.published_at))
    const dateValues = date.split(' ')
    const dateStr =
      dateValues[0] === 'almost' ? parseInt(dateValues[1] - 1) : dateValues[1]
    const publishedAt = `${dateStr} ${dateValues[2]} ago`
    return publishedAt
  }

  gameVideoDetails = id => {
    const {history} = this.props
    history.replace(`/videos/${id}`)
  }

  renderVideos = mode => {
    const {trendingData} = this.state
    return (
      <TrendingVideosBodyBox mode={mode}>
        {trendingData.map(video => this.renderTrendingVideo(video, mode))}
      </TrendingVideosBodyBox>
    )
  }

  renderTrendingVideo = (video, mode) => {
    const {id, channel, title, viewCount, thumbnailUrl, publishedAt} = video
    const {name} = {...channel}
    return (
      <TrendingVideoDetails key={id}>
        <TrendingThumbnailBtn to={`/videos/${id}`}>
          <TrendingVideosThumbnail src={thumbnailUrl} alt="video thumbnail" />
          <TrendingVideosChannelData>
            <TrendingVideosTitle mode={mode}>{title}</TrendingVideosTitle>
            <TrendingVideosChannel mode={mode}>{name}</TrendingVideosChannel>
            <TrendingVideosViewsTimeBox>
              <TrendingVideosViews mode={mode}>{viewCount}</TrendingVideosViews>
              <TrendingVideosDotIcon mode={mode} />
              <TrendingVideosTime mode={mode}>{publishedAt}</TrendingVideosTime>
            </TrendingVideosViewsTimeBox>
          </TrendingVideosChannelData>
        </TrendingThumbnailBtn>
      </TrendingVideoDetails>
    )
  }

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

  renderFinalOutput = mode => {
    const {status} = this.state
    switch (status) {
      case 'SUCCESS':
        return this.renderVideos(mode)
      case 'FAILURE':
        return this.renderFailure(mode)
      default:
        return this.renderLoader()
    }
  }

  render() {
    const {status, trendingData} = this.state
    console.log(status, trendingData)

    return (
      <UpdateValues.Consumer>
        {value => {
          const {changeMode, mode} = value
          contextValues = value

          return (
            <TrendingMainContainer data-testid="trending" mode={mode}>
              <Header />
              <NavBarAndBodyContainer>
                <NavBar />
                <TrendingVideosContainer mode={mode}>
                  <TrendingLogoHeader mode={mode}>
                    <TrendingLogoHeadingBox>
                      <Logo mode={mode} />
                      <LogoHeading mode={mode}>Trending</LogoHeading>
                    </TrendingLogoHeadingBox>
                  </TrendingLogoHeader>
                  <>{this.renderFinalOutput(mode)}</>
                </TrendingVideosContainer>
              </NavBarAndBodyContainer>
            </TrendingMainContainer>
          )
        }}
      </UpdateValues.Consumer>
    )
  }
}

export default TrendingRoute

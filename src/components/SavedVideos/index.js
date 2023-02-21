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
  EmptyImage,
  EmptyVideosImageBox,
  EmptyHeading,
  EmptyPara,
} from './styledComponents'

let contextValues = null

class SavedVideos extends Component {
  state = {status: 'FAILURE'}

  componentDidMount() {
    if (contextValues.savedVideos.length > 0) {
      this.setState({status: 'SUCCESS'})
    }
    contextValues.changeNavBarActiveItem('SAVED')
  }

  renderLoader = () => (
    <LoaderBox>
      <Loader
        type="ThreeDots"
        color="#00306e"
        height="50"
        width="50"
        data-testid="loader"
      />
    </LoaderBox>
  )

  gameVideoDetails = id => {
    const {history} = this.props
    history.replace(`/videos/${id}`)
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

  renderVideos = (mode, savedVideos) => (
    <TrendingVideosBodyBox mode={mode}>
      {savedVideos.map(video => this.renderTrendingVideo(video, mode))}
    </TrendingVideosBodyBox>
  )

  renderFailure = mode => (
    <EmptyVideosImageBox>
      <EmptyImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <EmptyHeading mode={mode}>No saved videos found</EmptyHeading>
      <EmptyPara mode={mode}>
        You can save your videos while watching them
      </EmptyPara>
    </EmptyVideosImageBox>
  )

  renderFinalOutput = (mode, savedVideos) => {
    const {status} = this.state
    switch (status) {
      case 'SUCCESS':
        return this.renderVideos(mode, savedVideos)
      case 'FAILURE':
        return this.renderFailure(mode)
      default:
        return this.renderLoader()
    }
  }

  render() {
    const {status} = this.state
    console.log(status)

    return (
      <UpdateValues.Consumer>
        {value => {
          const {savedVideos, mode} = value
          contextValues = value

          return (
            <TrendingMainContainer data-testid="savedVideos" mode={mode}>
              <Header />
              <NavBarAndBodyContainer>
                <NavBar />
                <TrendingVideosContainer mode={mode}>
                  <TrendingLogoHeader mode={mode}>
                    <TrendingLogoHeadingBox mode={mode}>
                      <Logo mode={mode} />
                      <LogoHeading mode={mode}>Saved Videos</LogoHeading>
                    </TrendingLogoHeadingBox>
                  </TrendingLogoHeader>
                  <>{this.renderFinalOutput(mode, savedVideos)}</>
                </TrendingVideosContainer>
              </NavBarAndBodyContainer>
            </TrendingMainContainer>
          )
        }}
      </UpdateValues.Consumer>
    )
  }
}

export default SavedVideos

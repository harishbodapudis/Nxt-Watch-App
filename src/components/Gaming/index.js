import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NavBar from '../NavBar'
import Header from '../Header'
import UpdateValues from '../../context/UpdateValues'

import {
  LoaderBox,
  GameVideosContainer,
  GameVideosBody,
  GameVideosBodyContainer,
  GameVideosBodyBox,
  EachVideoDetails,
  VideoThumbnail,
  VideosTitle,
  VideosTotalViews,
  GameLogoHeader,
  GameLogoHeadingBox,
  Logo,
  LogoHeading,
  VideoThumbnailBtn,
  FailureImage,
  FailureImageBox,
  FailureHeading,
  FailurePara,
  FailureBtn,
} from './styledComponents'

let contextValues = null

class GameRoute extends Component {
  state = {gameVideos: '', status: ''}

  componentDidMount() {
    this.fetchData()
    contextValues.changeNavBarActiveItem('GAMING')
  }

  fetchData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      console.log(data)
      const formattedData = data.videos.map(item => ({
        id: item.id,
        thumbnailUrl: item.thumbnail_url,
        title: item.title,
        viewCount: `${item.view_count} Watching Worldwide`,
      }))
      this.setState({gameVideos: formattedData, status: 'SUCCESS'})
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

  gameVideoDetails = id => {
    const {history} = this.props
    history.replace(`/videos/${id}`)
  }

  renderEachVideo = (video, mode) => {
    const {id, title, viewCount, thumbnailUrl} = video
    return (
      <EachVideoDetails key={id}>
        <VideoThumbnailBtn to={`/videos/${id}`}>
          <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />

          <VideosTitle mode={mode}>{title}</VideosTitle>
          <VideosTotalViews mode={mode}>{viewCount}</VideosTotalViews>
        </VideoThumbnailBtn>
      </EachVideoDetails>
    )
  }

  renderVideos = mode => {
    const {gameVideos} = this.state
    console.log(gameVideos)
    return (
      <GameVideosBodyBox mode={mode}>
        {gameVideos ? (
          gameVideos.map(video => this.renderEachVideo(video, mode))
        ) : (
          <></>
        )}
      </GameVideosBodyBox>
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
    const {gameVideos} = this.state
    console.log(gameVideos)

    return (
      <UpdateValues.Consumer>
        {value => {
          const {changeMode, mode} = value
          contextValues = value

          return (
            <GameVideosContainer data-testid="gaming" mode={mode}>
              <Header />
              <GameVideosBodyContainer>
                <NavBar />
                <GameVideosBody mode={mode}>
                  <GameLogoHeader mode={mode}>
                    <GameLogoHeadingBox mode={mode}>
                      <Logo mode={mode} />
                      <LogoHeading mode={mode}>Gaming</LogoHeading>
                    </GameLogoHeadingBox>
                  </GameLogoHeader>
                  <>{this.renderFinalOutput(mode)}</>
                </GameVideosBody>
              </GameVideosBodyContainer>
            </GameVideosContainer>
          )
        }}
      </UpdateValues.Consumer>
    )
  }
}

export default GameRoute

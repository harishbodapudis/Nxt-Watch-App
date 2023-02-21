import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import VideosContainer from '../VideosContainer'
import UpdateValues from '../../context/UpdateValues'
import {
  MainContainer,
  NavBarBodyContainer,
  Banner,
  BannerData,
  NextWatchLogo,
  BannerText,
  CloseBox,
  BannerBtn,
  MainBody,
  SearchBoxAndVideos,
  SearchInputAndIconBox,
  SearchBox,
  SearchIcon,
  SearchBtn,
  LoaderContainer,
  ChannelVideos,
  CloseBtn,
  NoSearchResultsImage,
  NoSearchResultsVideosImageBox,
  NoSearchResultsHeading,
  NoSearchResultsPara,
  NoSearchRetryBtn,
  FailureImage,
  FailureImageBox,
  FailureHeading,
  FailurePara,
  FailureBtn,
} from './styledComponents'

import Header from '../Header'
import NavBar from '../NavBar'

let contextValues = null

class HomeRoute extends Component {
  state = {searchText: '', videosData: '', status: '', closeBanner: true}

  componentDidMount() {
    this.getVideosData()
    contextValues.changeNavBarActiveItem('HOME')
  }

  setSearchText = event => {
    this.setState({searchText: event.target.value})
  }

  getVideosData = async () => {
    const {searchText} = this.state
    const token = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${searchText}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const videosDetails = this.videosApiDataToJsonData(data.videos)
      if (data.videos.length > 0) {
        this.setState({
          videosData: videosDetails,
          status: 'SUCCESS',
          searchText: '',
        })
      } else {
        this.setState({
          videosData: videosDetails,
          status: 'NO-DATA',
          searchText: '',
        })
      }
    } else {
      this.setState({status: 'FAILURE', searchText: ''})
    }
  }

  dateConvertion = item => {
    const date = formatDistanceToNow(new Date(item.published_at))
    const dateValues = date.split(' ')
    const dateStr =
      dateValues[0] === 'almost' ? parseInt(dateValues[1] - 1) : dateValues[1]
    const publishedAt = `${dateStr} ${dateValues[2]} ago`
    return publishedAt
  }

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
      viewCount: items.view_count,
    }))

    return formattedData
  }

  closeBannerBox = () => {
    this.setState({closeBanner: false})
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader
        type="ThreeDots"
        color="#00306e"
        height="50"
        width="50"
        data-testid="loader"
      />
    </LoaderContainer>
  )

  renderVideos = mode => {
    const {videosData} = this.state
    return (
      <ChannelVideos mode={mode}>
        {videosData.map(video => (
          <VideosContainer
            key={video.id}
            videos={video}
            videoInfo={this.videoInfo}
            mode={mode}
          />
        ))}
      </ChannelVideos>
    )
  }

  videoInfo = id => {
    const {history} = this.props
    history.replace(`/videos/${id}`)
  }

  searchWithInputValue = () => {
    this.getVideosData()
  }

  renderNoData = mode => (
    <NoSearchResultsVideosImageBox>
      <NoSearchResultsImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
        alt="no videos"
      />
      <NoSearchResultsHeading mode={mode}>
        No Search results found
      </NoSearchResultsHeading>
      <NoSearchResultsPara mode={mode}>
        Try different key words or remove search filter
      </NoSearchResultsPara>
      <NoSearchRetryBtn type="button">Retry</NoSearchRetryBtn>
    </NoSearchResultsVideosImageBox>
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
      <FailureBtn type="button" onClick={this.searchWithInputValue}>
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
      case 'NO-DATA':
        return this.renderNoData(mode)
      default:
        return this.renderLoader()
    }
  }

  render() {
    const {searchText, videosData, closeBanner} = this.state
    console.log(searchText, videosData)

    return (
      <UpdateValues.Consumer>
        {value => {
          const {mode} = value
          contextValues = value
          console.log(mode)
          return (
            <MainContainer data-testid="home" mode={mode}>
              <Header />
              <NavBarBodyContainer>
                <NavBar />
                <MainBody mode={mode}>
                  {closeBanner ? (
                    <Banner mode={mode} data-testid="banner">
                      <BannerData mode={mode}>
                        <NextWatchLogo
                          mode={mode}
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerText>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerText>
                        <BannerBtn type="button">GET IT NOW</BannerBtn>
                      </BannerData>
                      <CloseBtn
                        type="button"
                        onClick={this.closeBannerBox}
                        data-testid="close"
                      >
                        <CloseBox />
                      </CloseBtn>
                    </Banner>
                  ) : (
                    <></>
                  )}
                  <SearchBoxAndVideos>
                    <SearchInputAndIconBox mode={mode}>
                      <SearchBox
                        mode={mode}
                        type="search"
                        value={searchText}
                        onChange={this.setSearchText}
                        placeholder="Search"
                      />
                      <SearchBtn
                        data-testid="searchButton"
                        mode={mode}
                        type="button"
                        onClick={this.searchWithInputValue}
                      >
                        <SearchIcon mode={mode} />
                      </SearchBtn>
                    </SearchInputAndIconBox>
                    <>{this.renderFinalOutput(mode)}</>
                  </SearchBoxAndVideos>
                </MainBody>
              </NavBarBodyContainer>
            </MainContainer>
          )
        }}
      </UpdateValues.Consumer>
    )
  }
}

export default HomeRoute

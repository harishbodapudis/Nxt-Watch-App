import {
  DotIcon,
  VideosBox,
  ThumbnailImage,
  ProfileNameAndTitleBox,
  ChannelProfileImage,
  VideosTitle,
  ChannelName,
  ViewsAndYear,
  Views,
  YearsValue,
  VideoMetaData,
  VideoDetailsLink,
} from './styledComponents'

const VideosContainer = props => {
  const {videos, videoInfo, mode} = props

  const {thumbnailUrl, title, viewCount, publishedAt, channel, id} = videos
  const {name, profileImageUrl} = channel

  const eachVideoDetails = () => {
    videoInfo(id)
  }

  return (
    <VideoDetailsLink to={`/videos/${id}`}>
      <VideosBox>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />

        <ProfileNameAndTitleBox>
          <ChannelProfileImage src={profileImageUrl} alt="channel logo" />
          <VideoMetaData>
            <VideosTitle mode={mode}>{title}</VideosTitle>
            <ChannelName mode={mode}>{name}</ChannelName>
            <ViewsAndYear>
              <Views mode={mode}>{viewCount} views</Views>
              <DotIcon mode={mode} />
              <YearsValue mode={mode}>{publishedAt}</YearsValue>
            </ViewsAndYear>
          </VideoMetaData>
        </ProfileNameAndTitleBox>
      </VideosBox>
    </VideoDetailsLink>
  )
}

export default VideosContainer

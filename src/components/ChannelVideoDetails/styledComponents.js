import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'
import {BiDislike, BiLike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.mode ? '#0f0f0f' : '#f9f9f9')};
`
export const VideosBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const VideoDataBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${props => (props.mode ? '#000000' : '#f4f4f4')};
  height: 89vh;
  overflow: auto;
`
export const VideoPlayer = styled.div`
  width: 100%;
  padding: 10px 20px;
  height: 85vh;
  margin: auto;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const VideoTitleBox = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
  align-self: left;
  justify-content: flex-start;
  width: 80%;
`
export const VideoTitle = styled.p`
  font-size: 14px;
  text-align: left;
  font-weight: bold;
`
export const MetaDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 0px;
  width: 80%;
`
export const VideosViewsDateBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
`
export const VideosViewsText = styled.p`
  color: #606060;
  font-size: 12px;
  font-weight: bold;
`
export const VideosDateText = styled.p`
  color: #606060;
  font-size: 12px;
  font-weight: bold;
`
export const DotDivider = styled(BsDot)`
  font-size: 18px;
  margin-left: 5px;
  color: #606060;
  font-weight: bold;
`
export const VideosLikeDislikeBox = styled.div`
  width: 200px;
  display: flex;
  flex: row;
  justify-content: space-between; ;
`
export const VideosDislike = styled(BiDislike)`
  font-size: 18px;
  color: ${props => (props.dislikeColor ? '#2563eb' : '#64748b')};
`
export const VideosLike = styled(BiLike)`
  font-size: 18px;
  color: ${props => (props.likeColor ? '#2563eb' : '#64748b')};
`
export const VideoSaved = styled(MdPlaylistAdd)`
  font-size: 18px;

  color: ${props => (props.checkStatus ? '#2563eb' : '#64748b')};
`
export const CommentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-top: 1px solid #606060;
  width: 80%;
`
export const ChannelImg = styled.img`
  width: 35px;
  height: 35px;
  margin-top: 8px;
`

export const CommentDataBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 10px;
  margin-top: 8px;
`
export const ChannelNameSubscribersBox = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.p`
  font-size: 10px;
  margin: 2px 0px;
  font-weight: bold;
  color: ${props => (props.mode ? '#909090' : '#000000')};
`
export const ChannelSubscribers = styled.p`
  color: #606060;
  font-size: 10px;
  margin: 0px;
  font-weight: bold;
`
export const CommentText = styled.p`
  font-size: 12px;
  color: ${props => (props.mode ? '#909090' : '#000000')};
`
export const WrapBox = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: transparent;
  border: 0px;
`
export const LikeText = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin-left: 5px;
  color: ${props => (props.likeColor ? '#2563eb' : '#64748b')};
`
export const DislikeText = styled.p`
  font-size: 12px;
  color: #606060;
  font-weight: bold;
  margin-left: 5px;
  color: ${props => (props.dislikeColor ? '#2563eb' : '#64748b')};
`
export const SavedVideosText = styled.p`
  font-size: 12px;
  color: #606060;
  font-weight: bold;
  margin-left: 5px;
  color: ${props => (props.checkStatus ? '#2563eb' : '#64748b')};
`
export const LoaderBox = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FailureImage = styled.img`
  height: 200px;
  width: 250px;
`
export const FailureImageBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
`
export const FailureHeading = styled.h1`
  font-size: 18px;
  color: ${props => (props.mode ? '#f4f4f4' : '#000000')};
`
export const FailurePara = styled.p`
  font-size: 14px;
  color: ${props => (props.mode ? '#cccccc' : '#606060')};
  margin-top: 5px;
`
export const FailureBtn = styled.button`
  border: 0px;
  color: #f4f4f4;
  background-color: #4f46e5;
  padding: 5px 12px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
`

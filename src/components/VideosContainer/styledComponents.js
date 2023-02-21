import {BsDot} from 'react-icons/bs'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const DotIcon = styled(BsDot)`
  height: 15px;
  width: 15px;
  margin-left: 15px;
  color: ${props => (props.mode ? '#909090' : '#313131')};
`
export const VideosBox = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 25px;
  margin-bottom: 20px;
`
export const ThumbnailImage = styled.img`
  width: 300px;
  height: 180px;
  cursor: pointer;
`
export const ProfileNameAndTitleBox = styled.div`
  padding: 1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 5px;
`
export const ChannelProfileImage = styled.img`
  width: 20px;
  height: 20px;
  margin: 2px 0px;
  margin-right: 5px;
`
export const VideosTitle = styled.p`
  font-size: 13px;
  margin: 2px 0px;
  margin-bottom: 10px;
  width: 270px;
  color: ${props => (props.mode ? '#f4f4f4' : '#000000')};
`
export const ChannelName = styled.p`
  font-size: 12px;
  margin: 2px 0px;
  font-weight: bold;
  color: ${props => (props.mode ? '#909090' : '#313131')};
`
export const ViewsAndYear = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px;
`
export const Views = styled.p`
  font-size: 10px;
  font-weight: bold;
  color: ${props => (props.mode ? '#909090' : '#313131')};
  margin: 2px 0px;
`
export const YearsValue = styled.p`
  font-size: 10px;
  font-weight: bold;
  color: ${props => (props.mode ? '#909090' : '#313131')};
  margin: 2px 0px;
`
export const VideoMetaData = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoDetailsLink = styled(Link)`
  border: 0px;
  background-color: transparent;
  margin: 0px;
  padding: 0px;
  text-decoration: none;
`

import {SiYoutubegaming} from 'react-icons/si'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GameVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.mode ? '#0f0f0f' : '#f9f9f9')};
`

export const LoaderBox = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const GameVideosBodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`
export const GameVideosBodyBox = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  height: 70vh;
  overflow: auto;
  padding-left: 10px;
  margin-top: 20px;
  padding-top: 0px;
  margin-left: 8%;
  background-color: ${props => (props.mode ? '#000000' : '#f4f4f4')};
`
export const GameVideosBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.mode ? '#000000' : '#f4f4f4')};
  width: 100%;
`

export const EachVideoDetails = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0px;
  margin-right: 20px;
  margin-bottom: 20px;
`
export const VideoThumbnailBtn = styled(Link)`
  border: 0px;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
  text-decoration: none;
  background-color: ${props => (props.mode ? '#000000' : '#f4f4f4')};
`
export const VideoThumbnail = styled.img`
  height: 320px;
  width: 200px;
`
export const VideosTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.mode ? '#e2e8f0' : '#212121')};
`
export const VideosTotalViews = styled.p`
  font-size: 12px;
  margin-top: 0px;
  color: ${props => (props.mode ? '#909090' : '#000000')};
`
export const GameLogoHeader = styled.div`
  height: 15vh;
  background-color: ${props => (props.mode ? '#212121' : '#f9f9f9')};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const GameLogoHeadingBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 82%;
  margin: auto;
`
export const Logo = styled(SiYoutubegaming)`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  color: ${props => (props.mode ? '#ff0b37' : '#212121')};
  border-radius: 40px;
  padding: 5px;
  background-color: ${props => (props.mode ? '#000000' : '#e2e8f0')};
`
export const LogoHeading = styled.h1`
  font-size: 24px;
  color: ${props => (props.mode ? '#ffffff' : '#000000')};
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

import {BsDot} from 'react-icons/bs'
import {DiCodeigniter} from 'react-icons/di'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.mode ? '#0f0f0f' : '#f9f9f9')};
`
export const NavBarAndBodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const TrendingVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background-color: #f4f4f4;
  background-color: ${props => (props.mode ? '#000000' : '#f4f4f4')};
`
export const TrendingVideosBodyBox = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  height: 70vh;
  overflow: auto;
  padding-left: 10px;
  margin-top: 20px;
  padding-top: 0px;
  margin-left: 8%;
  width: 92%;
`
export const TrendingVideoDetails = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 90%;
`
export const TrendingThumbnailBtn = styled(Link)`
  border: 0px;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
  margin-bottom: 30px;
  text-decoration: none;
`
export const TrendingVideosThumbnail = styled.img`
  height: 200px;
  width: 350px;
`
export const TrendingVideosChannelData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  margin-top: 0px;
`
export const TrendingVideosTitle = styled.p`
  font-size: 14px;
  margin-top: 0px;
  font-weight: bold;
  color: ${props => (props.mode ? '#f4f4f4' : '#000000')};
`
export const TrendingVideosChannel = styled.p`
  font-size: 14px;
  margin-top: 0px;
  color: ${props => (props.mode ? '#909090' : '#000000')};
`
export const TrendingVideosViewsTimeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0px;
`
export const TrendingVideosViews = styled.p`
  font-size: 12px;
  color: ${props => (props.mode ? '#909090' : '#000000')};
`
export const TrendingVideosDotIcon = styled(BsDot)`
  height: 30px;
  width: 30px;
  margin-top: 0px;
  color: ${props => (props.mode ? '#909090' : '#000000')};
`
export const TrendingVideosTime = styled.p`
  font-size: 12px;
  color: ${props => (props.mode ? '#909090' : '#000000')};
`
export const VideosTotalViews = styled.p`
  font-size: 12px;
  margin-top: 0px;
  color: ${props => (props.mode ? '#909090' : '#000000')};
`
export const TrendingLogoHeader = styled.div`
  height: 15vh;
  background-color: #f9f9f9;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.mode ? '#212121' : '#f9f9f9')};
`
export const TrendingLogoHeadingBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 82%;
  margin: auto;
`
export const Logo = styled(DiCodeigniter)`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  background-color: #e2e8f0;
  border-radius: 40px;
  padding: 5px;
  color: ${props => (props.mode ? '#ff0b37' : '#212121')};
  background-color: ${props => (props.mode ? '#000000' : '#e2e8f0')};
`
export const LogoHeading = styled.h1`
  font-size: 24px;
  color: ${props => (props.mode ? '#ffffff' : '#000000')};
`

export const LoaderBox = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const EmptyImage = styled.img`
  height: 250px;
  width: 300px;
`
export const EmptyVideosImageBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 0px;
`
export const EmptyHeading = styled.h1`
  font-size: 20px;
  color: ${props => (props.mode ? '#f4f4f4' : '#000000')};
`
export const EmptyPara = styled.p`
  font-size: 20px;
  color: ${props => (props.mode ? '#cccccc' : '#606060')};
  margin-top: 5px;
`

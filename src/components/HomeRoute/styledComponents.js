import {AiOutlineClose} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import styled from 'styled-components'

export const MainContainer = styled.div`
  margin: 0px;
  padding: 0px;
  background-color: ${props => (props.mode ? '#181818' : ' #f9f9f9')};
`
export const NavBarBodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  margin: auto;
`
export const Banner = styled.div`
  background: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  color: green;
  background-size: 600px 200px;
  background-repeat: no-repeat;
  background-position-x: 100%;
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px 15px;
  padding-top: 34px;
  background-color: #ffffff;
`
export const BannerData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`
export const CloseBox = styled(AiOutlineClose)`
  height: 20px;
  width: 25px;
  color: #000000;
  font-weight: bold;
  cursor: pointer;
`

export const BannerText = styled.p`
  font-size: 16px;
  color: #000000;
  width: 95%;
`
export const NextWatchLogo = styled.img`
  width: 100px;
  height: 30px;
`
export const BannerBtn = styled.button`
  padding: 5px;
  border: 1px solid #000000;
  background-color: transparent;
`
export const MainBody = styled.div`
  background-color: ${props => (props.mode ? '#212121' : '#f4f4f4')};
  width: 100%;
  height: 89vh;
  overflow: auto;
`
export const SearchBoxAndVideos = styled.div`
  padding: 10px 15px;
  width:80%
  margin: auto;
`
export const SearchInputAndIconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${props => (props.mode ? '#606060' : '#cccccc')};
  width: 25%;
`
export const SearchBox = styled.input`
  background-color: transparent;
  width: 95%;
  padding: 5px;
  border: 0px;
  border-right: 1px solid ${props => (props.mode ? '#606060' : '#cccccc')};
  outline: none;
  color: ${props => (props.mode ? '#f4f4f4' : '#212121')};
`
export const SearchBtn = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0px;
  background-color: ${props => (props.mode ? '#606060' : '#cccccc')};
`
export const SearchIcon = styled(BsSearch)`
  height: 24px;
  width: 16px;
  cursor: pointer;
  color: ${props => (props.mode ? ' #424242' : '#909090')};
  border: 0px;
`

export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ChannelVideos = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 15px 0px;
  padding: 0px;
  list-style-type: none;
  color: ${props => (props.mode ? '#f9f9f9' : '#000000')};
`
export const CloseBtn = styled.button`
  border: 0px;
  background-color: transparent;
  cursor: pointer;
`
export const NoSearchResultsImage = styled.img`
  height: 200px;
  width: 250px;
`
export const NoSearchResultsVideosImageBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
`
export const NoSearchResultsHeading = styled.h1`
  font-size: 18px;
  color: ${props => (props.mode ? '#f4f4f4' : '#000000')};
`
export const NoSearchResultsPara = styled.p`
  font-size: 14px;
  color: ${props => (props.mode ? '#cccccc' : '#606060')};
  margin-top: 5px;
`
export const NoSearchRetryBtn = styled.button`
  border: 0px;
  color: #f4f4f4;
  background-color: #4f46e5;
  padding: 5px 12px;
  border-radius: 5px;
  cursor: pointer;
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

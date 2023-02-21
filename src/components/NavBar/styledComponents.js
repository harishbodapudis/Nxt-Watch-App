import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {DiCodeigniter} from 'react-icons/di'
import {MdPlaylistAdd} from 'react-icons/md'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavContainer = styled.div`
  height: 89vh;
  width: 18%;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.mode ? '#313131' : '#ffffff')};
  color: ${props => (props.mode ? '#ffffff' : '#212121')};
`
export const NavLinksBox = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 30px;
  padding: 0px;
  width: 100%;
`
export const NavItemsBox = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props => (props.active ? '#e2e8f0' : '')};
  width: 100%;
  padding: 8px 15px;
  border: 0px;
`
export const NavLinkImg = styled.img`
  height: 20px;
  width: 20px;
`
export const NavLinkText = styled(Link)`
  text-decoration: none;
  color: ${props => (props.mode ? '#909090' : '#212121')};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`
export const NavHomeLogo = styled(AiFillHome)`
  color: ${props => (props.icon ? '#ff0b37' : '#909090')};
  margin-right: 4px;
  font-size: 18px;
`
export const NavTrendingLogo = styled(DiCodeigniter)`
  color: ${props => (props.icon ? '#ff0b37' : '#606060')};
  margin-right: 4px;
  font-size: 18px;
`
export const NavGamingLogo = styled(SiYoutubegaming)`
  color: ${props => (props.icon ? '#ff0b37' : '#606060')};
  margin-right: 4px;
  font-size: 18px;
`
export const NavSavedVideosLogo = styled(MdPlaylistAdd)`
  color: ${props => (props.icon ? '#ff0b37' : '#606060')};
  margin-right: 4px;
  font-size: 18px;
`
export const NavDetailsBox = styled.div`
  width: 100%;
  padding: 0px 15px;
`
export const ContactsText = styled.p`
  font-size: 14px;
  font-weight: bold;
`
export const SocialMediaItemsBox = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
  width: 70%;
`
export const SocialMediaItem = styled.li`
  margin-right: 4px;
`
export const SpecialText = styled.p`
  font-size: 12px;
  width: 100%;
`
export const SocialMediaImage = styled.img`
  width: 20px;
  height: 20px;
`

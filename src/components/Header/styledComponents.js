import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  background-color: ${props => (props.mode ? '#313131' : '#ffffff')};
`
export const HeaderLogoImageBox = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 15%;
  background-color: transparent;
`
export const HeaderLogoImage = styled.img`
  width: 150px;
  height: 30px;
`
export const HeaderDetailsBox = styled(HeaderContainer)`
  width: 20%;
  margin-right: 20px;
  background-color: transparent;
`
export const HeaderModeButton = styled.button`
  cursor: pointer;
  border: 0px;
  background-color: transparent;
  font-size: 25px;
  color: ${props => (props.mode ? '#ffffff' : '#212121')};
`
export const HeaderUserImage = styled.img`
  width: 25px;
  height: 25px;
`
export const HeaderLogoutButton = styled.button`
  border: 1px solid ${props => (props.mode ? '#ffffff' : '#3b82f6')};
  padding: 5px 15px;
  background-color: transparent;
  color: ${props => (props.mode ? '#ffffff' : '#3b82f6')};
  cursor: pointer;
`
export const PopupContainer = styled.div`
  height: 100vh;
  width: 100%;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`
export const PopupButton = styled.div`
  height: 50px;
  width: 50px;
  background-color: blue;
`

export const PopupBox = styled.div`
  height: 200px;
  width: 200px;
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; ;
`

export const ModalBox = styled.div`
  border: 1px solid red;
  width: 75em;
  margin-right: ;
  text-align: center;
`

import styled from 'styled-components'

export const ModalBox = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  box-shadow: 0 0 5px 550px rgba(0, 0, 0, 0.5);
  color: ${props => (props.mode ? '#ffffff' : '#000000')};
`
export const HeaderLogoutButton = styled.button`
  border: 1px solid ${props => (props.mode ? '#ffffff' : '#3b82f6')};
  padding: 5px 15px;
  background-color: transparent;
  color: ${props => (props.mode ? '#ffffff' : '#3b82f6')};
  cursor: pointer;
`
export const CloseBox = styled.p`
  color: ${props => (props.mode ? '#ffffff' : '#000000')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ModalButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  color: ${props => (props.mode ? '#ffffff' : '#000000')};
`
export const ConfirmButton = styled.button`
  border: 0px;
  border-radius: 5px;
  padding: 8px 10px;
  color: #ffffff;
  background-color: #3b82f6;
  cursor: pointer;
`
export const CancelButton = styled.button`
  border: 1px solid ${props => (props.mode ? '#ebebeb' : '#313131')};
  border-radius: 5px;
  padding: 8px 10px;
  margin-right: 10px;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.mode ? '#ebebeb' : '#313131')};
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.mode ? '#313131' : '#ebebeb')};
  padding: 10px 10px;
  border-radius: 5px;
`

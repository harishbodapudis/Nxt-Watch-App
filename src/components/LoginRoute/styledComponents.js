import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.mode ? '#313131' : '#ffffff')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export const FormContainer = styled.div`
  background-color: ${props => (props.mode ? '#313131' : '#ffffff')};
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 15px 0px;
  box-shadow: ${props => (props.mode ? '' : '0 0 10px #ebebeb')};
`
export const LoginImageContainer = styled.div`
  background-color: ${props => (props.mode ? '#000000' : '#ffffff')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => (props.mode ? '20px 0px' : '')};
  border-radius: 5px 5px 0px 0px;
`
export const LabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  background-color: transparent;
`

export const LoginImage = styled.img`
  width: 150px;
  height: 40px;
`

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.mode ? '#000000' : '#ffffff')};
  border-radius: 0px 0px 5px 5px;
`
export const LabelText = styled.label`
  margin-bottom: 10px;
  color: #909090;
  font-size: 14px;
  font-weight: bold;
`
export const InputField = styled.input`
  width: 250px;
  border: 0.75px solid #909090;
  padding: 8px 5px;
  border-radius: 2px;
  outline: none;
  background-color: transparent;
  color: ${props => (props.mode ? '#ffffff' : '#313131')};
`
export const CheckBoxContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`
export const CheckBoxInputField = styled.input`
  width: 15px;
  outline: none;
  margin-right: 10px;
  background-color: transparent;
  cursor: pointer;
`

export const SubmitButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: 0px;
  padding: 8px;
  width: 250px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 0px;
  margin-top: 10px;
`
export const CheckBoxText = styled.label`
  color: ${props => (props.mode ? '#ebebeb' : '#313131')};
`
export const ErrorText = styled.p`
  color: #ff0000;
  width: 250px;
  font-size: 12px;
  margin-top: 0px;
`
export const ErrorBox = styled.div`
  width: 250px;
  height: 20px;
  margin-top: 0px;
`

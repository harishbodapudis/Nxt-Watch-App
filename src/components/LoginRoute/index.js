import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect, withRouter} from 'react-router-dom'
import UpdateValues from '../../context/UpdateValues'

import {
  MainContainer,
  FormContainer,
  LoginImageContainer,
  LoginImage,
  FormBox,
  LabelText,
  InputField,
  CheckBoxContainer,
  CheckBoxText,
  SubmitButton,
  CheckBoxInputField,
  LabelInputContainer,
  ErrorText,
  ErrorBox,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    passwordInputType: false,
  }

  submitAndCallApi = async event => {
    event.preventDefault()
    const {username, password} = this.state
    console.log('Success....')
    console.log(username, password)

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    console.log(response)

    if (response.ok) {
      const data = await response.json()
      this.setState({username: '', password: '', errorMsg: data.errorMsg})
      this.setCookie(data)
    } else {
      const responseData = await response.json()
      const data = {errorMsg: responseData.error_msg}
      this.setState({username: '', password: '', errorMsg: data.errorMsg})
      console.log(data.errorMsg)
    }
  }

  setUserName = event => {
    this.setState({username: event.target.value})
    console.log(event.target.value)
  }

  setPassword = event => {
    this.setState({password: event.target.value})
    console.log(event.target.value)
  }

  setCheckBox = () => {
    console.log('hellow..')
    this.setState(prevState => ({
      passwordInputType: !prevState.passwordInputType,
    }))
  }

  setCookie = data => {
    const {history} = this.props
    Cookies.set('jwt_token', data.jwt_token, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  render() {
    const {username, password, errorMsg, passwordInputType} = this.state
    console.log(username, password, errorMsg)
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken) {
      console.log(jwtToken)
      return <Redirect to="/" />
    }

    return (
      <UpdateValues.Consumer>
        {value => {
          const {mode} = value
          console.log(mode)
          return (
            <MainContainer mode={mode}>
              <FormContainer mode={mode}>
                <LoginImageContainer mode={mode}>
                  <LoginImage
                    src={
                      mode
                        ? `https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png`
                        : `https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png`
                    }
                    alt="website logo"
                  />
                </LoginImageContainer>
                <FormBox onSubmit={this.submitAndCallApi} mode={mode}>
                  <LabelInputContainer>
                    <LabelText htmlFor="username">USERNAME</LabelText>
                    <InputField
                      type="text"
                      placeholder="Username"
                      onChange={this.setUserName}
                      id="username"
                      value={username}
                      mode={mode}
                    />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <LabelText htmlFor="password">PASSWORD</LabelText>
                    <InputField
                      type={passwordInputType ? 'text' : 'password'}
                      placeholder="Password"
                      onChange={this.setPassword}
                      id="password"
                      value={password}
                      mode={mode}
                    />
                  </LabelInputContainer>
                  <CheckBoxContainer>
                    <CheckBoxInputField
                      type="checkbox"
                      onChange={this.setCheckBox}
                      id="showPassword"
                    />
                    <CheckBoxText htmlFor="showPassword" mode={mode}>
                      Show Password
                    </CheckBoxText>
                  </CheckBoxContainer>
                  <SubmitButton type="submit">Login</SubmitButton>
                  <ErrorBox>
                    {errorMsg ? <ErrorText>*{errorMsg}</ErrorText> : <></>}
                  </ErrorBox>
                </FormBox>
              </FormContainer>
            </MainContainer>
          )
        }}
      </UpdateValues.Consumer>
    )
  }
}

export default withRouter(LoginRoute)

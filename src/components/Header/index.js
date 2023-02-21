import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {BiSun} from 'react-icons/bi'
import Cookies from 'js-cookie'
import {IoIosMoon} from 'react-icons/io'
import Popup from 'reactjs-popup'
import PopupBox from '../PopupBox'
import UpdateValues from '../../context/UpdateValues'

import {
  HeaderContainer,
  HeaderLogoImageBox,
  HeaderLogoImage,
  HeaderDetailsBox,
  HeaderModeButton,
  HeaderUserImage,
  HeaderLogoutButton,
  PopupContainer,
  PopupButton,
  ModalBox,
} from './styledComponents'

class Header extends Component {
  setMode = () => {
    const {changeModes} = this.props
    console.log('button. clicked..!')
    changeModes()
  }

  logoutBtn = () => {
    console.log('logout btn clicked')
  }

  logoutFromWebsite = () => {
    console.log('removed')
    const {history} = this.props
    console.log(history)
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <UpdateValues.Consumer>
        {value => {
          const {changeMode, mode} = value

          return (
            <HeaderContainer mode={mode}>
              <HeaderLogoImageBox to="/">
                <HeaderLogoImage
                  src={
                    mode
                      ? `https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png`
                      : `https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png`
                  }
                  alt="website logo"
                />
              </HeaderLogoImageBox>
              <HeaderDetailsBox>
                <HeaderModeButton
                  data-testid="theme"
                  type="button"
                  onClick={changeMode}
                  mode={mode}
                >
                  {mode ? <BiSun /> : <IoIosMoon mode={mode} />}
                </HeaderModeButton>
                <HeaderUserImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                  alt="profile"
                />
                <PopupBox
                  logoutFromWebsite={this.logoutFromWebsite}
                  mode={mode}
                />
              </HeaderDetailsBox>
            </HeaderContainer>
          )
        }}
      </UpdateValues.Consumer>
    )
  }
}

export default withRouter(Header)

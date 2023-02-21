import {Component} from 'react'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import UpdateValues from '../../context/UpdateValues'
import {
  ModalBox,
  HeaderLogoutButton,
  CloseBox,
  ModalButtonsBox,
  CancelButton,
  ConfirmButton,
  ModalContainer,
} from './styledComponents'

class PopupBox extends Component {
  render() {
    const {logoutFromWebsite} = this.props
    return (
      <UpdateValues.Consumer>
        {values => {
          const {mode} = values

          return (
            <Popup
              modal
              trigger={
                <HeaderLogoutButton type="button" mode={mode}>
                  Logout
                </HeaderLogoutButton>
              }
            >
              {close => (
                <ModalBox>
                  <ModalContainer mode={mode}>
                    <CloseBox mode={mode}>
                      Are you sure, you want to logout?
                    </CloseBox>
                    <ModalButtonsBox>
                      <CancelButton type="button" onClick={close} mode={mode}>
                        Cancel
                      </CancelButton>
                      <ConfirmButton
                        type="button"
                        onClick={logoutFromWebsite}
                        mode={mode}
                      >
                        Confirm
                      </ConfirmButton>
                    </ModalButtonsBox>
                  </ModalContainer>
                </ModalBox>
              )}
            </Popup>
          )
        }}
      </UpdateValues.Consumer>
    )
  }
}

export default PopupBox

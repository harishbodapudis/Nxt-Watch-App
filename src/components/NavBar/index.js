import {Component} from 'react'
import {
  NavContainer,
  NavItemsBox,
  NavLinkText,
  NavLinksBox,
  NavDetailsBox,
  ContactsText,
  SocialMediaItemsBox,
  SocialMediaItem,
  SpecialText,
  SocialMediaImage,
  NavHomeLogo,
  NavGamingLogo,
  NavTrendingLogo,
  NavSavedVideosLogo,
} from './styledComponents'
import UpdateValues from '../../context/UpdateValues'

class NavBar extends Component {
  render() {
    return (
      <UpdateValues.Consumer>
        {value => {
          const {mode, activeItem, changeNavBarActiveItem} = value

          const homeActiveBtn = () => {
            changeNavBarActiveItem('HOME')
          }

          const trendingActiveBtn = () => {
            changeNavBarActiveItem('TRENDING')
          }

          const gamingActiveBtn = () => {
            changeNavBarActiveItem('GAMING')
          }

          const savedVideosActiveBtn = () => {
            changeNavBarActiveItem('SAVED')
          }

          return (
            <NavContainer mode={mode}>
              <NavLinksBox>
                <NavItemsBox
                  mode={mode}
                  active={activeItem === 'HOME'}
                  onClick={homeActiveBtn}
                >
                  <NavHomeLogo icon={activeItem === 'HOME'} />
                  <NavLinkText to="/" mode={mode}>
                    Home
                  </NavLinkText>
                </NavItemsBox>

                <NavItemsBox
                  mode={mode}
                  active={activeItem === 'TRENDING'}
                  onClick={trendingActiveBtn}
                >
                  <NavTrendingLogo icon={activeItem === 'TRENDING'} />
                  <NavLinkText to="/trending" mode={mode}>
                    Trending
                  </NavLinkText>
                </NavItemsBox>

                <NavItemsBox
                  mode={mode}
                  active={activeItem === 'GAMING'}
                  onClick={gamingActiveBtn}
                >
                  <NavGamingLogo icon={activeItem === 'GAMING'} />
                  <NavLinkText to="/gaming" mode={mode}>
                    Gaming
                  </NavLinkText>
                </NavItemsBox>

                <NavItemsBox
                  mode={mode}
                  active={activeItem === 'SAVED'}
                  onClick={savedVideosActiveBtn}
                >
                  <NavSavedVideosLogo icon={activeItem === 'SAVED'} />
                  <NavLinkText to="/saved-videos" mode={mode}>
                    Saved videos
                  </NavLinkText>
                </NavItemsBox>
              </NavLinksBox>
              <NavDetailsBox>
                <ContactsText>CONTACT US</ContactsText>
                <SocialMediaItemsBox>
                  <SocialMediaItem>
                    <SocialMediaImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                  </SocialMediaItem>
                  <SocialMediaItem>
                    <SocialMediaImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt=" twitter logo"
                    />
                  </SocialMediaItem>
                  <SocialMediaItem>
                    <SocialMediaImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt=" linked in logo"
                    />
                  </SocialMediaItem>
                </SocialMediaItemsBox>
                <SpecialText>
                  Enjoy! Now to see your channels and recommendations!
                </SpecialText>
              </NavDetailsBox>
            </NavContainer>
          )
        }}
      </UpdateValues.Consumer>
    )
  }
}

export default NavBar

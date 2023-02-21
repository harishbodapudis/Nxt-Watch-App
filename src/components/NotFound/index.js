import {Component} from 'react'
import Header from '../Header'
import NavBar from '../NavBar'
import UpdateValues from '../../context/UpdateValues'

import {
  NotFoundDetailsContainer,
  NotFoundBody,
  NotFoundDataBody,
  NotFoundImage,
  HeadingText,
  ParaText,
} from './styledComponents'

let contextValues = null

class NotFound extends Component {
  componentDidMount() {
    contextValues.changeNavBarActiveItem('NONE')
  }

  render() {
    return (
      <UpdateValues.Consumer>
        {value => {
          const {mode} = value
          contextValues = value
          return (
            <NotFoundDetailsContainer mode={mode}>
              <Header />
              <NotFoundBody>
                <NavBar />
                <NotFoundDataBody mode={mode}>
                  <NotFoundImage
                    src={
                      mode
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                    }
                    alt="not found"
                  />
                  <HeadingText mode={mode}>Page Not Found</HeadingText>
                  <ParaText mode={mode}>
                    we are sorry, the page you requested could not be found.
                  </ParaText>
                </NotFoundDataBody>
              </NotFoundBody>
            </NotFoundDetailsContainer>
          )
        }}
      </UpdateValues.Consumer>
    )
  }
}

export default NotFound

import {Component} from 'react'
import Cookies from 'js-cookie'
import {Route, Switch, Redirect} from 'react-router-dom'
import ChannelVideoDetails from './components/ChannelVideoDetails'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import SavedVideos from './components/SavedVideos'
import Gaming from './components/Gaming'
import TrendingRoute from './components/TrendingRoute'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import UpdateValues from './context/UpdateValues'
import './App.css'

// Replace your code here
class App extends Component {
  state = {mode: false, savedVideosData: [], activeItem: ''}

  changeMode = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  changeNavBarActiveItem = item => {
    console.log(item)
    this.setState({activeItem: item})
  }

  addVideosToSavedPage = newData => {
    const {savedVideosData} = this.state

    if (savedVideosData.length === 0) {
      this.setState(prevState => ({
        savedVideosData: [newData, ...prevState.savedVideosData],
      }))
    } else {
      const checkId = savedVideosData.map(item => item.id === newData.id)
      if (checkId[0]) {
        console.log(checkId[0])
        const finalData = savedVideosData.filter(item => item.id !== newData.id)
        console.log(finalData)
        this.setState({savedVideosData: [...finalData]})
      } else {
        this.setState(prevState => ({
          savedVideosData: [newData, ...prevState.savedVideosData],
        }))
      }
    }
  }

  render() {
    const {savedVideosData, mode, activeItem} = this.state

    return (
      <UpdateValues.Provider
        value={{
          mode,
          activeItem,
          savedVideos: savedVideosData,
          changeMode: this.changeMode,
          changeNavBarActiveItem: this.changeNavBarActiveItem,
          addVideosToSavedPage: this.addVideosToSavedPage,
        }}
      >
        <Switch>
          <Route path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={ChannelVideoDetails}
          />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </UpdateValues.Provider>
    )
  }
}

export default App

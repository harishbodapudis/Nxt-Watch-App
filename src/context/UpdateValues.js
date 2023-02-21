import React from 'react'

const UpdateValues = React.createContext({
  mode: false,
  savedVideos: [],
  changeMode: () => {},
  logOut: () => {},
})

export default UpdateValues

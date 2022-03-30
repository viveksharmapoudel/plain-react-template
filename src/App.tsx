import React from 'react'
import Routing from './routes'
import { GlobalStyles } from './styles/global-styles'
import 'antd/dist/antd.css'

function App() {
  return (
    <>
      <GlobalStyles />
      <Routing />
    </>
  )
}

export default App

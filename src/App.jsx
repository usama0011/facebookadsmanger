import React from 'react'
import './App.css'
import SideBar from './SideBar'
import Header from './components/Header'
import MainPages from './components/MainPages'
import NavigationButtons from './components/NavigationButtons'
import Test from './components/Test'
import Ads from './components/Ads'

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <SideBar />
      </div>
      <div className="maindiv">
        <Header />
        <MainPages />
        <NavigationButtons />
        <Test />
        <Ads />
      </div>
    </div>
  )
}

export default App
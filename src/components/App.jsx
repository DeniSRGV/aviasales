import React from 'react'

import Filter from './Filters/Filters'
import logo from './Logo.svg'
import Tabs from './Tabs/Tabs'
import Tiket from './Tiket/Tiket'

const App = () => {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="main-wrapper">
        <div className="left-wrapper">
          <Filter />
        </div>
        <div className="right-wrapper">
          <Tabs />
          <Tiket />
        </div>
      </div>
    </div>
  )
}

export default App

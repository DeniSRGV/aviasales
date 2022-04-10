import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getData } from '../redux/actions/tickets'

import Filter from './Filters/Filters'
import logo from './Logo.svg'
import Tabs from './Tabs/Tabs'
import TicketContent from './Ticket/Ticket'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  const state = useSelector(({ state }) => state)
  const { filters } = state
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="main-wrapper">
        <div className="left-wrapper">
          <Filter filters={filters} />
        </div>
        <div className="right-wrapper">
          <Tabs />
          <TicketContent state={state} />
        </div>
      </div>
    </div>
  )
}

export default App

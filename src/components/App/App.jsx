import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchData } from '../../redux/actions/tickets'
import Filter from '../Filters/Filters'
import Tabs from '../Tabs/Tabs'
import TicketContent from '../Ticket/Ticket'

import logo from './Logo.svg'
const App = () => {
  const dispatch = useDispatch()
  const state = useSelector(({ state }) => state)
  const { filters } = state
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

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

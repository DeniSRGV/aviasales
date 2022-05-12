import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setLoaded, setTicketsData } from '../../redux/actions/tickets'
import ApiService from '../../ApiService/ApiService'
import Filter from '../Filters/Filters'
import Tabs from '../Tabs/Tabs'
import TicketContent from '../Ticket/Ticket'

import logo from './Logo.svg'
const App = () => {
  const apiService = new ApiService()
  const dispatch = useDispatch()
  useEffect(() => {
    apiService
      .getSearchId()
      .then((id) => apiService.getTickets(id))
      .then((tickets) => {
        dispatch(setTicketsData(tickets))
        dispatch(setLoaded(false))
      })
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

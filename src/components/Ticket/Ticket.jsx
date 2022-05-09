import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'

import Spinner from '../Spinner/Spinner'
import {
  changeStopsDeclension,
  timeToTrip,
  duration,
  getSortedTickets,
  getFilteredTickets,
  getPrettyPrice
} from '../../utils'
import { showTickets } from '../../redux/actions/filters'

const Ticket = ({ dataTickets, isLoaded, slices }) => {
  const dispatch = useDispatch()
  return (
    <>
      {!isLoaded ? (
        dataTickets.slice(0, slices).map((item) => {
          return (
            <div className="ticket-wrapper" key={uuidv4()}>
              <div className="ticket-header">
                <div className="price">{getPrettyPrice(item.price)}</div>
                <div className="photo">
                  <img
                    src={`https://pics.avs.io/99/36/${item.carrier}.png`}
                    alt="avia-logo"
                  />
                </div>
              </div>
              {item.segments.map((elem) => (
                <div className="ticket-info" key={uuidv4()}>
                  <div className="ticket-block">
                    <span className="subtitle">
                      {elem.origin} - {elem.destination}
                    </span>
                    {timeToTrip(elem.date, elem.duration)}
                  </div>
                  <div className="ticket-block">
                    <span className="subtitle">В пути</span>
                    {duration(elem.duration)}
                  </div>
                  <div className="ticket-block">
                    <span className="subtitle">
                      {changeStopsDeclension(elem.stops)}
                    </span>
                    {elem.stops.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          )
        })
      ) : (
        <Spinner />
      )}
      <div
        className="tab active ticket-show-btn"
        onClick={() => dispatch(showTickets(slices))}
      >
        Показать еще 5 билетов!
      </div>
    </>
  )
}
const TicketContent = ({ state }) => {
  const { dataTickets, isLoaded, isError, filters, tabs, slices } = state
  const appliedFilters = filters.filter((e) => e.isChecked)
  const filteredTickets = getFilteredTickets(appliedFilters, dataTickets || [])

  const activeIndex = tabs.findIndex((e) => e.isActive === true)
  const sortedTickets = getSortedTickets(tabs[activeIndex].id, filteredTickets)
  const content = isError ? (
    <div className="ticket-error">Server Error, please reload page</div>
  ) : (
    <Ticket dataTickets={sortedTickets} isLoaded={isLoaded} slices={slices} />
  )
  return <>{content}</>
}
export default TicketContent

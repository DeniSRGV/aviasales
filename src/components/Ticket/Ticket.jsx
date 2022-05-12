import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import LoadingBar from 'react-top-loading-bar'

import {
  changeStopsDeclension,
  timeToTrip,
  duration,
  getSortedTickets,
  getFilteredTickets,
  getPrettyPrice
} from '../../utils/utils'
import { showTickets } from '../../redux/actions/filters'

const Ticket = ({ dataTickets, slices, isLoaded }) => {
  const dispatch = useDispatch()

  return (
    <>
      {isLoaded ? (
        <LoadingBar
          progress={100}
          waitingTime={20000}
          loaderSpeed={7000}
          height={7}
          shadow={false}
          color="rgba(0, 0, 255, 0.8)"
          containerStyle={{ position: 'relative' }}
          className="progress-bar-stripes"
        />
      ) : null}
      {dataTickets?.slice(0, slices).map((item) => {
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
      })}
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

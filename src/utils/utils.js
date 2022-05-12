import { add, format } from 'date-fns'

export function changeStopsDeclension(stops) {
  if (stops.length === 0) {
    return 'Без пересадок'
  } else if (stops.length === 1) {
    return '1 пересадка'
  } else {
    return `${stops.length} пересадки`
  }
}
export function getPrettyPrice(price) {
  return `${price.toLocaleString('ru-RU', {
    style: 'decimal',
    currency: 'RUB'
  })} Р`
}

export function timeToTrip(date, second) {
  var result = add(new Date(date), {
    seconds: second
  })

  return `${format(new Date(date), 'HH:mm')} - ${format(
    new Date(result),
    'HH:mm'
  )}`
}

export function duration(seconds) {
  const hours = (seconds / 3600) ^ 0
  const minutes = ((seconds - hours * 3600) / 60) ^ 0

  const str = `${
    hours === 0 ? '' : hours < 10 ? '0' + hours + 'ч' : hours + 'ч'
  } ${
    minutes === 0 ? '' : minutes < 10 ? '0' + minutes + ' м' : minutes + ' м'
  }`

  return str
}

// filterTickets

function sortByPrice(a, b) {
  const priceA = a.price
  const priceB = b.price

  if (priceA > priceB) {
    return 1
  }
  return -1
}

function sortByTime(a, b) {
  let timeA = 0
  let timeB = 0

  a.segments.forEach((e) => {
    timeA = timeA + e.duration
  })
  b.segments.forEach((e) => {
    timeB = timeB + e.duration
  })
  if (timeA > timeB) {
    return 1
  }
  return -1
}
export function getFilteredTickets(appliedFilters, tickets) {
  const activeValues = appliedFilters.map((e) => e.value)

  if (activeValues.length > 0) {
    const filteredTickets = tickets.filter((e) => {
      const stops = e.segments
        .map((e) => e.stops)
        .sort((a, b) => {
          if (a.length < b.length) {
            return 1
          } else if (a.length > b.length) {
            return 0
          }
          return -1
        })

      const count = stops[0].length

      if (activeValues.includes(count)) {
        return true
      }
      return false
    })
    return filteredTickets
  }

  return tickets
}

export function getSortedTickets(activeTabId, tickets) {
  let sortedTickets
  switch (activeTabId) {
    case 1:
      sortedTickets = tickets.sort(sortByPrice)
      return sortedTickets
    case 2:
      sortedTickets = tickets.sort(sortByTime)
      return sortedTickets
    default:
      break
  }
}

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
  // I вариант
  return `${price.toLocaleString('ru-RU', {
    style: 'decimal',
    currency: 'RUB'
  })} Р`

  //II вариант
  //   return price
  //     .toString()
  //     .split('')
  //     .reverse()
  //     .reduce((acc, char, i) => {
  //       if (i % 3 === 0) {
  //         return acc + ' ' + char
  //       }
  //       return acc + char
  //     }, 'р ')
  //     .split('')
  //     .reverse()
  //     .join('')
}

export function timeToTrip(date, second) {
  //   let dateOut = new Date(date)
  //   const outHours = dateOut.getHours()
  //   const outMinutes = dateOut.getMinutes()
  //   const inHours = new Date(
  //     dateOut.setHours(dateOut.getHours() + Math.ceil(time / 60))
  //   ).getHours()
  //   const inMinutes = new Date(
  //     dateOut.setMinutes(dateOut.getMinutes() + time)
  //   ).getMinutes()
  //   return `${outHours}:${outMinutes} - ${inHours}:${inMinutes}`

  var result = add(new Date(date), {
    seconds: second
  })

  return `${format(new Date(date), 'HH:mm')} - ${format(
    new Date(result),
    'HH:mm'
  )}`
}
// duration

export function duration(seconds) {
  //   return Math.ceil(duration / 60) + 'ч ' + (duration % 60) + 'м'
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

// функция сортировки билетов по цене от меньшего к большему
function sortByPrice(a, b) {
  const priceA = a.price
  const priceB = b.price

  if (priceA > priceB) {
    return 1
  }
  return -1
}

// функция сортировки билетов по времени полета от меньшего к большему

function sortByTime(a, b) {
  // I вариант ( для сортировки по одному направлениям билета (ТУДА)
  //   return a.segments[0].duration - b.segments[0].duration

  // II вариант ( для сортировки по двум направлениям билета (ТУДА - ОБРАТНО))
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
  if (activeTabId === 1) {
    const sortedTickets = tickets.sort(sortByPrice)
    return sortedTickets
  }

  if (activeTabId === 2) {
    const sortedTickets = tickets.sort(sortByTime)
    return sortedTickets
  }

  return tickets
}

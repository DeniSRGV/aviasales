export const setTicketsData = (items) => ({
  type: 'SET_TICKETS_DATA',

  payload: items
})

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload
})

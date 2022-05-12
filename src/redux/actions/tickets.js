export const setTicketsData = (items) => ({
  type: 'SET_TICKETS_DATA',
  payload: items
})

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload
})
export const setError = (payload) => ({
  type: 'SET_ERROR',
  payload
})

export const fetchData = () => async (dispatch) => {
  const fetchTickets = (id) => {
    return fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${id}`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch(setTicketsData(json.tickets))
        if (!json.stop) {
          fetchTickets(id)

          return dispatch(setLoaded(!json.stop))
        }
        return dispatch(setLoaded(!json.stop))
      })
      .catch((err) => {
        if (err instanceof SyntaxError) {
          return fetchTickets(id)
        }
        return dispatch(setError(true))
      })
  }

  ;(() => {
    return fetch('https://aviasales-test-api.kata.academy/search')
      .then((response) => response.json())
      .then((json) => fetchTickets(json.searchId))
      .catch(() => dispatch(setError(true)))
  })()
}

import axios from 'axios'

export const getData = () => async (dispatch) => {
  dispatch(setLoaded(false))
  const getDataTickets = async function () {
    let results = await axios(
      // 'https://front-test.beta.aviasales.ru/search'
      'https://aviasales-test-api.kata.academy/search'
    ).then((res) =>
      axios
        .get(
          // `https://front-test.beta.aviasales.ru/tickets?searchId=${res.data.searchId}`
          `https://aviasales-test-api.kata.academy/tickets?searchId=${res.data.searchId}`
        )
        .catch((e) => {
          if (e.response) {
            console.log('response error')

            return getDataTickets()
          }
        })
    )

    let sliceRes = await results.data.tickets
    dispatch(setTicketsData(sliceRes))
  }
  getDataTickets()
}

export const setTicketsData = (items) => ({
  type: 'SET_TICKETS_DATA',
  payload: items
})

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload
})

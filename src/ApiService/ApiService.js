class ApiService {
  // _apiBase = 'https://front-test.beta.aviasales.ru/'
  _apiBase = 'https://aviasales-test-api.kata.academy/'

  async getSearchId() {
    const response = await fetch(`${this._apiBase}search`)
    if (!response.ok) {
      throw new Error(
        `Could not fetch ${this._apiBase}search, received ${response.status}`
      )
    }
    const resData = await response.json()
    return resData.searchId
  }

  async getTickets(searchId, oldTickets = []) {
    const response = await fetch(`${this._apiBase}tickets?searchId=${searchId}`)

    if (!response.ok) {
      return this.getTickets(searchId, oldTickets)
    }
    const resData = await response.json()
    const ticketsArr = [...oldTickets, ...resData.tickets]

    if (!resData.stop) {
      return this.getTickets(searchId, ticketsArr)
    }
    return ticketsArr
  }
}
export default ApiService
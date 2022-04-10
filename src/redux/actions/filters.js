export const setFilter = (item, filters) => (dispatch) => {
  let updatedFilters

  if (item.id === 1) {
    let value = !item.isChecked
    updatedFilters = filters.map((e) => {
      e.isChecked = value

      return e
    })
  } else {
    updatedFilters = filters.map((e) => {
      if (e.id === 1) {
        e.isChecked = false
      }
      if (item.id === e.id) {
        e.isChecked = !e.isChecked
      }

      return e
    })
  }
  if (filters.slice(1).every((el) => el.isChecked === true)) {
    updatedFilters = filters.map((e) => {
      if (e.id === 1) {
        e.isChecked = !e.isChecked
      }
      return e
    })
  }

  dispatch(setTabsState(updatedFilters))
}

export const setTabsState = (updatedFilters) => ({
  type: 'SET_FILTERS',
  payload: updatedFilters
})
export const showTickets = (slices) => ({
  type: 'SET_SLICES',
  payload: slices + 5
})

export const setFilter = (item, filters) => (dispatch) => {
  // const ALL = AllArr.every((el) => el.isChecked === item.isChecked)

  let updatedFilters
  let i = !item.isChecked

  if (item.id === 1) {
    updatedFilters = filters.map((el) => {
      el.isChecked = i
      return el
    })
  } else {
    updatedFilters = filters.map((el) => {
      if (el.id === 1) {
        el.isChecked = false
      }
      if (item.id === el.id) {
        el.isChecked = !el.isChecked
      }

      return el
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

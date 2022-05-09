export const handleCheckFilter = (id, filters) => async (dispatch) => {
  if (filters[0].isChecked) {
    switch (id) {
      case 1:
        dispatch(removeFilters())
        return
      default:
        dispatch(setFilterValue(id))
        dispatch(setFilterValue(1))
    }
  } else {
    switch (id) {
      case 1:
        dispatch(setAllFilterValues())
        return
      default:
        dispatch(setFilterValue(id))
    }
  }
}
export const setFilterValue = (id) => ({
  type: 'SET_FILTER',
  payload: id
})
export const removeFilters = () => ({
  type: 'REMOVE_FILTERS'
})
export const setAllFilterValues = () => ({
  type: 'SET_ALL_FILTER'
})

export const showTickets = (slices) => ({
  type: 'SET_SLICES',
  payload: slices + 5
})

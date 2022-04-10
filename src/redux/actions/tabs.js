export const setTabs = (item, tabsState) => async (dispatch) => {
  const updateTabs = tabsState.map((tab) => {
    if (item.id === tab.id) {
      tab.isActive = true
      return tab
    }
    tab.isActive = false
    return tab
  })
  dispatch(setTabsState(updateTabs))
}

export const setTabsState = (upd) => ({
  type: 'SET_SORTING_TABS',
  payload: upd
})

export const setTabs = (item, tabsState) => async (dispatch) => {
  const updateTabs = tabsState.map((tab) => {
    switch (tab.id) {
      case item.id:
        tab.isActive = true
        return tab
      default:
        tab.isActive = false
        return tab
    }
  })
  dispatch(setTabsState(updateTabs))
}

export const setTabsState = (upd) => ({
  type: 'SET_SORTING_TABS',
  payload: upd
})

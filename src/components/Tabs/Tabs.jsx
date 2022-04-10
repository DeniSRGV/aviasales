import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setTabs } from '../../redux/actions/tabs'

const Tabs = () => {
  const dispatch = useDispatch()
  const { tabs } = useSelector(({ state }) => state)
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <div
          className={tab.isActive ? ' tab active' : 'tab'}
          key={tab.id}
          onClick={() => dispatch(setTabs(tab, tabs))}
        >
          {tab.text}
        </div>
      ))}
    </div>
  )
}
export default Tabs

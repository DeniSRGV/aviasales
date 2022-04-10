import React from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { setFilter } from '../../redux/actions/filters'

const Filter = ({ filters }) => {
  const dispatch = useDispatch()

  return (
    <div className="filter-block">
      <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <div className="count">
        <ul>
          {filters.map((item) => (
            <label
              className="checkbox"
              key={uuidv4()}
              onChange={() => dispatch(setFilter(item, filters))}
            >
              <li>
                <input
                  className="check"
                  type="checkbox"
                  checked={item.isChecked}
                  id={uuidv4()}
                  onChange={() => {}}
                />
                <span className="checkmark"></span>
                <div>{item.text}</div>
              </li>
            </label>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Filter

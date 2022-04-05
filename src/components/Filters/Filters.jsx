import React from 'react'

const Filter = () => {
  return (
    <div className="filter-block">
      <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <div className="count">
        <ul>
          <li>
            <label className="checkbox">
              <input className="check" type="checkbox" />
              <span className="checkmark"></span>
              <div>Все</div>
            </label>
          </li>

          <li>
            <label className="checkbox">
              <input className="check" type="checkbox" />
              <span className="checkmark"></span>
              <div>ВСЕ</div>
            </label>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Filter

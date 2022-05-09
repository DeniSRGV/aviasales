const initialState = {
  dataTickets: [],
  isLoaded: true,
  isError: false,
  slices: 5,
  filters: [
    { id: 1, text: 'Все', isChecked: true, value: -1 },
    { id: 2, text: 'Без пересадок', isChecked: true, value: 0 },
    { id: 3, text: '1 пересадка', isChecked: true, value: 1 },
    { id: 4, text: '2 пересадки', isChecked: true, value: 2 },
    { id: 5, text: '3 пересадки', isChecked: true, value: 3 }
  ],
  tabs: [
    {
      id: 1,
      text: 'Самый дешевый',
      isActive: true
    },
    {
      id: 2,
      text: 'Самый быстрый',
      isActive: false
    }
  ]
}

const state = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TICKETS_DATA':
      return {
        ...state,
        dataTickets: action.payload
      }

    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload
      }

    case 'SET_SORTING_TABS':
      return {
        ...state,
        tabs: action.payload
      }

    case 'SET_FILTERS':
      return {
        ...state,
        filters: action.payload
      }
    case 'SET_SLICES':
      return {
        ...state,
        slices: action.payload
      }

    default:
      return state
  }
}

export default state

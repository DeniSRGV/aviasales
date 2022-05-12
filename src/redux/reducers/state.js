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
        dataTickets: [...state.dataTickets, ...action.payload]
      }

    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload
      }
    case 'SET_ERROR':
      return {
        ...state,
        isError: action.payload
      }

    case 'SET_SORTING_TABS':
      return {
        ...state,
        tabs: action.payload
      }

    case 'SET_SLICES':
      return {
        ...state,
        slices: action.payload
      }
    case 'REMOVE_FILTERS':
      return {
        ...state,
        filters: state.filters.map((el) => ({ ...el, isChecked: false }))
      }
    case 'SET_ALL_FILTER':
      return {
        ...state,
        filters: state.filters.map((el) => ({ ...el, isChecked: true }))
      }
    case 'SET_FILTER':
      return {
        ...state,
        filters: state.filters.map((item) =>
          item.id === action.payload
            ? { ...item, isChecked: !item.isChecked }
            : item
        )
      }
    default:
      return state
  }
}

export default state

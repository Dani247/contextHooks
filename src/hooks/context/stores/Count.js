import Store from '../index'

// * export initial state
export const initState = 0

// * export actions and state
export const useCount = () => {
  // * pull out count out of global state and returns it
  const [ state, setState ] = Store.useStore()
  const { count } = state

  // * actions
  const increment = () => {
    setState({
      ...state,
      count: count + 1
    })
  }

  const decrement = () => {
    setState({
      ...state,
      count: count - 1
    })
  }

  // * return state and actions
  return [
    count,
    {
      increment,
      decrement
    }
  ]
}

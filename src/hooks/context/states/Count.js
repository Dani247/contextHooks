import Store from '../utils/'
const { useStore } = Store

export const initState = 0

// * returns count value
export const useCount = () => {
  const [ { count } ] = useStore()
  return count
}

// * adds one to count
export const useIncrementCount = () => {
  const [ state, setState ] = useStore()
  return () => setState({
    ...state,
    count: state.count + 1
  })
}

// * substracts one to count
export const useDecrementCount = () => {
  const [ state, setState ] = useStore()
  return () => setState({
    ...state,
    count: state.count - 1
  })
}

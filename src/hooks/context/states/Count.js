import Store from '../utils/'
const useStore = Store.useStore

export const useCount = () => {
  const [ { count } ] = useStore()
  return count
}

export const useIncrementCount = () => {
  const [ state, setState ] = useStore()
  return () => setState({
    ...state,
    count: state.count + 1
  })
}

export const useDecrementCount = () => {
  const [ state, setState ] = useStore()
  return () => setState({
    ...state,
    count: state.count - 1
  })
}

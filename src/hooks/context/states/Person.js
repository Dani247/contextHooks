import Store from '../utils/'
const { useStore } = Store

export const initState = 'Daniel'

export const usePerson = () => {
  const [ { person } ] = useStore()
  return person
}

export const useChangePerson = () => {
  const [ state, setState ] = useStore()
  return (payload) => setState({
    ...state,
    person: payload
  })
}

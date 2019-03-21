import React, { useState, useContext, useMemo } from 'react'

export default function makeStore () {
  // * create context
  const Context = React.createContext()

  const Provider = ({ children, initState = {} }) => {
    // * Set initial state hook
    const [state, setState] = useState(initState)

    // ? console logger
    const loggerSetState = update => {
      console.log('%c old state', 'color: red', state)
      console.log('%c updater state', 'color: blue', update)
      setState(update)
      console.log('%c new state', 'color: green', update)
    }

    // * Store state into a memoized value
    const store = useMemo(() => [state, loggerSetState], [state])

    // * Return context Provider with the store as value
    return <Context.Provider value={store}>{children}</Context.Provider>
  }

  // * use Context hook
  const useStore = () => useContext(Context)

  return {
    Provider,
    useStore
  }
}

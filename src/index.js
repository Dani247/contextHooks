import React from 'react'
import ReactDOM from 'react-dom'

// * import components
import Counter from './components/Counter'
import Login from './components/Login'

// * import any initial state
import { initState as count } from './hooks/context/states/Count'
import { initState as person } from './hooks/context/states/Person'

// * import context provider
import Store from './hooks/context/utils'

// * compose states
const initState = {
  count,
  person
}

ReactDOM.render(<Store.Provider initState={initState}>
  <Counter />
  <Login />
</Store.Provider>, document.getElementById('root'))

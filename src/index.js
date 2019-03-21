import React from 'react'
import ReactDOM from 'react-dom'

// * import components
import Counter from './components/Counter'

// * import any initial state
import { initState as count } from './hooks/context/stores/Count'

// * import context provider
import Store from './hooks/context/utils'

// * compose states
const initState = {
  count
}

ReactDOM.render(<Store.Provider initState={initState}>
  <Counter />
</Store.Provider>, document.getElementById('root'))

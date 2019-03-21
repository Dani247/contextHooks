import React from 'react'

// * import count sub state
import { useCount } from '../hooks/context/stores/Count'

function Counter () {
  const [ count, { increment, decrement } ] = useCount()

  return (
    <div>
      <h1>Counter</h1>
      <h3>{count}</h3>
      <button onClick={increment}>+</button> <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter

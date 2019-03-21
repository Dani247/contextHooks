import React from 'react'

// * import actions
import { useCount, useIncrementCount, useDecrementCount } from '../hooks/context/states/Count'

function Counter () {
  const count = useCount()
  const increment = useIncrementCount()
  const decrement = useDecrementCount()

  return (
    <div>
      <h1>Counter</h1>
      <h3>{count}</h3>
      <button onClick={increment}>+</button> <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter

import React from 'react'

// * import actions
import { useCount, useIncrementCount, useDecrementCount } from '../hooks/context/states/Count'
import { usePerson } from '../hooks/context/states/Person'

function Counter () {
  const count = useCount()
  const increment = useIncrementCount()
  const decrement = useDecrementCount()
  const person = usePerson()

  return (
    <div>
      <h1>Name: {person}</h1>
      <h3>{count}</h3>
      <button onClick={increment}>+</button> <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter

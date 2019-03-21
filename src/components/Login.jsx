import React, { useRef } from 'react'

import { useChangePerson } from '../hooks/context/states/Person'

function Login () {
  const personRef = useRef('')
  const changePerson = useChangePerson()

  const changePersonHanlder = () => {
    changePerson(personRef.current.value)
  }

  return (
    <div>
      <input ref={personRef} type='text' /><button onClick={changePersonHanlder}>Add name</button>
    </div>
  )
}

export default Login

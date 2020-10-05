import React from 'react'
import { Redirect } from 'react-router-dom'
import { useStateValue } from './stateProvider'

function protectedRoute({ component: Component }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [{isAuthenticated}] = useStateValue()

  return (
    <div>
      { isAuthenticated ? ( <Component/> ) : ( <Redirect to={{ pathname: '/login' }} /> ) }
    </div>
  )
}

export default protectedRoute

import React from 'react'
import '../style/Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'
import { useStateValue } from '../stateProvider'
import { actionTypes } from '../reducer'

function Login() {

  const [state, dispatch] = useStateValue()
  
  const loginWithGoogle = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      })
    }).catch((error) => {
      alert(error)
    })
  }

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" alt=""/>
        <h1>Welcome to Slack Clone</h1>
        <Button onClick={loginWithGoogle}>Sign In with Google</Button>
      </div>
    </div>
  )
}

export default Login
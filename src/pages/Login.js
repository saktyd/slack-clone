import React from 'react'
import '../style/Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'
import { useStateValue } from '../stateProvider'
import { actionTypes } from '../reducer'
import browserStorage from '../browserStorage'
import { useHistory, Redirect } from "react-router-dom";

function Login() {

  let history = useHistory();

  const [{isAuthenticated}, dispatch] = useStateValue()
  
  const loginWithGoogle = () => {
    auth.signInWithPopup(provider).then((result) => {
      browserStorage.setKey('isAuthenticated', true)
      browserStorage.setKey('profile', result.additionalUserInfo.profile)

      dispatch({
        type: actionTypes.SET_USER,
        userProfile: result.additionalUserInfo.profile
      })
      
      history.push("/home");

    }).catch((error) => {
      alert(error)
    })
  }

  return (
    <div>
      { !isAuthenticated ? (
        <div className="login">
          <div className="login__container">
            <img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" alt=""/>
            <h1>Welcome to Slack Clone</h1>
            <Button onClick={loginWithGoogle}>Sign In with Google</Button>
          </div>
        </div>
      ) : (<Redirect to={{ pathname: '/' }} /> ) }
    </div>
  )
}

export default Login

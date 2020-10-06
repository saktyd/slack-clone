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
            <div className="login__container--header">
              <img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" height="30px" alt=""/>
              <h1>Slack</h1>
            </div>  
            <h1>Sign In to Slack Clone</h1>   
            <span>by Sakti Dewantoro</span>
            <Button onClick={loginWithGoogle}>
              <img src="https://www.iconfinder.com/data/icons/social-media-2210/24/Google-512.png" alt=""/>
              Sign In with Google</Button>
          </div>
        </div>
      ) : (<Redirect to={{ pathname: '/' }} /> ) }
    </div>
  )
}

export default Login

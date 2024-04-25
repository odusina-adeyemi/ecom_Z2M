import React, {useEffect} from 'react';
import {auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import {getRedirectResult} from 'firebase/auth';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {

useEffect(() => {
 const fetchData = async  () => {
const response = await getRedirectResult(auth);
console.log(response)
}
fetchData()

}, [])


const logGoogleUser = async () => {
  const {user} = await signInWithGooglePopup();
  // console.log(user)
  createUserDocumentFromAuth(user)
}

const logGoogleRedirectUser = async () => {
  const {user} = await signInWithGoogleRedirect();
   console.log(user)
}

  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={logGoogleUser}>
        Sign In With Google
      </button>

      <button onClick={logGoogleRedirectUser}>
        Sign In With Google Redirect
      </button>
      <SignUpForm/>
    </div>
  );

};

export default SignIn
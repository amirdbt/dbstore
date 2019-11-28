import React, { useState } from "react"
import FormInput from "../FormInput/FormInput"
import CustomButton from "../CustomButton/CustomButton"

import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/UserAction"
import { connect } from "react-redux"
import "./SignIn.scss"

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  })
  const { email, password } = userCredentials
  const handleChange = event => {
    const { value, name } = event.target
    setCredentials({
      ...userCredentials,
      [name]: value
    })
  }

  const handleSubmit = async event => {
    event.preventDefault()

    emailSignInStart(email, password)
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
})
export default connect(null, mapDispatchToProps)(SignIn)

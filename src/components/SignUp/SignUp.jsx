import React, { useState } from "react"
import { connect } from "react-redux"
import FormInput from "../FormInput/FormInput"
import CustomButton from "../CustomButton/CustomButton"
import { signUpStart } from "../../redux/user/UserAction"
import "./SignUp.scss"

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const { displayName, email, password, confirmPassword } = userCredentials
  const handleSubmit = async event => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("passwords dont match")
      return
    }

    signUpStart({ displayName, email, password })
  }

  const handleChange = event => {
    const { value, name } = event.target
    setUserCredentials({
      ...userCredentials,
      [name]: value
    })
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})
export default connect(null, mapDispatchToProps)(SignUp)

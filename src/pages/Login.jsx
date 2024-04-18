import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import { setUser } from "../store/slices/user"
import { authenticationService } from "../services/authentication.service"
import { LoginForm } from "../components/login/login-form"
import mail from "../styles/svg/mail.svg"

export const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [isSignup, setIsSignup] = useState(false)
  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    nickname: "",
    password: "",
  })

  const onInput = ({ target }) => {
    setFormFields({ ...formFields, [target.name]: target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    let user
    if (isSignup) {
      try {
        user = await authenticationService.signup(
          formFields.firstName,
          formFields.lastName,
          formFields.nickname,
          "",
          formFields.password
        )
      } catch (error) {
        dispatchEvent(new CustomEvent("app-message", { detail: error }))
      }
    } else {
      try {
        user = await authenticationService.login(
          formFields.nickname,
          formFields.password
        )
      } catch (error) {
        dispatchEvent(new CustomEvent("app-message", { detail: error }))
      }
    }
    if (user) {
      dispatch(setUser(user))
      dispatchEvent(
        new CustomEvent("app-message", {
          detail: (isSignup ? "Signup " : "Login ") + "succesful",
        })
      )
      sessionStorage.setItem("user", JSON.stringify(user))
      navigate("/")
    }
  }

  const onSetSignup = () => {
    setIsSignup(!isSignup)
  }

  return (
    <main className="login-page-container">
      <div className="login-form-container">
        <section className="logo-container">
          <img src={mail} alt="" />
          <h1>{isSignup ? "Sign Up" : "Login"}</h1>
        </section>
        <LoginForm
          onSubmit={onSubmit}
          onInput={onInput}
          password={formFields.password}
          nickname={formFields.nickname}
          firstName={formFields.firstName}
          lastName={formFields.lastName}
          isSignup={isSignup}
          onSetSignup={onSetSignup}
        ></LoginForm>
      </div>
    </main>
  )
}

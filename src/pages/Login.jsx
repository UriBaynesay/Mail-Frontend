import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { authenticationService } from "../services/authentication.service"
import { LoginForm } from "../components/login/login-form"
import mail from "../styles/svg/mail.svg"

export const LoginPage = () => {
  const navigate=useNavigate()
  const [nickname, setNickName] = useState("")
  const [password, setPassword] = useState("")

  const onInput = ({ target }) => {
    if (target.name === "nickname") {
      setNickName(target.value)
    } else setPassword(target.value)
  }
  const onLogin = async (e) => {
    e.preventDefault()
    const user = await authenticationService.login(nickname, password)
    if(user){
      window.sessionStorage.setItem("user",JSON.stringify(user))
      navigate("/")
    }
  }

  return (
    <main className="login-page-container">
      <div className="login-form-container">
        <section className="logo-container">
          <img src={mail} alt="" />
          <h1>Login</h1>
        </section>
        <LoginForm
          onLogin={onLogin}
          onInput={onInput}
          password={password}
          nickname={nickname}
        ></LoginForm>
      </div>
    </main>
  )
}

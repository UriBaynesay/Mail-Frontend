import { Fragment } from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

export const LoginForm = ({
  onLogin,
  onInput,
  onSetSignup,
  isSignup,
  firstName,
  lastName,
  nickname,
  password,
}) => {
  return (
    <form onSubmit={onLogin}>
      <TextField
        fullWidth
        name="nickname"
        label="Nickname"
        variant="outlined"
        value={nickname}
        onChange={onInput}
        required
      />
      <TextField
        fullWidth
        type="password"
        name="password"
        label="Password"
        variant="outlined"
        value={password}
        onChange={onInput}
        required
      />
      {isSignup && (
        <Fragment>
          <TextField
            fullWidth
            name="firstName"
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={onInput}
            required
          />
          <TextField
            fullWidth
            name="lastName"
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={onInput}
            required
          />
        </Fragment>
      )}
      <h4 onClick={onSetSignup}>
        {isSignup ? "Already have an account?" : "Create account"}
      </h4>
      <Button type="submit" variant="contained">
        {isSignup ? "Sign Up" : "Login"}
      </Button>
    </form>
  )
}

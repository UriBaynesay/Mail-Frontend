import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

export const LoginForm = ({ onLogin, onInput, nickname, password }) => {
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
      <Button type="submit" variant="contained">Login</Button>
    </form>
  )
}

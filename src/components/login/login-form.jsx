export const LoginForm = ({ onLogin, onInput, nickname, password }) => {
  return (
    <form onSubmit={onLogin}>
      <input
        type="text"
        placeholder="Nickname"
        value={nickname}
        name="nickname"
        onChange={onInput}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        name="password"
        onChange={onInput}
      />
      <button>Login</button>
    </form>
  )
}

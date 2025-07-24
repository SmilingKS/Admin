import { useState } from "react"
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPasword] = useState('')
  const [error, setError] = useState('')

  const handlerLogin = (e) => {
    if (password && email) {
      // validate user 
    } else {
      // invalidate user
      setError("invalid Admin credentails")
    }
  }
  return (
    <div className="login-container">
      <h2>Admin login</h2>
      <form onSubmit={handlerLogin} className="login-form">
        <input type="email" placeholder="Admin Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setEmail(e.target.value)} required />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login

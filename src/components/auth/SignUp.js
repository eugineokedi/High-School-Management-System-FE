import React from 'react'
import { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../features/Auth/AuthSlice';

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(signUp({ username, email, password }));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Username'
          value={username}
          name='username'
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          name='email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
        {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default SignUp

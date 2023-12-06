import './App.css';
import { signInWithGoogle } from './firebase'

function App() {
  return (
    <div className='hero'>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <h1>{localStorage.getItem('name')}</h1>
      <h1>{localStorage.getItem('email')}</h1>
      <img src={localStorage.getItem('profile')} />
    </div>
  )
}

export default App;

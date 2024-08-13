import './App.css';
import SignUp  from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';

function App() {
  return (
    <div className="App">
     <SignUp/>
     <SignIn/>
     <SignOut/>
    </div>
  );
}

export default App;

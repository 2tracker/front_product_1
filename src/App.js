import './App.css';
import { Route, Routes } from 'react-router-dom';
import Loginpage from './Page/Loginpage';
import Registrationpage from './Page/Registrationpage';
import Dashboard from './Page/Dashboard';
import UserRegistrationpage from './Page/UserRegistrationpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loginpage/>}/>
        <Route path='/signup' element={<Registrationpage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/user-register' element={<UserRegistrationpage/>}/>
      </Routes>
    </div>
  );
}

export default App;

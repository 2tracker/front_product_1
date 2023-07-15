import './App.css';
import { Route, Routes } from 'react-router-dom';
import Loginpage from './Page/Loginpage';
import Registrationpage from './Page/Registrationpage';
import UserRegistrationpage from './Page/UserRegistrationpage';
import Dashboardpage from './Page/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loginpage/>}/>
        <Route path='/signup' element={<Registrationpage/>}/>
        <Route path='/dashboard' element={<Dashboardpage/>}/>
        <Route path='/user-register' element={<UserRegistrationpage/>}/>
      </Routes>
    </div>
  );
}

export default App;

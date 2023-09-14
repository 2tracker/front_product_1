import './App.css';
import './style/globle.css';
import { Route, Routes } from 'react-router-dom';
import Loginpage from './Page/Loginpage';
import Registrationpage from './Page/Registrationpage';
import UserRegistrationpage from './Page/UserRegistrationpage';
import Dashboardpage from './Page/Dashboard';
import Incomepage from './Page/Incomepage';
import Taskpage from './Page/taskpage';
import Birthdatlist from './Page/birthdatlist'
import AddNewTask from './Page/AddNewTask';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loginpage/>}/>
        <Route path='/signup' element={<Registrationpage/>}/>
        <Route path='/dashboard' element={<Dashboardpage/>}/>
        <Route path='/user-register' element={<UserRegistrationpage/>}/>
        <Route path='/incometable' element={<Incomepage/>}/>
        <Route path='/tasklist' element={<Taskpage/>}/>
        <Route path='/birthdaylist' element={<Birthdatlist/>}/>
        <Route path='/add-task' element={<AddNewTask/>}/>
      </Routes>
    </div>
  );
}

export default App;

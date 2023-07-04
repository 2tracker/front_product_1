import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import LoginPage from './Page/loginpage';
import RegistrationPage from './Page/registrationPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/signup' element={<RegistrationPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

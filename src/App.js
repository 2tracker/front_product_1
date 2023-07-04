import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import LoginPage from './Page/LoginPage';
import RegistrationPage from './Page/RegistrationPage';

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

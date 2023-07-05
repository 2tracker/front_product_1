import './App.css';
import { Route, Routes } from 'react-router-dom';
import RegistrationPage from './Page/registrationpage';
import LoginPage from './Page/loginpage';

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

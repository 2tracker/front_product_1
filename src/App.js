import './App.css';
import { Route, Routes } from 'react-router-dom';
import Loginpage from './Page/Loginpage';
import Registrationpage from './Page/Registrationpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loginpage/>}/>
        <Route path='/signup' element={<Registrationpage/>}/>
      </Routes>
    </div>
  );
}

export default App;

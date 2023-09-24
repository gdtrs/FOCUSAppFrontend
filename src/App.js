import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/view/Login';
import Register from './components/view/Register';
import Welcome from './components/view/Welcome';
import GeneralInfo from './components/view/GeneralInfo';
import HomeScreen from './components/view/HomeScreen';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
            <Routes>
              <Route path='/' element={ <Welcome/> } />
              <Route path='/login' element={ <Login/> } />
              <Route path='/register' element={ <Register/> } />
              <Route path='/generalinfo' element={ <GeneralInfo/> } />
              <Route path='/home-screen' element={ <HomeScreen/> } />
            </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

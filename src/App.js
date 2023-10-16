import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Login from './components/view/Login';
import Register from './components/view/Register';
import Welcome from './components/view/Welcome';
import GeneralInfo from './components/view/GeneralInfo';
import HomeScreen from './components/view/HomeScreen';
import Tasks from './components/view/Tasks';
import Habits from './components/view/Habits';
import Appointments from './components/view/Appointments';
import Chamber from './components/view/Chamber';
import { esES } from '@mui/x-date-pickers/locales';

function App() {
  return (
    <LocalizationProvider
    localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText}
    dateAdapter={AdapterDayjs}>
      <AuthProvider>
        <BrowserRouter>
          <div className="App">
              <Routes>
                <Route path='/' element={ <Welcome/> } />
                <Route path='/login' element={ <Login/> } />
                <Route path='/register' element={ <Register/> } />
                <Route path='/generalinfo' element={ <GeneralInfo/> } />
                <Route path='/home-screen' element={ <HomeScreen/> } />
                <Route path='/user-tasks' element={ <Tasks/> } />
                <Route path='/user-habits' element={ <Habits/> } />
                <Route path='/user-appointments' element={ <Appointments/> } />
                <Route path='/chamber' element={ <Chamber/> } />
              </Routes>
          </div>
        </BrowserRouter>
    </AuthProvider>
    </LocalizationProvider>
  );
}

export default App;

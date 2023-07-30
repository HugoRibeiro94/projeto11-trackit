import { useContext, useState } from 'react';
import Context from './Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HabitPage from './pages/HabitPage';
import TodayPage from './pages/TodayPage';
import HistoricPage from './pages/HistoricPage';
import ResetStyle from './styles/ResetStyle';

export default function App() {

  const [image, setImage] = useState('');
  const [token, setToken] = useState('');

  return (
    <Context.Provider value={{image, setImage, token, setToken}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/cadastro" element={<RegisterPage />}/>
          <Route path="/habitos" element={<HabitPage/>}/>
          <Route path="/hoje" element={<TodayPage/>}/>
          <Route path="/historico" element={<HistoricPage/>}/>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

    
    
        
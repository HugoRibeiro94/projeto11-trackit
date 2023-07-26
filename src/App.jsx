import { useState } from 'react'
import Context from './Context'
import Counter from './Counter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HabitPage from './pages/HabitPage';
import TodayPage from './pages/TodayPage';
import HistoricPage from './pages/HistoricPage';

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/cadastro" element={<RegisterPage/>}/>
        <Route path="/habitos" element={<HabitPage/>}/>
        <Route path="/hoje" element={<TodayPage/>}/>
        <Route path="/historico" element={<HistoricPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
/*<Context.Provider value={[total, setTotal]}>
      <div>
        <p>App.js: { total }</p>
        <p> DevMedia Context API</p>
        <Counter />
      </div>
    </Context.Provider>*/
    
    
        
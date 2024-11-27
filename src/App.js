import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Page/Home/Home';
import Like from './Page/Like/Like';
import Personal from './Page/Personal account/Personal';
import Settings from './Page/Settings page/Settings';
import Card from './Page/Card/Card';
import Search from './Page/Search/Search';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import exat from './Page/Logo2.svg/exat.svg';
import { FcLike } from "react-icons/fc";
import { IoSettingsSharp } from "react-icons/io5";
import Login from './Page/Login/Login';
import React, { useState } from 'react';


function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  return (
    <Router>
      <header className='HeaderUrl'>
        <div className='UrlDiv'>
          <p className='Home'><Link to={'/'}>Дом</Link></p>
          <p className='Personal'><Link to={'/personal-account'}>Личный кабинет</Link></p>
          <p className='Setting'><Link to={'/settings'}><IoSettingsSharp /></Link></p>
          <p className='Like'><Link to={'/Like'}><FcLike /></Link></p>
          <p className='Card'><Link to={'/card'}><FontAwesomeIcon icon={faCartShopping} className="CardIcon" /></Link></p>
          <p className='Search'><Link to='/search'><FontAwesomeIcon icon={faMagnifyingGlass} className='SearchIcon' /></Link></p>
        </div>
      </header>

      <div className='LineBlack'>
        <img className='exat' src={exat} alt="Логотип" />
        <button className='Login2' onClick={openLogin}>Войти</button>
        <span className='span'>/</span>
        <p className='nomberP'>8 (812) 123-45-67    |    Работаем 7 дней в неделю    |    9:00 — 18:00</p>
      </div>

      <div className='LineUl'>
        <div className='porten'>
          <h2 className='porten2'>PORTEN</h2>
        </div>

        <div>
          <Login isOpen={isLoginOpen} onClose={closeLogin} />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Like" element={<Like />} />
        <Route path="/personal-account" element={<Personal />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/card" element={<Card />} />
        <Route path="/search" element={<Search />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
// src/components/Header.jsx
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.svg';

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className='fixed w-full bg-white shadow-md z-50'>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-[79px]">
          <div>
            <img src={logo} alt="logo image" />
          </div>
          <ul className="flex items-center gap-8 text-xl font-light">
            <NavLink to="/">{t('home')}</NavLink>
            <NavLink to="/collection">{t('collection')}</NavLink>
            <NavLink to="/about">{t('about')}</NavLink>
            <NavLink to="/contact">{t('contact')}</NavLink>
            <NavLink to="/wishlist"><FaHeart className='wishlist__page' /></NavLink>
            <select onChange={handleChangeLanguage} value={i18n.language}>
              <option value="uz">Uzbek</option>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

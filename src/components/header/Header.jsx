import React, { useEffect, useRef, useState } from 'react';
import { FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.svg';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    closeMenu(); 
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <header className='fixed w-full bg-white shadow-md z-50'>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-[79px]">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className='w-[120px]' />
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-lg font-light">
            <NavLink to="/">{t('home')}</NavLink>
            <NavLink to="/collection">{t('collection')}</NavLink>
            <NavLink to="/about">{t('about')}</NavLink>
            <NavLink to="/contact">{t('contact')}</NavLink>
            <NavLink to="/wishlist"><FaHeart className='wishlist__page' /></NavLink>
            <select
              onChange={handleChangeLanguage}
              value={i18n.language}
              className='bg-[#A17F4a] outline-none text-gray-200 rounded px-0.5 py-1'
            >
              <option value="uz">Uz</option>
              <option value="ru">Ру</option>
              <option value="en">Eng</option>
            </select>
          </ul>

          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div
            ref={menuRef}
            className="md:hidden mt-2 bg-white rounded shadow-lg py-4 px-6 absolute w-full top-[79px] left-0 z-40"
          >
            <ul className="flex flex-col gap-4 text-lg font-light">
              <NavLink to="/" onClick={closeMenu}>{t('home')}</NavLink>
              <NavLink to="/collection" onClick={closeMenu}>{t('collection')}</NavLink>
              <NavLink to="/about" onClick={closeMenu}>{t('about')}</NavLink>
              <NavLink to="/contact" onClick={closeMenu}>{t('contact')}</NavLink>
              <NavLink to="/wishlist" onClick={closeMenu}>
                <FaHeart className='wishlist__page inline mr-2' /> {t('wishlist')}
              </NavLink>
              <select
                onChange={handleChangeLanguage}
                value={i18n.language}
                className='border border-gray-300 rounded px-2 py-1'
              >
                <option value="uz">Uzbek</option>
                <option value="ru">Русский</option>
                <option value="en">English</option>
              </select>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

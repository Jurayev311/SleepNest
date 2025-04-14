import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <header>
            <div className='container mx-auto'>
                <nav className='flex items-center justify-between'>
                    <div>
                        <img src={logo} alt="logo image" />
                    </div>
                    <ul className='flex items-center gap-8 text-xl font-light'>
                        <NavLink to={"/"}>Bosh sahifa</NavLink>
                        <NavLink to={"/collection"}>To'plam</NavLink>
                        <NavLink to={"/about"}>Biz haqimizda</NavLink>
                        <NavLink to={"/contact"}>Kontaktlar</NavLink>
                        <NavLink to={"/wishlist"}><FaHeart /></NavLink>
                        <select name="" id="">
                            <option value="uz">uz</option>
                            <option value="ru">ru</option>
                            <option value="en">en</option>
                        </select>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
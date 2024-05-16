import React from 'react'
import "./Header.scss"

import logo from "@/assets/logotip.png"

import { FaRegHeart, FaPhoneAlt } from "react-icons/fa";
import { IoCartOutline, IoSearch } from "react-icons/io5";

import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <nav className="nav container">
                <Link className='nav__logo' href={"/"}>E-commerce</Link>
                <div className="nav__search__box">
                    <input className="nav__search" type="text" placeholder="Search" />
                    <button className="nav__search__btn"><IoSearch /></button>
                </div>
                <div className="nav__end">
                    <button className='nav__heart__btn'>
                        <FaRegHeart />
                    </button>
                    <button className='nav__cart__btn'>
                        <IoCartOutline />
                    </button>
                    <Link href={"/contact"} className='nav__contact'>
                        Contact Us
                        <FaPhoneAlt />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
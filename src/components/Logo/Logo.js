import React from 'react'
import Logo from './logo-white.png'
import './Logo.css'

const logo = () => {
    return (
        <div className="header__logo-box">
            <img src={Logo} alt="Logo" className="header__logo" />
        </div>
    )
}
export default logo;
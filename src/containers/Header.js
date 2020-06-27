import React from 'react';
import Logo from '../assets/img/logo-white.png'
import ButtonHeadings from '../components/header/ButtonHeadings'


const header = () => {
    return (
        <div className="header">

            <div className="header__logo-box">
                <img src={Logo} alt="Logo" className="header__logo" />
            </div>

            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">
                        Outdoors
                    </span>
                    <span className="heading-primary--sub">
                        is where life happens
                    </span>
                </h1>

                <ButtonHeadings />

            </div>
        </div>
    )
}
export default header;
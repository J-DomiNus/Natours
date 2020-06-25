import React from 'react';
import "../index.css"
import Heading from '../components/header/Heading'
import Logo from '../components/logo/Logo'

const header = () => {
    return (
        <div className="header">
            <Logo />
            <Heading />
        </div>
    )
}
export default header;
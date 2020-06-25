import React from 'react';
import "../index.css"
import Heading from '../components/Headings/Heading'
import Logo from '../components/Logo/Logo'

const header = () => {
    return (
        <div className="header">
            <Logo />
            <Heading />
        </div>
    )
}
export default header;
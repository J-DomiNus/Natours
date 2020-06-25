import React from 'react'
import '../../index.css'
import Button from './Button'

const heading = () => {
    return (
        <div className="header__text-box">
            
            <h1 className="heading-primary">
                <span className="heading-primary--main">
                    Outdoors
                </span>
                <span className="heading-primary--sub">
                    is where life happens
                </span>
            </h1>

            <Button />

        </div>
    )
}

export default heading;
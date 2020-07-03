import React from 'react';
import Photo1 from '../assets/img/nat-8.jpg';
import Photo2 from '../assets/img/nat-9.jpg';

const popup = () => {
    return (
        <div className="popup" id='popup'>
            <div className="popup__content">
                <div className='popup__left'>
                    <img src={Photo1} className='popup__img' alt='Photo1'/>
                    <img src={Photo2} className='popup__img' alt='Photo2'/>
                </div>
                <div className='popup__right'>
                    <a href='#section-tours' className='popup__close'>&times;</a>
                    <h2 className='heading-secondary u-margin-bottom-small'>Start booking now</h2>
                    <h3 className='heading-tertiary u-margin-bottom-small'>Important &ndash; Please read these terms before booking</h3>
                    <p className='popup__text u-margin-bottom-medium'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <a href='#book' className='btn btn--green'>Book now</a>
                </div>
            </div>
        </div>
    )
}

export default popup;
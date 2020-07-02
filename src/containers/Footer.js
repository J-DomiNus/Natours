import React from 'react';
import Logo from '../assets/img/logo-green-2x.png';

const footer = () => {
    return(
        <footer className='footer'>
            <div className='footer__logo-box'>
                <img src={Logo} alt='Logo' className='footer__logo'/>
            </div>
            <div className='row'>
                <div className='col-1-of-2'>
                    <div className='footer__navigation'>
                        <ul className='footer__list'>
                            <li className='footer__item'><a href='#' className='footer__link'>Company</a></li>
                            <li className='footer__item'><a href='#' className='footer__link'>Contact us</a></li>
                            <li className='footer__item'><a href='#' className='footer__link'>Carrers</a></li>
                            <li className='footer__item'><a href='#' className='footer__link'>Privacy policy</a></li>
                            <li className='footer__item'><a href='#' className='footer__link'>Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-1-of-2'>
                    <p className='footer__copyright'>
                        Built by <a href='#' className='footer__link'>Joel Domínguez</a> on an online course <a href='#' className='footer__link'>Advanced CSS and Sass</a>. Copyright &copy; by Jonas Schmedtmann. You are allowed to use this webpage for both personal and commercial use, but not to claim it as your own design. A credit to the author, Jonas Schedtmann, is of course highly appreciated!
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default footer;
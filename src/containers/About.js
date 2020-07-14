import React from 'react'
import ButtonText from '../components/about/ButtonText'
import Img_1_Large from "../assets/img/nat-1-large.jpg";
import Img_2_Large from "../assets/img/nat-2-large.jpg";
import Img_3_Large from "../assets/img/nat-3-large.jpg";
import Img_1_Small from "../assets/img/nat-1.jpg";
import Img_2_Small from "../assets/img/nat-2.jpg";
import Img_3_Small from "../assets/img/nat-3.jpg";

const about = () => {
    return (
        <section class="section-about">
            <div className='u-center-text u-margin-bottom-big'>
                <h2 className="heading-secondary">
                    Exciting tours for adventurous people
                </h2>
            </div>
            <div className='row'>
                <div className='col-1-of-2'>
                    <h3 className='heading-tertiary u-margin-bottom-small'>You're going to fall in love with nature</h3>
                    <p className='paragraph'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <h3 className='heading-tertiary u-margin-bottom-small'>Live adventures like you never before</h3>
                    <p className='paragraph'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <ButtonText />
                </div>
                <div className='col-1-of-2'>
                    <div className="composition">
                        <img srcSet={`${Img_1_Small} 300w, ${Img_1_Large} 1000w`}
                            sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px' 
                            alt="Photo1"
                            className="composition__photo composition__photo--p1"
                            src={Img_1_Large}/>
                        <img srcSet={`${Img_2_Small} 300w, ${Img_2_Large} 1000w`}
                            sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px' 
                            alt="Photo2"
                            className="composition__photo composition__photo--p2"
                            src={Img_2_Large}/>
                        <img srcSet={`${Img_3_Small} 300w, ${Img_3_Large} 1000w`}
                            sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px' 
                            alt="Photo3"
                            className="composition__photo composition__photo--p3"
                            src={Img_3_Large}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default about;


{/* <img src={Img_1} alt="Photo1" className="composition__photo composition__photo--p1"/>
<img src={Img_2} alt="Photo2" className="composition__photo composition__photo--p2"/>
<img src={Img_3} alt="Photo3" className="composition__photo composition__photo--p3"/>  */}

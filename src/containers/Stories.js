import React from 'react';
import Photo1 from '../assets/img/nat-8.jpg';
import Photo2 from '../assets/img/nat-9.jpg';
import Video1 from '../assets/img/video.mp4';
import Video2 from '../assets/img/video.webm'

const stories = () => {
    return(
        <section className='section-stories'>
            <div className='bg-video'>
                <video className='bg-video__content' autoPlay muted loop>
                    <source src={Video1} type='video/mp4'/>
                    <source src={Video2} type='video/webm'/>
                    Your browser is not supported!
                </video>
            </div>
            <div className='u-center-text u-margin-bottom-big'>
                <h2 class="heading-secondary">
                    We make people genuinely happy
                </h2>
            </div>
            <div className='row'>
                <div className='story'>
                    <figure className='story__shape'>
                        <img src={Photo1} alt='Person on a tour' className='story__img'/>
                        <figcaption className='story__caption'>
                            Sopia Karppi
                        </figcaption>
                    </figure>
                    <div className='story__text'>
                        <h3 className='heading-tertiary u-margin-bottom-small'>
                            I had the best week ever with my family
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='story'>
                    <figure className='story__shape'>
                        <img src={Photo2} alt='Person on a tour' className='story__img'/>
                        <figcaption className='story__caption'>
                            Sakari Nurmi
                        </figcaption>
                    </figure>
                    <div className='story__text'>
                        <h3 className='heading-tertiary u-margin-bottom-small'>
                            I had a great experience into the wild
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </p>
                    </div>
                </div>
            </div>
            <div className='u-center-text u-margin-top-big'>
            <a 
                href='#' 
                className='btn-text'>
                Read all stories &rarr;
            </a>
        </div>
        </section>
    )
}

export default stories;
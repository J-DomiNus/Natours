import React from 'react'
import '../assets/css/icons.css'
import '../assets/css/style.css'

const features = () => {
    return(
        <section class="section-features">
            <div class="row">
                <div class="col-1-of-4">
                    <div class="feature-box">
                    <i className='feature-box__icon icon-basic-world'></i>
                        <h3 class="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                        <p class="feature-box__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                    </div>
                </div>
                <div class="col-1-of-4">
                    <div class="feature-box">
                    <i className='feature-box__icon icon-basic-compass'></i>
                        <h3 class="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                        <p class="feature-box__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                    </div>
                </div>
                <div class="col-1-of-4">
                    <div class="feature-box">
                    <i className='feature-box__icon icon-basic-map'></i>
                        <h3 class="heading-tertiary u-margin-bottom-small">Find your way</h3>
                        <p class="feature-box__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                    </div>
                </div>
                <div class="col-1-of-4">
                    <div class="feature-box">
                    <i className='feature-box__icon icon-basic-heart'></i>
                        <h3 class="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                        <p class="feature-box__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default features;
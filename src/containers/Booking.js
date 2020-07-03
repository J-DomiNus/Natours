import React from 'react'

const booking = () => {
    return(
        <section className='section-booking' id='book'>
            <div className='row'>
                <div className='book'>
                    <div className='book__form'>
                        <form action='#' className='form'>
                            <div className='u-margin-bottom-medium'>
                                <h2 class="heading-secondary">
                                    Start booking now!
                                </h2>
                            </div>
                            <div className='form__group'>
                                <input className='form__input' type='text' placeholder='Full name' id='name' required />
                                <label for='name' className='form__label'>Full name</label>
                            </div>
                            <div className='form__group'>
                                <input className='form__input' type='email' placeholder='Email address' id='email' required />
                                <label for='email' className='form__label'>Email address</label>
                            </div>
                            <div className='form__group'>
                                <div className='form__radio-group'>
                                    <input type='radio' className='form__radio-input' id='small' name='size'/>
                                    <label for='small' className='form__radio-label'>
                                        <span className='form__radio-button'></span>
                                        Small tour group
                                    </label> 
                                </div>
                                <div className='form__radio-group u-margin-bottom-small'>
                                    <input type='radio' className='form__radio-input' id='large' name='size'/>
                                    <label for='large' className='form__radio-label'>
                                        <span className='form__radio-button'></span>
                                        Large tour group
                                    </label> 
                                </div>
                            </div>
                            <div className='form__group'>
                                <button className='btn btn--green'>Next step &rarr;</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default booking;
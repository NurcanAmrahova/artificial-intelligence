
import React from 'react'
import './Introduction.css';
import './Button.jsx'
import Button from './Button';
import Image from './svgs/photo.svg'
import PlayIkonu from './svgs/PlayIcon.svg'
import Typed from 'react-typed';

const Introduction = () => {
    return (
        <div className="introduction row">
            <div className="left-side col-12 col-md-6">
                <p>Next genaretion platform</p>
                 
                <Typed
                className='string'
                strings={[
                    'Artificial Intelligence',
                    'Cyber Security',
                   ]}
                    typeSpeed={90}
                    backSpeed={70}
                    
                    loop >
                    
                </Typed>
                <small>Lorem ipsum is placeholder text commonly used in the graphic,<br /> print, and publishing industries for previewing layouts and<br /> visual mockups.</small>
                <div className="buttons">
                <Button ButtonValue='Get Started' ClassAdi="btn btn-primary  me-2"/>
                <Button ButtonValue='Watch Video' IconSekli={PlayIkonu} ClassAdi="btn btn-primary "/>
               </div>
            </div>
            <div className="right-side col-md-6">
               <img src={Image} />
            </div>
            
        </div>
    )
}

export default Introduction
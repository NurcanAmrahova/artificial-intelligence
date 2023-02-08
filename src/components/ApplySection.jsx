import React from 'react'
import ApplyImage from './svgs/apply.svg'
import Button from './Button.jsx'
import './ApplySection.css'
import Typed from 'react-typed';
const ApplySection = () => {
    return (
        <>
            <div className="Apply row">
                <div className="apply-left-side col-12 col-md-6  ">
                    <img src={ApplyImage} alt="" className='w-100 Apply-image' />
                </div>

                <div className="apply-right-side col-12 col-md-6  ">
                    {/* <h1>Apply AI, Deep Learning and Data Sciece to solve</h1> */}
                 
               
 
                <Typed
                className='AI'
                strings={[
                    'Apply AI',
                    'Deep Learning',
                    'Data Science to Solve']}
                    typeSpeed={40}
                    backSpeed={50}
                    
                    loop >
                   
                </Typed>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <Button ButtonValue='Learn More' ClassAdi="btn btn-primary" />
                </div>









            </div>











        </>
    )
}

export default ApplySection
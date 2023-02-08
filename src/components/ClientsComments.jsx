import React from 'react'
import ClientImage from './svgs/client.svg'
import './ClientsComments.css'
const ClientsComments = () => {
  return (
   <div className="comments-container row">
    <div className="comments-left-side col-12 col-md-6">
      <h1>What our clients say about <br/> our awesome solutions</h1>
      <p>To take a trivial example, which of us ever undertakes<br/> laborious physical exercise, except to obtain some <br/>advantage from it who do not know.</p>
      <p>Lorem ipsum is placeholder text commonly used in the <br/>graphic, print, and publishing .</p>
      <p>Lorem ipsum is placeholder previewing layouts and visual <br/>mockups.</p>
      <p>Lorem ipsum is placeholder text commonly used in the <br/>graphic, print, and publishing industries for previewing <br/>layouts and visual mockups.</p>
    </div>
    <div className="comments-right-side col-12 col-md-6">
       <img src={ClientImage} alt=""  className='w-100' />
    </div>
   </div>
  )
}

export default ClientsComments
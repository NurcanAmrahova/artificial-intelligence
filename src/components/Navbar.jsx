import React, {useRef} from 'react'
import BrendinLogosu from '../components/svgs/logo.svg'
import './Navbar.css'
import {HiOutlineBarsArrowDown} from 'react-icons/hi2'
import {GiCrossedBones} from 'react-icons/gi'
import './Button.jsx'
import Button from './Button.jsx'

//  MARSRUT LINKI 
import {Link} from 'react-router-dom'
// React Arrow Functional component
const Navbar = () => {
  const overlayRef = useRef()

  const openOverlay = (e) => {
   const clickedElement = e.target;
   
   if(clickedElement.classList.contains('bars')){
    overlayRef.current.classList.add('aktiv')
   }
  }
  
  const closeOverlay = (e) => {
    const clickedElement = e.target;
    if(clickedElement.classList.contains('cross-icon')){
      overlayRef.current.classList.remove('aktiv')
     } 
  }
  


  return (
<> 
 <div className="overlay" ref={overlayRef}>
  <GiCrossedBones onClick={closeOverlay}   className='cross-icon'/>
  <div className="nav-links">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
    <a href="#">Blog</a>
  </div>
  </div>   
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={BrendinLogosu}/></a>
    <button onClick={openOverlay}  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <HiOutlineBarsArrowDown className='bars'/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/blogs">Blogs</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white">Contact</a>
        </li>
      </ul>
      {/* Props - properties mentiqi */}
        <Button ButtonValue ='Sign In' ClassAdi="btn btn-primary"/>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar
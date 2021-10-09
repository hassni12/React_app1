import React, {useState, useEffect } from 'react'
import {FaBars} from 'react-icons/fa'
//import { NavLink } from 'react-router-dom'
import { Nav,NavbarContainer,NavLogo,MobileIcon,NavLink ,NavItem,NavMenu,NavBtn,NavBtnLink } from './NavbarElements'
import {animateScroll as scroll} from 'react-scroll';

export const Navbar = ({Click}) => {
 const [scrollnav, setscrollnav] = useState(false) 
  const set =()=>{
    if (window.scrollY>=80){
      setscrollnav(true);
    }else{
      setscrollnav(false);
    }
  };
  useEffect(()=>{
    window.addEventListener('scroll',set);
  },[]);
  const toggleHome=()=>{
    scroll.scrollToTop();
  }
  return (
        <>
 
        <Nav scrollnav={scrollnav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
           Banking logo 

              
            </NavLogo>
    <MobileIcon onClick={Click} >
      <FaBars/>
    </MobileIcon>
    <NavMenu>
        <NavItem>
            <NavLink to='About'
            smooth={true} duration={500} 
            spy={true} exact='true' offset={-10}
            activeClass='active'>
        About
            </NavLink>
            <NavLink to='Discover' smooth={true} duration={500} 
            spy={true} exact='true' offset={-10}>
            Discover
            </NavLink>
            <NavLink to='Services' smooth={true} duration={500} 
            spy={true} exact='true' offset={-1}>
            Services 
            </NavLink>
           
            <NavLink to='Signup' smooth={true} duration={500} 
            spy={true} exact='true' offset={-80}>
            Sign up            </NavLink>
            
        </NavItem>
        

    </NavMenu>
     <NavBtn>
       <NavBtnLink to='/signin'>Sign In

       </NavBtnLink>
     </NavBtn>
     
          </NavbarContainer>
        </Nav>
        
            </>
    )
}
export default Navbar;
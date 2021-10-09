import {React,useState} from 'react'
import Navbar from '../components/Navbar/Index';
import Sidebar from '../components/sidebar/Index';
import Herosection from '../components/Herosection/Index';
import Footer from '../components/Footerstyle/Index'
import { Info } from '../components/InfoSection/Index';
import { homeobjects,homeobjTwo,homeobjThree, homeobjfour } from '../components/InfoSection/Data';
import { Services } from '../components/service/Index';
import { FaSleigh } from 'react-icons/fa';

const Pagerouter = () => {
   
const [isOpen,setIsOpen]=useState(false)
const Click=()=>{
    setIsOpen(!isOpen)
}

    return (
        <>
        
          <Sidebar isOpen={isOpen} Click={Click} />
        
          <Navbar Click={Click}/> 
          <Herosection/>
            <Info {...homeobjects}/>
            <Info {...homeobjTwo}/>
            <Services/>
           
            <Info {...homeobjfour}/>



  <Footer/>
        </>
    )
}
export default Pagerouter;
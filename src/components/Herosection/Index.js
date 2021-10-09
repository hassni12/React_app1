import { useState ,React} from 'react'
import { Button } from '../../components/ButtonElement';
import Video from '../../Videos/video_3.mp4';
import {Herocontainer, Herobg,Videobg,Herocontent,Heroh1,Herobtnwrapper,Herop,ArrowRight,Arrowforward } from './HeroElements';
export const Herosection = () => {
    
    const [hover ,sethover]=useState(false)

    const onhover=()=>{
        sethover(!hover)
    }
    
    
    return (
//        <>
    
    
    
    
    
    <Herocontainer>
                <Herobg>
                {/* <video className= "videobg" autoPlay loop muted>
<source src={Video} type='Video/mp4'/>
                </video> */}
                    {/* <Videobg autoPlay loop muted src={Video} type='video/mp4'/> */}
                    <Herocontent>
                        <Heroh1>
                        VIRTUAL BANKING
                         MADE EASY
                        </Heroh1>
                        <Herop>
                           SIGN UP FOR A NEW ACCOUNT TODAY 
                           AND RECEIVE $250 IN CREDIT TOWARDS
                           YOUR NEXT PAYMENT 
                        </Herop>
                        <Herobtnwrapper>
                            <Button to ='sign up ' onMouseEnter={onhover} onMouseLeave={onhover} primary='true'
                            dark='true'>
                                Get Started {hover?<Arrowforward/>:<ArrowRight/>
                                }
                            </Button>
                        </Herobtnwrapper>
                    </Herocontent>
                    <Videobg autoPlay loop muted src={Video} type='video/mp4'/>
                </Herobg>
            </Herocontainer>

        
    )
}
export default Herosection;

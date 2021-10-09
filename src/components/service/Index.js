import React from 'react'
import Icon1 from '../../images/image_2.svg'
import Icon2 from '../../images/image_4.svg'
import Icon3 from '../../images/image_8.svg'
import {ServiceWorkerContainer,ServicesH1,ServicesWrapper,Img, ServicesCard,ServicesH2,ServicesIcon,Servicesp } from './ServicesElements'
export const Services = () => {
    return (
     <ServiceWorkerContainer id='Services'>
         <ServicesH1>Our Services</ServicesH1>
         <ServicesWrapper>
        
             <ServicesCard >
                 
              <Img src={Icon1}/> 
               {/* //  <img src={Icon1}/> */}
                 <ServicesH2>Our Services</ServicesH2>
                 <Servicesp>we help reduce your fees and increase your overall revenue </Servicesp>
              
            
              
             </ServicesCard>
           
             <ServicesCard>
             <Img src={Icon2}/>
                 <ServicesH2>Virtual Offices</ServicesH2>
                 <Servicesp>You can access our platform online anywhere in the world.</Servicesp>
            {/* //     </ServicesIcon> */}
             </ServicesCard>
             <ServicesCard>
             <Img src={Icon3}/>
                 <ServicesH2>Premium Benefits
                 </ServicesH2>
                 <Servicesp>Unlock our special membership card that returns 5
                 5% cash back.</Servicesp>
                 {/* </ServicesIcon> */}
             </ServicesCard>
         </ServicesWrapper>
     </ServiceWorkerContainer>
    )
}

import {React,useState} from 'react'
import image from '../../images/image_1.svg'
import { InfoContainer,InfoWrapper,InfoRow,Column1,TextWrapper,TopLine,Heading,Subtitle,BtnWrap,Button, Column2,Imgwrap,Img } from './InfoElements';
export const Info= ({lightBg,id,imgStart,
lightTextDesc,lightText,headLine,darkText,darktext,description,topLine,
buttonLabel,darkest,img,alt,primary,dark,darktest,dark2,mystyle,mystyle1}) => { 
    
    return (
        //<>
            <InfoContainer lightBg={lightBg} id={id} >
            <InfoWrapper>

               <InfoRow imgStart={imgStart} >
                   <Column1>
                       <TextWrapper>
                           <TopLine topLine={topLine}>
                              {lightTextDesc}
                           </TopLine>
                           <Heading lightText={lightText}>
                               {headLine}
                           </Heading>
                           <Subtitle  darkText={darkText}>
                               {description}
                               {/* duration={} */}
                           </Subtitle>
                           {/* <Subtitle  style={mystyle}>
                               {description}
                              
                           </Subtitle>
                            */}
                           <BtnWrap>
                               <Button to ='home' 
                               smooth={true}
                               darktext={darktext}
                               darktest={darktest}
                               darkest={darkest}
                               duration={500}
                               spy={true}
                               exact='true'
                               offset={-80}
                               primary={primary?1:0}
                               dark={dark?1:0}
                               dark2={dark2?1:0}>{ buttonLabel}</Button>                      
                                    </BtnWrap>
                       </TextWrapper>
                   </Column1>
                   <Column2>
                       <Imgwrap>
                           <Img  src={img}  alt={alt}  />
                           {/* <Img  src={img1} alt={alt}  /> */}
                           {/* <Img  src={img2} alt={alt}  /> */}
                       
                       </Imgwrap>
                   </Column2>
               </InfoRow> 
            </InfoWrapper>


            </InfoContainer>

        //</>
    )
}
export default  Info;
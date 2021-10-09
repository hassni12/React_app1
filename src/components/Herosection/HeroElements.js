import styled from "styled-components";
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'

// import {AiOutlineArrowRight } from 'react-icons/fa'
export const Herocontainer=styled.div`
background:#0c0c0c;
display:flex;
justify-content:center;
align-item:center;
padding:0px 30px;
height:800px;
${'' /* position:relative; */}

${'' /* height:100%; */}
${'' /* width:100%; */}
z-index:1;
`
export const Herobg=styled.div`
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
${'' /* z-index:2; */}
`
export const Videobg=styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
${'' /* z-index:; */}
background:#232a34;

`
export const Herocontent =styled.div`
${'' /* background:black; */}
${'' /* z-index:1; */}

max-width:1200px;
position :absolute;
padding:300px 400px;
display:flex;
flex-direction:column;
align-item :center;
@media screen and (max-width:2024px){
    padding:10px 100px;
    margin-top:200px;
    margin-left:200px;
}
@media screen and (max-width:1024px){
    padding:10px 100px;
    margin-top:200px;
    margin-left:100px;
}

@media screen and (max-width:960px){
    padding:10px 100px;
    margin-top:200px;
    margin-left:20px;
}
 ${'' /* margin-left:200; */}
@media screen and (max-width:768px){
    ${'' /* font-size:20px; */}
    padding:10px 10px;
    margin-top:200px;


}
@media screen and (max-width:480){
    ${'' /* font-size:32px; */}
    ${'' /* padding:200px 200px; */}
 */}

`


export const Heroh1=styled.h1`
color:white;
font-size:50px;
text-align:center;
${'' /* word-break:normal; */}
@media screen and (max-width:960px){

    font-size:45px;
}
@media screen and (max-width:768px){
    font-size:40px;
     margin-right:5px;
}
@media screen and (max-width:480){
    font-size:32px;

`
export const Herop=styled.p`
margin-top:24px;
margin-left:93px;
font-size:24px;
text-align:center;

max-width:600px;
color:white ;
@media screen and (max-width:960px){

font-size:25px;
margin-left:20px;
}
@media screen and (max-width:768px){
    font-size:20px;
  margin-right:12px;
}
@media screen and (max-width:480){
    font-size:32px;
`
export const Herobtnwrapper=styled.div`
${'' /* padding:12px 26px */}
${'' /* margin-right:40px; */}
margin-top:32px;
flex-direction:column;
align-items:center;
display:flex;
`

export const Arrowforward=styled(MdArrowForward)`
margin-left:8px;
font-size:20px;

`

export const ArrowRight=styled(MdKeyboardArrowRight )`
margin-left:8px;
font-size:20px;
`

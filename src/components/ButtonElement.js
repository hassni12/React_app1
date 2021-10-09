import styled from 'styled-components'
import {Link} from 'react-scroll'
export const Button = styled(Link)`


background:${({primary}) =>(primary?'#01BF71':'010606')};
white-space:nowrap;
padding:${({big})=>(big?'14px 48px':'12px 30px')};

color:${({dark})=>(dark?'#010606':'#fff')} ;
font-size:${({fontBig})=>(fontBig?' 20px':'16px 30px')};
outline:none;
border:none;
cursor:pointer;
display:flex;
justify-content:center;
transition:all 0.4s ease-in-out;
border-radius:50px;
margin-right:50px;
&:hover{
    background:#fff;
    transition:all 0.4s ease-in-out;
    ${'' /* transition:all 0.4s ease-in-out;
    box-shadow: 0 0 10px 0 #00d7c3 inset, 0 0 20px 2px #00d7c3;
  border: 3px solid #00d7c3; */}
} 
@media screen and (max-width:2024px){
    ${'' /* padding:10px 100px; */}
    ${'' /* margin-top:200px; */}
    ${'' /* margin-left:200px; */}
}
@media screen and (max-width:1024px){
    ${'' /* padding:10px 100px; */}
    ${'' /* margin-top:200px; */}
    ${'' /* margin-left:100px; */}
}

@media screen and (max-width:960px){
    ${'' /* padding:10px 100px; */}
    ${'' /* margin-top:200px; */}
    ${'' /* margin-left:20px;/ */}
}
 ${'' /* margin-left:200; */}
@media screen and (max-width:768px){
    ${'' /* font-size:20px; */}
margin-right:5px;
    ${'' /* margin-top:200px;/ */}


}
@media screen and (max-width:480){
    ${'' /* font-size:32px; */}
    ${'' /* padding:200px 200px; */}
 */}
`
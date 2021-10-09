import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
export const SidebarContainer=styled.aside`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#0d0d0d;
display:grid;
align-item:center;
top:0;
left:0;
transition:0,3s ease-in-out;
${'' /* @media screen and (max-width:1080px){ */}
    ${'' /* display:none; */}
opacity:${({isOpen})=>(isOpen? '100%':'0'
)};
top:${({isOpen})=>(isOpen? '0':'-100%'
)};

${'' /* screen and (max-width:280px){  */}
    ${'' /* display:none; */}
}
`
export const CloseIcon=styled(FaTimes)`
color:#fff


`
export const Icon =styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background: transparent;
font-size:2rem;
cursor:pointer;
outline:none;

`
export const SidebarWrapper =styled.div`
color:#fff;
`
export const SidebarLink =styled(LinkS)`
display:flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
text-decoration:none;
list-style :none;
transition:0.2s ease-in-out;
color:#fff;
cursor:pointer;
&:hover{
    color:#01bf71;
    transition:0.2s ease-in-out;
}


`



export const SidebtnWrap =styled.div`
display:flex;
justify-content:center;
${'' /* padding: 0px 100px;  */}


`
export const SidebarMenu=styled.ul`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(6,80px);
text-align:center;
@media screen and (max-width: 480px){
    grid-template-rows:repeat(6,80px);
}
`

export const SidebarRoute =styled(LinkS)`
${'' /* width: 100px; */}
  ${'' /* padding-top: 30px; */}
  ${'' /* padding-bottom: 30px; 
  */}
  padding:13px 26px;
  text-align: center;
  color: #000;
  ${'' /* text-transform: uppercase; */}
text-decoration:none;
  font-weight: 700;
  margin-top:30px;
  ${'' /* margin-right: 5px; */}
  ${'' /* margin-bottom: 30px; */}
  cursor: pointer;
  ${'' /* display: inline-block; */}
  background-color: #01BF71;
  ${'' /* border: 3px solid #00d7c3; */}
  border-radius: 50px;
  ${'' /* -webkit-transition: all .30s ease-in-out; */}
  transition: all .2s ease-in-out;
  ${'' /* color: #00d7c3; */}

&:hover {
  background:#fff;
  transition: all .2s ease-in-out;
  ${'' /* box-shadow: 0 0 10px 0 #00d7c3 inset, 0 0 20px 2px #00d7c3; */}
  ${'' /* border: 3px solid #00d7c3; */}
}
`
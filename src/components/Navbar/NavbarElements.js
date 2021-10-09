import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
// import url from https://fonts.googleapis.com/css?family=Roboto+Condensed;
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'
export const Nav =styled.nav`
background:${({scrollnav})=>(scrollnav?'#000':'transparent')};
height:80px;

display:flex;
justify-content:center;
align-items:center;
font-size: 1rem;
position:sticky;
top:0;
z-index:10;

@media screen and (max-width:960px){

    transition :0.8s all ease;
}

`
export const NavbarContainer= styled.div`
display: flex;
justify-content:space-between;
height:80px;
z-index:1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`
export const NavLogo=styled(LinkR)`
color:#fff;

justify-self:flex-start;
cursor:pointer;

font-size:1.5rem;
display: flex;

align-items:center;
margin-left:30px;

font-weight:bold;
text-decoration:none;
` 
export const MobileIcon=styled.div`
display:none;
@media screen and (max-width: 768px){
display: block;
position:absolute;
top:0;
right:0;
transform:translate(-100%,60%);
font-size:1.8rem;
cursor:pointer;
color:#fff;
}
`
export const NavMenu=styled.ul`
display: flex;
align-items:center;
list-style:none;
text-align:center;
text-align:-22px;


@media screen and (max-width:768px){
    display:none;
}
` 
export const NavItem=styled.li`
height:80px;
display:flex;


`
export const NavLink=styled(LinkS)`
 ${'' /* color: orange; */}
${'' /* display:flex; */}
align-items: center;
text-decoration: none;
padding: 5rem;

height:100%;
color: #f2f2f2;
text-align:center;
  text-decoration: none;
${'' /* font-style: bold; */}
  ${'' /* font-size: 18px; */}
  ${'' /* font-weight: 500; */}
  padding: 30px 10px;

  ${'' /* border-radius: 5px; */}
  ${'' /* letter-spacing: 1px; */}
  transition: all 0.3s ease;
cursor:pointer;
margin: 1px 15px;
&:hover{
    color:#00d7c3;
}
${'' /* &.active{ */}
    ${'' /* border-bottom:3px solid #01bf71; */}
    ${'' /* { */}
` ;
export const NavBtn =styled.nav`
display:flex;
align-items:center;

@media screen and (max-width:768px){
    display:none;
}
`

export const NavBtnLink =styled(LinkR)`
${'' /* width: 100px; */}
  ${'' /* padding-top: 30px; */}
  ${'' /* padding-bottom: 30px; 
  */}
  padding:9px 18px;
  text-align: center;
  color: #000;
  ${'' /* text-transform: uppercase; */}
text-decoration:none;
  ${'' /* font-weight: 600; */}
  margin-right: 30px;
  ${'' /* margin-bottom: 30px; */}
  cursor: pointer;
  ${'' /* display: inline-block; */}
  background-color: #01BF71;
  ${'' /* border: 3px solid ; */}
  border-radius: 50px;
  ${'' /* -webkit-transition: all .30s ease-in-out; */}
  transition: all .2s ease-in-out;
  ${'' /* color: #00d7c3; */}

&:hover {
background:#fff;
transition: all .2s ease-in-out;
}


`

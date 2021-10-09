import styled from 'styled-components'
import {Link} from 'react-router-dom'
// import { FooterContainer ,FooterWrap} from '../components/Footerstyle/FooterElements';
 export const FooterContainer=styled.footer`
 background-color:#101522;
`
export const FooterWrap=styled.div`
padding: 48px 24px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
max-width:1100px;
margin:0 auto;
`
export const FooterLinksContainer=styled.div`
display:flex;
justify-content:center;
@media screen and (max-width:820px){
    padding-top:32px;

    
}

`

export const FooterLinkWrapper=styled.div`
display:flex;
@media screen and (max-width:820px){
    flex-direction:column;
}


`
export const FooterLinksItems=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
margin:16px;
text-align:left;
width:160px;
box-sizing:border-box;
color:#fff;
@media screen and (max-width:820px){
    margin:0;
    padding :10px;
    width:100%;
}
`
export const FooterLink=styled(Link)`
color:#fff;
text-decoration:none;
margin-bottom:0.5rem;
font-size:14px;
&:hover(
    color:#01bf71;
    transition:0.3 ease-out;
)
`
export const FooterLinkTitle=styled.h1`
font-size:14px;
margin-bottom:16px;

`
export const SocialMedia=styled.section`
max-width:100px;
width:100%;

`
export const SocialMediawrap=styled.div`
display:flex;
justify-content:space-between;
align-item:center;
${'' /* max-width:1100px; */}
margin: 40px auto  0 auto;
${'' /* padding:12px 24px; */}
@media screen and (max-width:820px){
    flex-direction:column;

    ${'' /* grid-template:1fr 1fr; */}
}


`
export const WebsiteRights=styled.small`
color:#fff;
margin-bottom:16px;

`

export const SocialLogo=styled(Link)`
color:#fff;
justify-self:start;
cursor:pointer;
text-decoration:none;
display:flex;
font-size:1.5rem;
align-items:center;
margin-bottom:16px;
font-weight:bold;
margin-right:12px;
${'' /* padding:12px 240px; */}
@media screen and (max-width:820px){
    ${'' /* flex-direction:column; */}

    ${'' /* grid-template:1fr 1fr; */}
}

${'' /* space-between:120px; */}
`
export const SocialIcons=styled.div`
display:flex;
${'' /* padding:100px 200px; */}
justify-content:space-between;
align-items:center;
${'' /* justify-content:center; */}
${'' /* width:240px; */}
${'' /* margin-right:300px */}
${'' /* padding:100px 200px; */}
@media screen and (max-width:820px){
    ${'' /* flex-direction:column; */}
    ${'' /* padding:10px 200px; */}
${'' /* padding:30px 0p
x; */}
${'' /* margin-right:300px */}
`
export const SocialIconsLink=styled.a`
color:#fff;
font-size:24px;

`

import React from 'react'
import { FaFacebook, FaYoutube,FaInstagram,FaTwitter,FaLinkedin
 } from 'react-icons/fa';
import { FooterContainer ,
    FooterWrap,FooterLinkWrapper,
    FooterLinksContainer,FooterLink,FooterLinksItems,
    FooterLinkTitle,SocialIcons,
    SocialIconsLink,
    SocialLogo,SocialMedia,SocialMediawrap,WebsiteRights,
} from '../Footerstyle/FooterElements';
export const Footer = () => {
    return (
        <>
        <FooterContainer>
<FooterWrap>
<FooterLinksContainer>
<FooterLinkWrapper>
    <FooterLinksItems>
        <FooterLinkTitle> About Us </FooterLinkTitle>
            <FooterLink to='/signin'>About us </FooterLink>
            <FooterLink to='/signin'>How it works</FooterLink>
            <FooterLink to='/signin'>Testimonials </FooterLink>
            <FooterLink to='/signin'>careers</FooterLink>
            {/* <FooterLink to='/signin'>Investors</FooterLink> */}
            {/* <FooterLink to='/signin'>Terms of Service</FooterLink> */}
       
    </FooterLinksItems>
    </FooterLinkWrapper>
    <FooterLinkWrapper>

    <FooterLinksItems>
        <FooterLinkTitle> Contact Us </FooterLinkTitle>
            <FooterLink to='/signin'>Contact </FooterLink>
            <FooterLink to='/signin'>Support</FooterLink>
            <FooterLink to='/signin'>Destination </FooterLink>
            <FooterLink to='/signin'>Sponsorship</FooterLink>
            {/* <FooterLink to='/signin'>Investors</FooterLink> */}
            {/* <FooterLink to='/signin'>Terms of Service</FooterLink> */}
       
    </FooterLinksItems>
    </FooterLinkWrapper>
    <FooterLinkWrapper>
    <FooterLinksItems>
        <FooterLinkTitle> Videos </FooterLinkTitle>
            <FooterLink to='/signin'>Submit Videos </FooterLink>
            <FooterLink to='/signin'>Ambassadors</FooterLink>
            <FooterLink to='/signin'>Agency</FooterLink>
            <FooterLink to='/signin'>Influencer</FooterLink>
            {/* <FooterLink to='/signin'>Investors</FooterLink> */}
            {/* <FooterLink to='/signin'>Terms of Service</FooterLink> */}
       
    </FooterLinksItems>
    </FooterLinkWrapper>
    <FooterLinkWrapper>
    <FooterLinksItems>
        <FooterLinkTitle> Social Media  </FooterLinkTitle>
            <FooterLink to='/signin'>Instragram </FooterLink>
            <FooterLink to='/signin'>Facebook</FooterLink>
            <FooterLink to='/signin'>Youtube </FooterLink>
            <FooterLink to='/signin'>Twitter</FooterLink>
            {/* <FooterLink to='/signin'>Investors</FooterLink> */}
            {/* <FooterLink to='/signin'>Terms of Service</FooterLink> */}
       
    </FooterLinksItems>
    </FooterLinkWrapper>
</FooterLinksContainer>
<SocialMedia>
    <SocialMediawrap>
        <SocialLogo to='/'>
            logo
        </SocialLogo>
        <WebsiteRights>Banking @ {new Date().getFullYear()} All rights reserved</WebsiteRights>
   <SocialIcons>
       <SocialIconsLink href='/' target='_blank' arial-label='Facebook'>
           <FaFacebook/>
       </SocialIconsLink>
       <SocialIconsLink href='/' target='_blank' arial-label='Instagram'>
           <FaInstagram/>
       </SocialIconsLink>
       <SocialIconsLink href='/' target='_blank' arial-label='Youtube'>
           <FaYoutube/>
       </SocialIconsLink>
       <SocialIconsLink href='/' target='_blank' arial-label='Twitter'>
           <FaTwitter/>
       </SocialIconsLink>
       <SocialIconsLink href='/' target='_blank' arial-label='Linkedin'>
           <FaLinkedin/>
       </SocialIconsLink>
       

   </SocialIcons>
    </SocialMediawrap>
</SocialMedia>
</FooterWrap>
        </FooterContainer>    
        </>
    )}
    export default Footer;
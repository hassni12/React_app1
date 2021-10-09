import React from 'react'
import { SidebarContainer,Icon,CloseIcon,SidebarLink,SidebarMenu,SidebarWrapper,SidebtnWrap,SidebarRoute } from "./SidebareElements";
 const Sidebar = ({isOpen,Click}) => {
    return (
        
        <SidebarContainer isOpen={isOpen} onClick={Click}>
            <Icon onClick={Click}>


                <CloseIcon/>
                

            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={Click} to='about'>About</SidebarLink>
                    <SidebarLink onClick={Click} to='discover'>Discover</SidebarLink>
                  <SidebarLink onClick={Click} to='services'>Services</SidebarLink>
                   <SidebarLink onClick={Click} to='sign up'>Sign up</SidebarLink>
<SidebtnWrap>
<SidebarRoute onClick={Click} to='/sign In'>Sign In</SidebarRoute>
</SidebtnWrap>


                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
            
        
    )
}
export default Sidebar;
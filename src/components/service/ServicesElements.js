import styled from "styled-components";
export const ServiceWorkerContainer=styled.div`
${'' /* background:'white'; */}
height:1100px;
background:'#fff';
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
${'' /* background:#010606; */}
@media screen and (max-width:2068){
${'' /* background:'red'; */}
    height:100px;
}

${'' /* @media screen and (max-width:480){

height:1300px;
} */}

`
export const ServicesWrapper=styled.h1`

max-width:1000px;
margin:0 auto;
display:grid;
${'' /* columns-gape:12px; */}
grid-template-columns:1fr 1fr 1fr;

column-gap: 10px;
align-items:center;
padding:0 50px;
@media screen and (max-width:1000px){

    row-gap: 10px;
    grid-template-columns:1fr 1fr ;
}
@media screen and (max-width:768px){

    column-gap: 10px;
grid-template-columns:1fr  ;
padding:0 20px;
}
`
export const ServicesCard=styled.div`
background:'#fff';
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
max-height:340px;
padding:30px;
${'' /* columns-gape:12px; */}
box-shadow:0 1px 3px  rgba(0,0,0,0.4);
transition: all 0.2s ease-in-out;
&:hover{
    transform :scale(1.02);
    transition:all 0.2s ease-in-out;

    cursor :pointer;
}
 

`
export const Img=styled.img`
height:160px;
width:160px;

margin-bottom:10px;
${'' /* z-index:auto; */}

`
export const ServicesH1=styled.h1`
font-size:2.5rem;
${'' /* color:'black'; */}

margin-bottom:64px;
@media screen and (max-width:768px){
font-size:2rem;
${'' /* grid-template-columns:1fr  ;
padding:0 20px; */}
}

`

export const ServicesH2=styled.h2`
font-size:1rem;
margin-bottom:10px;
text-align:center;

`
export const Servicesp=styled.p`
font-size:.9rem;
text-align:center;

`

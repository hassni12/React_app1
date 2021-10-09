import styled from 'styled-components';
export const InfoContainer=styled.div`
${'' /* color:#fff; */}
background:${({lightBg})=>(lightBg?'#f9f9f9':'#010606')};
@media screen and(max-width:768px){
    padding:100px 0px;

}

`
export const InfoWrapper=styled.div`
display:grid;
z-index:1;
height:860px;
width:100%;
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding:0 10px;
justify-content:center;

`

export const InfoRow=styled.div`
display:grid;
grid-auto-columns:minmax(auto,1fr);
align-items:center;
grid-template-areas:${({imgStart})=>(imgStart?`'col2 col1'`:`'col1 col2'`)};
@media screen and(max-width:768px){
    ${'' /* padding:100px 0px; */}
    grid-template-areas:${({imgStart})=>(imgStart?`'col2' ' col1'`:`'col1 col1''col2 col2'`)}

}

`
export const Column1=styled.div`
margin-bottom:15px;
padding:0 15px;
${'' /* margin-right:200px; */}
grid-area:col1;
${'' /* @media screen and (max-width:960px){
    margin-left:250px;
    margin-bottom:350px;

${'' /* transition :0.8s all ease; */}
}

${'' /* @media screen and(max-width:768px){ */}
    ${'' /* margin-right:400px; */}


${'' /* } */} */}
`

export const Column2=styled.div`
margin-bottom:15px;
padding:0 15px;
${'' /* margin-right:600px; */}
grid-area:col2;
@media screen and (max-width:960px){
    ${'' /* margin-top:700px; */}
    ${'' /* align-item:center; */}
    ${'' /* justify-content:center; */}
    ${'' /* padding:0px 10px; */}
    ${'' /* height:1px;
    width:1px; */}

    ${'' /* margin-right:80px; */}
${'' /* transition :0.8s all ease; */}
}
@media screen and(max-width:768px){ 
    
    ${'' /* margin-bottom:15000px; */}
{
`
export const TextWrapper=styled.div`
max-width:540px;
padding-top:0;
padding-bottom:60px;

`



export const TopLine=styled.p`
color:#01bf71;
font-size:16px;
line-height:16px;
font-weight:700;
letter-spacing:1.4px;
text-tranform:uppercase;
margin-bottom:16px;

color:${({topLine})=>(topLine?'#01bf71':'#FDA8FB')};
`

export const Heading=styled.h1`
${'' /* color:white; */}
margin-bottom:24px;
font-size:48px;
line-height:1.1;
font-weight:600;
color:${({lightText})=>(lightText?'black':'white')};
@media screen and (max-width:480px){
    font-size:32px;
}

`

export const Subtitle=styled.p`
max-width:440px;
margin-bottom:35px;
font-size:18px;
line-height:24px;
color:${({darkText})=>(darkText?'white':'black')};

`
export const BtnWrap=styled.div`
display:flex;
justify-content:flex-start;


`




export const Button=styled.div`
background-color:${({darktext})=>(darktext?'#000':'#01bf71')};
color:${({darktest})=>(darktest?'#000':'#fff')};
border-radius: 50px;
padding:15px 40px;
transition :0.4s all ease-in-out;
&:hover{
    ${'' /* color:#000000; */}
    background:${({darkest})=>(darkest?'#01bf71':'#fff')};
    transition :0.4s all ease-in-out;
    color:#000000;
}
`

export const Imgwrap=styled.div`
max-width:555px;
height:100%;
@media screen and(max-width:960px){
    ${'' /* padding-top:250px;  */}
    ${'' /* height:10px; */}
    ${'' /* display:none; */}
    ${'' /* padding-right:1110px; */}
}

`
export const Img=styled.img`
 width:100%;
${'' /* height:100%;  */}
margin:0 0 10px 0px;
padding-right:0px;
${'' /* height:500px; */}
${'' /* margin-bottom:25px; */}
${'' /* z-index:1; */}
@media screen and(max-width:960px){
    ${'' /* margin:0 0 10px 0; */}
}
@media screen and(max-width:768px){
 ${'' /* height:34px;    */}
 ${'' /* margin-right:1200px; */}
}
`

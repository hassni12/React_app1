import React from 'react'
import Signin from '../../pages/signin'
import { FormWrap ,FormContent,Text,Container,Icon,Form,FormH1,FormInput,FormLabel,FormButton } from './SigninElements'

export const Signin1 = () => {
    return (
        <>
       <Container>
           <FormWrap>
               <Icon to='/'>Banking</Icon>
           <FormContent>
               <Form>
<FormH1>Sign in to your account</FormH1>
<FormLabel htmlFor='for' >Email</FormLabel>
   <FormInput type='email' require />           
   <FormLabel htmlFor='for' >Password</FormLabel>
   <FormInput type='password' require />           
   <FormButton type='submit' >Continue</FormButton>
   {/* <FormInput type='email' require />            */}
<Text>Forgot password</Text>
              {/* <FormInput/> */}

               </Form>
           </FormContent>
           </FormWrap>
       </Container>     
        </>
    )
}
export default Signin1;
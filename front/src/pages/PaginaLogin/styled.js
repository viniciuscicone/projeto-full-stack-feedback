
import styled from 'styled-components'

export const ContainerForm = styled.div`

   width: 60%;
   height: 90%;
   padding: 20px;
   border-radius: 20px;
   box-shadow: inset 0 0 1em grey;
   background-color: white ;

`

export const Container = styled.header`

   width: 100vw;
   height: 100vh;
   display:flex;
   justify-content: center;
   align-items: center;
   background: url(${ props => props.backGround });
   background-size: cover;
   background-repeat: no-repeat;

`

export const Form = styled.form`

   display:flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   
`

export const ImgLogin = styled.img`

   width: 30%;
   margin: 4px;
`
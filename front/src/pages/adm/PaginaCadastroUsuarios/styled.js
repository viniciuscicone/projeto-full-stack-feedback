import styled from "styled-components";



export const Header = styled.header`

   text-align: center;
   height: 10vh;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #001e3c;
   color: white;
   font-weight: 700;
   font-size: 1em;
   box-shadow: inset 0 0 1em black;
   font-family: 'Source Sans Pro', Arial, sans-serif;

  img{
    width: 10%;
    height: 70%;
  }

  @media (min-width: 300px) {
      font-size: 2em;
  }
  @media (min-width: 500px) {
      font-size: 3em;
  }
  @media (min-width: 500px) {
      font-size: 2.5em;
  }
`

export const Body = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 80vw;
`;

export const Form = styled.form`
  width: 100%;
  display:flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;


`

export const Div = styled.div`

 font-family: 'Source Sans Pro', Arial, sans-serif;
 font-weight: 500;
`
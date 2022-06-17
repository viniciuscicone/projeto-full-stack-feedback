import styled from "styled-components";


export const DivContainer = styled.div`


  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  background: url(${ props => props.backGround });
  background-size: cover;
`;

export const divButton = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  `;

export const Header = styled.header`

   text-align: center;
   height: 10%;
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


export const Main = styled.div`


`

export const ButtonGroup = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 20px;
  box-shadow: inset 0 0 1em grey;
  background-color: white ;
  opacity : 1.0;
  margin: 30px;
  width: 100%;
`

export const ButtonGroupForm = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 30%;
  padding: 20px;
  border-radius: 20px;
  box-shadow: inset 0 0 1em grey;
  background-color: white ;
  opacity : 1.0;
  margin: 10px;
  align-items: stretch;
`

export const ButtonContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60vw;

`

export const Img = styled.img`

   border-radius: 100%;
   margin: 0px 0px 30px 0px ;

`

export const Informaçoes = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 100;
  font-size: 1.0vw;
  align-items: center;
 

`

export const InformaçoesForm = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 100;
  font-size: 1.0vw;
  margin: 10px;

`

export const DivNome = styled.div`


`

export const DivResp = styled.div`


`

export const DivEmail = styled.div`


`

export const DivTurma = styled.div`


`

export const DivFase = styled.div`


`

export const DivTec = styled.div`


`

export const DivIdiomas = styled.div`


`

export const DivForm = styled.div`


`

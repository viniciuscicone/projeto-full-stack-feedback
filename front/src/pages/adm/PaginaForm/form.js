
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Main, DivContainer, Header, ButtonGroup, ButtonContainer, Informaçoes, Img, DivNome, DivResp, DivEmail, DivTurma, DivFase, DivTec, DivIdiomas, DivForm, InformaçoesForm, ButtonGroupForm } from "./styled";
import FEED from '../../../assets/FEED.png'
import Background from '../../../assets/background.png'
import { useAuthenticatorPageADMIN, useProtectedPage } from "../../../hooks/useProtectPage";
import { useParams } from 'react-router-dom'
import { faker } from '@faker-js/faker'
import { useRequestData } from "../../../hooks/useRequestData";
import { BASE_URL } from '../../../constantes/url'
import { useContext } from "react";
import { GlobalStateContext } from "../../../global/globalStateContext";

/* 
            <DivResp><strong>Cargo:</strong> {person && person.responsible}</DivResp>
            <DivEmail><strong>Email:</strong> {person && person.email}</DivEmail>
            <DivTurma><strong>Turma:</strong> {person && person.turma}</DivTurma>
            <DivFase><strong>Fase:</strong> {person && person.fase}</DivFase>
            <DivTec><strong>Tecnologias:</strong> {person && person.tecnologias}</DivTec>
            <DivIdiomas><strong>Idiomas:</strong> {person && person.idiomas}</DivIdiomas>

 */

export const PaginaFormADM = () => {
   useProtectedPage()
   useAuthenticatorPageADMIN()

   const foto = faker.image.avatar()
   const { user, setUser } = useContext(GlobalStateContext)
   const his = useParams()
   const navigate = useNavigate();
   const [data] = useRequestData(`${BASE_URL}user/find-leaguer/${his.id}`)

   const person = data && data[0]

   return (

      <DivContainer backGround={Background}>

         <Header>
            <img src={FEED}></img>
         </Header>

         <Main>

            <ButtonContainer>
               <ButtonGroup>

                  <Informaçoes>

                     <h2>Formulario</h2>

                     <DivNome><strong>Data:</strong> { user && user.today }</DivNome>
                     
                     <DivNome><strong>Projeto:</strong> { user && user.projetos }</DivNome>
                     
                     <DivNome><strong>Tecnologias:</strong> { user && user.tecnologias }</DivNome>
                     
                     <DivNome><strong>Tempo_formacao:</strong> { user && user.today }</DivNome>
                     
                     <DivNome><strong>Nome:</strong> { user && user.today }</DivNome>
                     
                     <DivNome><strong>Qual o papel no time:</strong> { user && user.papel }</DivNome>
                     
                     <DivNome><strong>Demonstrou performance na entrega ?:</strong> { user && user.pergunta1 }</DivNome>
                     
                     <DivNome><strong>Porque ?:</strong> { user && user.pergunta1_resposta }</DivNome>
                     
                     <DivNome><strong>Entregou com qualidade ?:</strong> { user && user.pergunta2 }</DivNome>
                     
                     <DivNome><strong>Porque ?:</strong> { user && user.pergunta2_resposta }</DivNome>
                     
                     <DivNome><strong>Profissional pro ativo ?:</strong> { user && user.pergunta3 }</DivNome>
                     
                     <DivNome><strong>Porque:</strong> { user && user.pergunta3_resposta }</DivNome>
                     
                     <DivNome><strong>Demonstrou comprometimento ?:</strong> { user && user.pergunta4 }</DivNome>
                     
                     <DivNome><strong>Porque ?:</strong> { user && user.pergunta4_resposta }</DivNome>
                     
                     <DivNome><strong>Sabe trabalhar em equipe ?:</strong> { user && user.pergunta5 }</DivNome>
                     
                     <DivNome><strong>Porque ?:</strong> { user && user.pergunta5_resposta }</DivNome>
                     
                     <DivNome><strong>Desenvolveu suas habilidades ?:</strong> { user && user.pergunta6 }</DivNome>
                     
                     <DivNome><strong>Porque ?:</strong> { user && user.pergunta6_resposta }</DivNome>
                     
                     <DivNome><strong>Possui habilidade de liderança ?:</strong> { user && user.pergunta7 }</DivNome>
                     
                     <DivNome><strong>Porque ?:</strong> { user && user.pergunta7_resposta }</DivNome>
                     
                     <DivNome><strong>E um profissional pontual ? ?:</strong> { user && user.pergunta8 }</DivNome>
                     
                     <DivNome><strong>Porque ?:</strong> { user && user.pergunta8_resposta }</DivNome>
                     
                     <DivNome><strong>Sabe trabalhar sobre pressao ?:</strong> { user && user.pergunta9 }</DivNome>
                     
                     <DivNome><strong>Porque ?:</strong> { user && user.pergunta9_resposta }</DivNome>
                     
                     <DivNome><strong>Realizou atividades adiministrativas ?:</strong> { user && user.pergunta10 }</DivNome>
                     
                     <DivNome><strong>Porque ?:</strong> { user && user.pergunta10_resposta }</DivNome>
                     
                     <DivNome><strong>Quais caracteristicas o profissional se destaca ?</strong> { user && user.caracteristicas_profissional }</DivNome>
                     
                     <DivNome><strong>Consideraçoes gerais:</strong> { user && user.consideracoes_gerais }</DivNome>

                  </Informaçoes>

               </ButtonGroup>

            </ButtonContainer>

         </Main>

      </DivContainer>
   );
};
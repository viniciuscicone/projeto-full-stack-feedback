
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DivContainer, Header, ButtonGroup, ButtonContainer, Informaçoes, Img, DivNome, DivResp, DivEmail, DivTurma, DivFase, DivTec, DivIdiomas, DivForm } from "./styled";
import FEED from '../../../assets/FEED.png'
import Background from '../../../assets/background.png'
import { useAuthenticatorPageMENTOR, useProtectedPage } from "../../../hooks/useProtectPage";
import { useParams } from 'react-router-dom'
import { faker } from '@faker-js/faker'
import { useRequestData } from "../../../hooks/useRequestData";
import { BASE_URL } from '../../../constantes/url'

export const PaginaPerfilLeaguersMENTOR = () => {
    useProtectedPage()
    useAuthenticatorPageMENTOR()
    
    const foto = faker.image.avatar()
    
    const his = useParams()
    const navigate = useNavigate();
    const [data1] = useRequestData(`${BASE_URL}user/find-forms-by-leaguer/${his.id}`)
    const [data] =  useRequestData(`${BASE_URL}user/find-leaguer/${his.id}`)

    const person = data && data[0]
    const forms = data1 && data1
    const quant = forms && forms.result && forms.result.length
    return (

        <DivContainer backGround={Background}>

            <Header>
                <img src={FEED}></img>
            </Header>

            <ButtonContainer>
                <ButtonGroup>

                    <Informaçoes>

                        <Img src={foto}/>
                        <DivNome><strong>Nome do funcionario:</strong> {person && person.nome}</DivNome>
                        <DivResp><strong>Cargo:</strong> {person && person.responsible}</DivResp>
                        <DivEmail><strong>Email:</strong> {person && person.email}</DivEmail>
                        <DivTurma><strong>Turma:</strong> {person && person.turma}</DivTurma>
                        <DivFase><strong>Fase:</strong> {person && person.fase}</DivFase>
                        <DivTec><strong>Tecnologias:</strong> {person && person.tecnologias}</DivTec>
                        <DivIdiomas><strong>Idiomas:</strong> {person && person.idiomas}</DivIdiomas>
                        <DivForm><strong>Formularios preenchidos:</strong> {quant}</DivForm>
                        
                    </Informaçoes>

                </ButtonGroup>
            </ButtonContainer>

        </DivContainer>
    );
};

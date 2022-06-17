
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

COMENTS

<Img src={foto} />
<DivNome><strong>Nome do funcionario:</strong> {person && person.nome}</DivNome>
<DivResp><strong>Cargo:</strong> {person && person.responsible}</DivResp>
<DivEmail><strong>Email:</strong> {person && person.email}</DivEmail>
<DivTurma><strong>Turma:</strong> {person && person.turma}</DivTurma>
<DivFase><strong>Fase:</strong> {person && person.fase}</DivFase>
<DivTec><strong>Tecnologias:</strong> {person && person.tecnologias}</DivTec>
<DivIdiomas><strong>Idiomas:</strong> {person && person.idiomas}</DivIdiomas>
<DivForm><strong>Formularios preenchidos:</strong> {quant}</DivForm>


            <button onClick={() => console.log(forms)}>forms</button>
            <button onClick={() => console.log(user)}>state</button>

 */


export const PaginaPerfilLeaguersADM = () => {
    useProtectedPage()
    useAuthenticatorPageADMIN()

    const foto = faker.image.avatar()
    const { user, setUser } = useContext(GlobalStateContext)
    const his = useParams()
    const navigate = useNavigate();
    const [data] = useRequestData(`${BASE_URL}user/find-leaguer/${his.id}`)
    const [data1] = useRequestData(`${BASE_URL}user/find-forms-by-leaguer/${his.id}`)

    const person = data && data[0]
    const forms = data1 && data1
    const quant = forms && forms.result && forms.result.length

    const switchPage = (form) => {

        setUser(form)
        navigate(`/adm/listagem-de-leagues/formulario/${form.id}`)
        return
  
     }


    const formsRender = forms && forms.result && forms.result.map((x,key) => {

        return (

            <ButtonGroupForm key={key} >
                <InformaçoesForm>

                    <DivNome><strong>Nome do funcionario:</strong> {x.nome}</DivNome>
                    <DivResp><strong>Consideracoes gerais:</strong> {x.consideracoes_gerais}</DivResp>
                    <DivEmail><strong>Data:</strong> {x.today}</DivEmail>

                </InformaçoesForm>
                    <Button onClick={()=> switchPage(x)} variant="contained" >Ver formulario</Button>
            </ButtonGroupForm>

        )

    })

    return (

        <DivContainer backGround={Background}>

            <Header>
                <img src={FEED}></img>
            </Header>

            <Main>

                <ButtonContainer>
                    <ButtonGroup>

                        <Informaçoes>

                            <Img src={foto} />
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

                    FORMULARIOS

                   {formsRender}

                </ButtonContainer>

            </Main>


        </DivContainer>
    );
};

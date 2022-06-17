import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DivContainer, Header, ButtonGroup, ButtonContainer } from "./styled";
import FEED from '../../../assets/FEED.png'
import Background from '../../../assets/background.png'
import { useAuthenticatorPageADMIN, useProtectedPage } from "../../../hooks/useProtectPage";


export const PaginaGerenciarAcessoADM = () => {
  useProtectedPage()
  useAuthenticatorPageADMIN()
  const navigate = useNavigate();
  return (
    <DivContainer backGround={Background} >

      <Header>
        <img src={FEED} ></img>
      </Header>

      <ButtonContainer>
        <ButtonGroup>
          <Button sx={{ width: '80%', margin: "5px" }} variant="outlined" onClick={() => navigate("/adm/gerenciar-acessos/cadastro-de-usuarios")}>
            Cadastro de um novo usuário
          </Button>
          <Button sx={{ width: '80%', margin: "5px" }} variant="outlined" onClick={() => navigate("/adm/gerenciar-acessos/listagem-de-usuarios")}>
            Ver ou editar um usuario
          </Button>
          <Button sx={{ width: '80%', margin: "5px" }} variant="outlined" onClick={() => navigate("/adm/gerenciar-acessos/cadastrar-turma")}>
            Cadastrar nova equipe
          </Button>

        </ButtonGroup>
      </ButtonContainer>

    </DivContainer>
  )
}


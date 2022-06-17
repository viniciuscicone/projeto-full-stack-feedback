import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DivContainer, Header, ButtonGroup, ButtonContainer } from "./styled";
import FEED from '../../../assets/FEED.png'
import Background from '../../../assets/background.png'
import { useAuthenticatorPageADMIN, useProtectedPage } from "../../../hooks/useProtectPage";


export const PaginaAdm = () => {
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
          <Button sx={{ width: '80%', margin: "5px" }} variant="outlined" onClick={() => navigate("/adm/cadastro-leaguer")}>
            Cadastro de um novo funcionario
          </Button>
          <Button sx={{ width: '80%', margin: "5px" }} variant="outlined" onClick={() => navigate("/adm/listagem-de-leagues")}>
            Ver todos os funcionarios
          </Button>
          <Button sx={{ width: '80%', margin: "5px" }} variant="outlined" onClick={ () =>  navigate("/adm/nova-avaliacao")}>
            Nova avaliação
          </Button>
          <Button sx={{ width: '80%', margin: "5px" }} variant="outlined" onClick={() =>  navigate("/adm/editar-league")}>
            Editar funcionario
          </Button>
          <Button sx={{ width: '80%', margin: "5px" }} variant="outlined" onClick={() => navigate("/adm/gerenciar-acessos")}>
            Gerenciar Acessos
          </Button>
        </ButtonGroup>
      </ButtonContainer>
    </DivContainer>

  );
  
};

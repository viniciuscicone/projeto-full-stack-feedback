
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DivContainer, Header, ButtonGroup, ButtonContainer } from "./styled";
import FEED from '../../../assets/FEED.png'
import Background from '../../../assets/background.png'
import { useAuthenticatorPageMENTOR, useProtectedPage } from "../../../hooks/useProtectPage"


export const PaginaMENTOR = () => {
  const navigate = useNavigate();
  useProtectedPage()
  useAuthenticatorPageMENTOR()
  return (
    <DivContainer backGround={Background} >

      <Header>
        <img src={FEED} ></img>
      </Header>

      <ButtonContainer>
        <ButtonGroup>
          <Button sx={{ width: '80%', margin: "5px" }} variant="outlined" onClick={() => navigate("/mentor/cadastro-league")}>
            Cadastro de um novo Leaguer
          </Button>
          <Button sx={{ width: '80%', margin: "5px" }} variant="outlined" onClick={() =>  navigate("/mentor/listagem-de-leagues")}>
            Ver seus Leagues
          </Button>
          <Button sx={{ width: '80%', margin: "5px" }} variant="outlined" onClick={ () => navigate("/mentor/nova-avaliacao")}>
            Nova avaliação
          </Button>
          <Button sx={{ width: '80%', margin: "5px" }} variant="outlined" onClick={() => navigate("/mentor/editar-leaguer")}>
            Editar seus leaguers
          </Button>
        </ButtonGroup>
      </ButtonContainer>

    </DivContainer>
  );
};
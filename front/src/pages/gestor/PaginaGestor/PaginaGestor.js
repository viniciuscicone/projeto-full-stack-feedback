import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DivContainer, Header, ButtonGroup, ButtonContainer } from "./styled";
import FEED from '../../../assets/FEED.png'
import Background from '../../../assets/background.png'
import { useAuthenticatorPageGESTOR, useProtectedPage } from "../../../hooks/useProtectPage";


export const PaginaGestorGESTOR = () => {
    useProtectedPage()
    useAuthenticatorPageGESTOR()
    const navigate = useNavigate();

    return (
        <DivContainer backGround={Background} >

            <Header>
                <img src={FEED} ></img>
            </Header>

            <ButtonContainer>
                <ButtonGroup>
                    <Button sx={{ width: '80%', margin: "5px" }} variant="outlined" onClick={() => navigate("/gestor/listagem-de-leagues")}>
                        Ver seus Leagues
                    </Button>
                    <Button sx={{ width: '80%', margin: "5px" }} variant="outlined" onClick={() => navigate("/gestor/nova-avaliacao")}>
                        Nova avaliação
                    </Button>
                </ButtonGroup>
            </ButtonContainer>

        </DivContainer>
    );
};



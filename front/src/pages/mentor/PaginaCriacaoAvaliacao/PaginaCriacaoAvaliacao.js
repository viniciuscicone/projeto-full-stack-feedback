import { Search } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../../components/header/header";
import { BASE_URL } from "../../../constantes/url";
import useForm from "../../../hooks/useForm";
import { CardLeaguer, DivContainer, GridTemplate } from "./styled";
import { useNavigate } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import { useAuthenticatorPageMENTOR, useProtectedPage } from "../../../hooks/useProtectPage"
import { faker } from '@faker-js/faker'


export const PaginaCriacaoAvaliacaoMENTOR = () => {
  useProtectedPage()
  useAuthenticatorPageMENTOR()
  const foto = faker.image.avatar()
  const [leaguersListState, setLeaguersListState] = useState([]);
  const { form, onChange } = useForm({ pesquisa: "" });
  const navigate = useNavigate();

  const irParaPerfilLeaguer = (id) => {
    navigate(`/listagem-de-leagues/perfil-do-leaguer/${id}`)
  }
  
  const sendEmail = (id) => {
    const token = localStorage.getItem("token")
    const auth = {headers: {Authorization: token}}
    const url = `${BASE_URL}user/send-email/${id}`;

    axios.defaults.headers.common['Authorization'] = token;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    const data = axios
    .post(`${BASE_URL}user/send-email/${id}`)
    .then((res) => {
      console.log(res);
      alert("Email enviado ao usuario")
    })
    .catch((err) => {
        console.log(err);
        console.log(data)
      });
  }

  const getLeaguers = async () => {
    const url = `${BASE_URL}user/find-all-leaguers/`;
    
    await axios
    .get(url)
    .then((res) => {
      setLeaguersListState(res.data);
    })
    .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getLeaguers();
  }, [leaguersListState]);
  
  const leaguerList = leaguersListState
    .filter((leaguer) => {
      return (
        leaguer.nome.toLowerCase().includes(form.pesquisa.toLowerCase()) ||
        leaguer.turma.toLowerCase().includes(form.pesquisa.toLowerCase())
      );
    })

    .map((leaguer) => {
      return (
        <CardLeaguer key={leaguer.id}>
          <div>
            <p><strong>{leaguer.nome}</strong></p>
            <p>{leaguer.turma}</p>
          </div>
          <IconButton aria-label="Icone de olho" onClick={() => sendEmail(leaguer.id)}>
            <SendIcon/>
          </IconButton>
        </CardLeaguer>
      );
    });

  return (
    <>
      <Header />
      <DivContainer>
        <p>Página de Listagem de Leaguers</p>
        <TextField
          variant="outlined"
          margin="normal"
          size="small"
          fullWidth
          id="pesquisa"
          placeholder="O que está procurando?"
          name="pesquisa"
          onChange={onChange}
          value={form.pesquisa}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <GridTemplate>{leaguerList}</GridTemplate>
      </DivContainer>
    </>
  );
};
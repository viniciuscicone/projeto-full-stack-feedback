import { Search } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../../components/header/header";
import { BASE_URL } from "../../../constantes/url";
import useForm from "../../../hooks/useForm";
import { CardLeaguer, DivContainer, GridTemplate } from "./styled";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate } from "react-router-dom";
import { faker } from '@faker-js/faker'
import { useAuthenticatorPageGESTOR, useProtectedPage } from "../../../hooks/useProtectPage";


export const PaginaListagemDeLeaguesGESTOR = () => {
  useProtectedPage()
  useAuthenticatorPageGESTOR()
  const foto = faker.image.avatar()

  const [leaguersListState, setLeaguersListState] = useState([]);
  const { form, onChange } = useForm({ pesquisa: "" });
  const navigate = useNavigate();

  useEffect(() => {
    getLeaguers();
  }, [leaguersListState]);

  const irParaPerfilLeaguer = (id) => {
    navigate(`/gestor/listagem-de-leagues/${id}`)
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
          <strong>Ver mais</strong>
          <IconButton aria-label="Icone de olho" onClick={() => irParaPerfilLeaguer(leaguer.id)}>
            <RemoveRedEyeIcon />
          </IconButton>
        </CardLeaguer>
      );
    });

  return (
    <>
      <Header />
      <DivContainer>
        <p>P??gina de Listagem de Leaguers</p>
        <TextField
          variant="outlined"
          margin="normal"
          size="small"
          fullWidth
          id="pesquisa"
          placeholder="O que est?? procurando?"
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

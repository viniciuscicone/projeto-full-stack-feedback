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
import { useAuthenticatorPageADMIN,useProtectedPage } from "../../../hooks/useProtectPage";

export const PaginaListagemDeUsersADM = () => {
  useProtectedPage()
  useAuthenticatorPageADMIN()
  const foto = faker.image.avatar()

  const [usersListState, setUsersListState] = useState([]);
  const { form, onChange } = useForm({ pesquisa: "" });
  const navigate = useNavigate();

  useEffect(() => {
    getLeaguers();
  }, [usersListState]);

  const irParaPerfilLeaguer = (id) => {
    navigate(`/listagem-de-users/perfil-do-user/${id}`)
  }

  const getLeaguers = () => {
    const url = `${BASE_URL}user/all-users`;

    axios
      .get(url)
      .then((res) => {
        setUsersListState(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const usersList = usersListState && usersListState.Users && usersListState.Users.filter((user) => {
      return (
        user.nome.toLowerCase().includes(form.pesquisa.toLowerCase()) ||
        user.cargo.toLowerCase().includes(form.pesquisa.toLowerCase())
      );
    })
    .map((user) => {
      return (
        <CardLeaguer key={user.id}>
          <div>
            <p><strong>{user.nome}</strong></p>
            <p>{user.role}</p>
          </div>
          <strong>Ver perfil</strong>
          <IconButton aria-label="Icone de olho" onClick={() => console.log(user.id)}>
            <RemoveRedEyeIcon />
          </IconButton>
        </CardLeaguer>
      );
    });

  return (
    <>
      <Header />
      <DivContainer>
        <p>Página de Listagem de Lideres</p>
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
        <GridTemplate>{usersList}</GridTemplate>
      </DivContainer>
    </>
  );
};

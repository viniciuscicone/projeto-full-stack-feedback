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
import { useAuthenticatorPageADMIN, useProtectedPage } from "../../../hooks/useProtectPage";
import { LoadingButton } from "@mui/lab"
import SimpleBackdrop from "../../../components/backDrop/backdrop";
import { makeStyles, createStyles, Theme } from "@mui/styles";



export const PaginaCriacaoAvaliacaoADM = () => {
  useProtectedPage()
  useAuthenticatorPageADMIN()
  const [open, setOpen] = useState(false);
  const [leaguersListState, setLeaguersListState] = useState([]);
  const { form, onChange } = useForm({ pesquisa: "" });
  const navigate = useNavigate();


  const sendEmail = async (id) => {

    const token = localStorage.getItem("token")
    const auth = { headers: { Authorization: token } }
    const url = `${BASE_URL}user/send-email/${id}`;

    axios.defaults.headers.common['Authorization'] = token;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


    try {
      const data = await axios
      .post(`${BASE_URL}user/send-email/${id}`)
      console.log(data);
      alert("Email enviado ao usuario")
      
    } catch (error) {
      console.log(error);
      alert("erro ao enviar email")
    }

  }

  const onclickSend = async (id) => {
    setOpen(true)
    await sendEmail(id)
    setOpen(false)
  }




  const getLeaguers = () => {
    const url = `${BASE_URL}user/find-all-leaguers/`;

    axios
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

  //sx={{ width: '30%', color: 'black', fontSize: '10px' }}

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
          <SimpleBackdrop
            nameButton='Email'
            sendFunction={() => onclickSend(leaguer.id)}
            open={open}
          >
            Email
          </SimpleBackdrop>
        </CardLeaguer>
      );
    });

  return (
    <>
      <Header />
      <DivContainer>
        <p>Página de Listagem de funcionarios</p>
        <TextField
          variant="outlined"
          margin="normal"
          size="small"
          fullWidth
          id="pesquisa"
          placeholder="Digite aqui o nome de um funcionario ?"
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
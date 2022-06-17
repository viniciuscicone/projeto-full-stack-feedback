import React from "react"
import { useNavigate } from "react-router"
import useForm from "../../../hooks/useForm"
import axios from "axios"
import { BASE_URL } from "../../../constantes/url"
import { TextField, Button, Typography } from '@mui/material';
import { DivContainer, Header,Container, Body, Form } from "./styled"
import FEED from '../../../assets/FEED.png'
import { useAuthenticatorPageMENTOR, useProtectedPage } from "../../../hooks/useProtectPage"


const URL_SIGNLEAGUER = `${BASE_URL}user/signup-leaguer`
export const PaginaCadastroDeLeaguesMENTOR= () => {
    useProtectedPage()
    useAuthenticatorPageMENTOR()

    const { form, onChange } = useForm({ nome: "", responsible: "", email: "", turma: "", fase: "", tecnologias: "", idiomas: "" })


    const createLeaguer = async () => {
        try {
            const res = await axios.post(URL_SIGNLEAGUER, form)
            localStorage.setItem("token", res.data.token);
            console.log("RES", res)
            alert("Leaguer criado com sucesso !")
        }

        catch (error) {
            console.log(error)
            console.log('Verifique os dados colocados')
        }

    }

    const onClickCreate = async (event) => {

        event.preventDefault()
        await createLeaguer()

    }


    return (
        <Body>

            <Header>
                <img src={FEED} ></img>
            </Header>

            <DivContainer>

                <Form onSubmit={onClickCreate}>

                    <TextField
                        variant="outlined"
                        sx={{margin:"5px", width: "80%"}}
                        required
                        fullWidth
                        id="nome"
                        label="Name"
                        name="nome"
                        autoComplete="name"
                        autoFocus
                        onChange={onChange}
                        value={form.nome}
                    />

                    <TextField
                        variant="outlined"
                        sx={{margin:"5px",width: "80%"}}
                        required
                        fullWidth
                        id="email"
                        label="Responsible"
                        name="responsible"
                        autoComplete="responsible"
                        autoFocus
                        onChange={onChange}
                        value={form.responsible}
                    />

                    <TextField
                        variant="outlined"
                        sx={{margin:"5px",width: "80%"}}
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={onChange}
                        value={form.email}
                    />

                    <TextField
                        variant="outlined"
                        sx={{margin:"5px;",width: "80%;"}}
                        required
                        fullWidth
                        id="turma"
                        label="Turma"
                        name="turma"
                        autoComplete="turma"
                        autoFocus
                        onChange={onChange}
                        value={form.turma}
                    />

                    <TextField
                        variant="outlined"
                        sx={{margin:"5px",width: "80%"}}
                        required
                        fullWidth
                        id="fase"
                        label="Fase"
                        name="fase"
                        autoComplete="Fase"
                        autoFocus
                        onChange={onChange}
                        value={form.fase}
                    />

                    <TextField
                        variant="outlined"
                        sx={{margin:"5px",width: "80%"}}
                        required
                        fullWidth
                        id="tecnlogias"
                        label="Tecnologias"
                        name="tecnologias"
                        autoComplete="tecnologias"
                        autoFocus
                        onChange={onChange}
                        value={form.tecnologias}
                    />

                    <TextField
                        variant="outlined"
                        sx={{margin:"5px",width: "80%"}}
                        required
                        fullWidth
                        id="idiomas"
                        label="Idiomas"
                        name="idiomas"
                        autoComplete="idiomas"
                        autoFocus
                        onChange={onChange}
                        value={form.idiomas}
                    />

                    <Button
                        sx={{margin:"5px", width: "80%"}}
                        variant="contained"
                        color="primary"
                        type="submit">

                        INCLUIR
                    </Button>

                </Form>

            </DivContainer>


        </Body>
    )
}
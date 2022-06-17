import React from "react"
import { useNavigate } from "react-router"
import useForm from "../../../hooks/useForm"
import axios from "axios"
import { BASE_URL } from "../../../constantes/url"
import { TextField, Button, Typography } from '@mui/material';
import { DivContainer, Header, Container, Body, Form } from "./styled"
import FEED from '../../../assets/FEED.png'
import { useAuthenticatorPageADMIN, useProtectedPage } from "../../../hooks/useProtectPage"


const URL_SIGN = `${BASE_URL}user/create-team`

export const PaginaCadastroDeTurmaADM = () => {
    useProtectedPage()
    useAuthenticatorPageADMIN()
    const { form, onChange } = useForm({ name: "" })


    const creatTeam = async () => {
        try {
            const res = await axios.post(URL_SIGN, form)
            localStorage.setItem("token", res.data.token);
            console.log("RES", res)
            alert("Turma criada com sucesso !")
        }

        catch (error) {
            console.log(error)
            console.log('Verifique os dados colocados')
        }
    }

    const onClickCreateTeam = async (event) => {

        event.preventDefault()
        await creatTeam()

    }


    return (
        
        <Body>

            <Header>
                <img src={FEED} ></img>
            </Header>

            <DivContainer>
                <Form onSubmit={onClickCreateTeam}>

                    <TextField
                        variant="outlined"
                        sx={{margin:"5px", width: "80%"}}
                        required
                        fullWidth
                        id="name"
                        label="Nome da turma"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        onChange={onChange}
                        value={form.name}
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

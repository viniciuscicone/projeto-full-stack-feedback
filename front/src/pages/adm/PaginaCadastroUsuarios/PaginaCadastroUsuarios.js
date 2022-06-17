import React from "react"
import { useNavigate } from "react-router"
import useForm from "../../../hooks/useForm"
import axios from "axios"
import { BASE_URL } from "../../../constantes/url"
import { TextField, Button, Typography } from '@mui/material';
import { DivContainer, Header,Container, Body, Form, Div } from "./styled"
import FEED from '../../../assets/FEED.png'
import { useAuthenticatorPageADMIN,useProtectedPage } from "../../../hooks/useProtectPage"

const URL_SIGN = `${BASE_URL}user/signup`

export const PaginaCadastroUsuariosADM = () => {
    useProtectedPage()
    useAuthenticatorPageADMIN()
    const { form, onChange } = useForm({ email: "", name: "", cargo: "", password: "", role: "" })

    

    const createUser = async () => {
        try {
            const res = await axios.post(URL_SIGN, form)
            localStorage.setItem("token", res.data.token);
            console.log("RES", res)
            alert("Usuário criado com sucesso !")
        }

        catch (error) {
            console.log(error)
            console.log('Verifique os dados colocados')
        }

    }

    const onClickCreateUser = async (event) => {

        event.preventDefault()
        await createUser()

    }
    return(
        <Body>

            <Header>
                <img src={FEED} ></img>
            </Header>

            <DivContainer>
                <Form onSubmit={onClickCreateUser}>

                    <TextField
                        variant="outlined"
                        sx={{margin:"5px", width: "80%"}}
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
                        sx={{margin:"5px",width: "80%"}}
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        onChange={onChange}
                        value={form.name}
                    />

                    <TextField
                        variant="outlined"
                        sx={{margin:"5px",width: "80%"}}
                        required
                        fullWidth
                        id="cargo"
                        label="Cargo"
                        name="cargo"
                        autoComplete="cargo"
                        autoFocus
                        onChange={onChange}
                        value={form.cargo}
                    />

                    <TextField
                        variant="outlined"
                        sx={{margin:"5px;",width: "80%;"}}
                        required
                        fullWidth
                        id="password"
                        label="password"
                        name="password"
                        autoComplete="password"
                        autoFocus
                        onChange={onChange}
                        value={form.password}
                    />
                    <Div>ADM, GESTOR ou MENTOR</Div>
                    <TextField
                        variant="outlined"
                        sx={{margin:"5px",width: "80%"}}
                        required
                        fullWidth
                        id="role"
                        label="Role"
                        name="role"
                        autoComplete="role"
                        autoFocus
                        onChange={onChange}
                        value={form.role}
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
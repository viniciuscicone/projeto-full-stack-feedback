import React, { useState } from "react"
import { useNavigate } from "react-router"
import useForm from "../../hooks/useForm"
import axios from "axios"
import { BASE_URL } from "../../constantes/url"
import { irParaAdm, irParaGestor, irParaMentor } from "../../routes/cordinator"
import { TextField, Typography } from '@mui/material';
import { ContainerForm, Container, Form,ImgLogin } from "./styled"
import Logo from '../../assets/Logo.png'
import Bv from '../../assets/BV.png'
import Background from '../../assets/background.png'
import { LoadingButton } from "@mui/lab"


const URL_LOGIN = `${BASE_URL}user/login`

export const PaginaLogin = () => {

    const navigate = useNavigate()
    const { form, onChange } = useForm({ email: "", password: "" })
    const [ loading, setLoading ] = useState(undefined)

    const login = async () => {

        try {
            setLoading(true)
            console.log(form)
            const res = await axios.post(URL_LOGIN, form)
            localStorage.setItem("token", res.data.token)
            if (res.data.role === "ADM") {
                
                irParaAdm(navigate)

            }

            localStorage.setItem("token", res.data.token)
            if (res.data.role === "MENTOR") {
               
                irParaMentor(navigate)

            }

            localStorage.setItem("token", res.data.token)
            if (res.data.role === "GESTOR") {

                irParaGestor(navigate)

            }

        } catch (error) {

            console.log(error)

        }
    };

    const onClickLogin = async (event) => {
        
        event.preventDefault()
        await login()
        setLoading(false)

    }

    return (
        <Container backGround={Background} >
            <ContainerForm>
                <Typography sx={{ padding: '40px 0 20px 0', display: "flex", flexDirection: 'column',
                alignItems: 'center'
                }} textAlign="center" component="h1" variant="h5">
                    <ImgLogin src={Logo} alt='meta-logo'></ImgLogin>
                    <ImgLogin src={Bv} alt='meta-logo'></ImgLogin>
                </Typography>
                <Form onSubmit={onClickLogin}>
                    <TextField
                        sx={{ width: '80%' }}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={onChange}
                        value={form.email}
                    />

                    <TextField
                        sx={{ width: '80%' }}
                        variant="outlined"
                        margin="normal"
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
                    <LoadingButton
                        sx={{ width: '80%' }}
                        loading={loading}
                        variant="contained"
                        fullWidth
                        color="primary"
                        type="submit"
                    >
                        ENTRAR
                    </LoadingButton>
                </Form>

            </ContainerForm>

        </Container>
    )
}

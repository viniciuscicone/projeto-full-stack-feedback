import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constantes/url";

export const useProtectedPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const token = window.localStorage.getItem('token')

        if (token === null) {
            navigate("/")
            alert("Faça o login")
        }
    })

}


export const useAuthenticatorPageADMIN = async () => {

    const navigate = useNavigate()
    const token = window.localStorage.getItem('token')
    const headers = { headers: { Authorization: token } }


    const data = await axios.get(`${BASE_URL}user/token-data`, headers)

    if (data.data.role !== "ADM") {
        navigate("/")
        alert("Voce nao tem permisao para acessar essa pagina")
    }
}

export const useAuthenticatorPageMENTOR = async () => {

    const navigate = useNavigate()
    const token = window.localStorage.getItem('token')
    const headers = { headers: { Authorization: token } }

    if (token) {
        navigate("/")
    }
    const data = await axios.get(`${BASE_URL}user/token-data`, headers)


    if (data.data.role !== "MENTOR") {
        navigate("/")
        alert("Voce nao tem permisao para acessar essa pagina")
    }

}

export const useAuthenticatorPageGESTOR = async () => {

    const navigate = useNavigate()
    const token = window.localStorage.getItem('token')
    const headers = { headers: { Authorization: token } }

    if (!token) {
        navigate("/")
    }

    const data = await axios.get(`${BASE_URL}user/token-data`, headers)

    if (data.data.role !== "GESTOR") {
        navigate("/")
        alert("Voce nao tem permisao para acessar essa pagina")
    }

}
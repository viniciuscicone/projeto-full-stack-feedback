import axios from "axios";
import { base_url } from '../constants/url'
import { goToEnd } from '../router/cordinates'


export const sendForm = async (form, id, navigate) => {

      try {

         const res = await axios.post(`https://meta-feedback.herokuapp.com/user/send-formulario/${id.id}`, form)
         goToEnd(navigate)
         console.log(res)
         alert('Formulario enviado')
      } catch (error) {
         console.log(error)
      }
};


import React, { useState } from 'react';
import { useForm } from '../../hook/useForm';
import { Section, Header, Form, ContainerHead, Body, Img } from './styled';
import Logo from '../../assets/Logo.png'
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { sendForm } from '../../hook/sendData';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'

export const FormPage = () => {

    const id = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(false);
    const [state, setState] = useState('estado')
    const [email, setEmail] = useState('')
    const [form, onChange, clear] = useForm({

        dataAtual: "",
        projetos: "",
        tecnologias: "",
        tempoFormacao: "",
        nome: "",
        papel: "",
        pergunta1: "",
        pergunta1Resposta: "",
        pergunta2: "",
        pergunta2Resposta: "",
        pergunta3: "",
        pergunta3Resposta: "",
        pergunta4: "",
        pergunta4Resposta: "",
        pergunta5: "",
        pergunta5Resposta: "",
        pergunta6: "",
        pergunta6Resposta: "",
        pergunta7: "",
        pergunta7Resposta: "",
        pergunta8: "",
        pergunta8Resposta: "",
        pergunta9: "",
        pergunta9Resposta: "",
        pergunta10: "",
        pergunta10Resposta: "",
        caracteristicasProfissional: "",
        consideracoesGerais: ""

    })

    const onChangeMail = (event) => {

        setEmail(event.target.value)
    }

    const onSubmitAddress = async (event) => {
        setLoading(true)
        event.preventDefault()
        await sendForm(form,id, navigate)
        setLoading(false)
        console.log(form)
    }


    return (
        <Body>

            <Header>

                <ContainerHead>
                    <Img src={Logo} alt="meta-logo" ></Img>
                </ContainerHead>

                <Section>

                    <Form onSubmit={onSubmitAddress}>
                        Digite aqui a data atual.
                        <TextField fullWidth sx={{
                            width: "80%",
                            margin: "10px"
                        }} id="outlined-basic" onChange={onChange} value={form.dataAtual} name={'dataAtual'} label="Data atual" variant="outlined" />
                        Digite em qual projeto voce participou ?
                        <TextField sx={{
                            width: "80%",
                            margin: "10px"
                        }} id="outlined-basic" onChange={onChange} value={form.projetos} name={'projetos'} label="Projetos" variant="outlined" />
                        <br></br>
                        <br></br>


                        Tecnologias:
                        <textarea onChange={onChange} value={form.tecnologias} name={'tecnologias'} rows={4} placeholder='Digite aqui as tecnologias que voce domina!'></textarea>

                        Qual foi seu tempo de formaçao
                        <textarea onChange={onChange} value={form.tempoFormacao} name={'tempoFormacao'} rows={4} placeholder='Tempo de formaçao !'></textarea>

                        Digite seu nome aqui !
                        <TextField fullWidth sx={{
                            width: "80%",
                            margin: "10px"
                        }} id="outlined-basic" onChange={onChange} required name={'nome'} value={form.nome} label="Nome" variant="outlined" />
                        <br></br>
                        <br></br>
                        Digite seu email aqui.
                        <TextField fullWidth sx={{
                            width: "80%",
                            margin: "10px"
                        }} id="outlined-basic" onChange={onChangeMail} name={'email'} value={email} label="Email" variant="outlined" />

                        <br></br>
                        <br></br>
                        Qual o seu papel na equipe ?
                        <TextField fullWidth sx={{
                            width: "80%",
                            margin: "10px"
                        }} id="outlined-basic" onChange={onChange} name={'papel'} value={form.papel} label="Papel" variant="outlined" />
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>



                        Demonstrou performance na entrega ?
                        <TextField fullWidth sx={{
                            width: "80%",
                            margin: "10px"
                        }} id="outlined-basic" onChange={onChange} name={'pergunta1'} value={form.pergunta1} label="Sim ou Nao" variant="outlined" />
                        Porque ?
                        <textarea onChange={onChange} name={'pergunta1Resposta'} value={form.pergunta1Resposta} rows={4} placeholder='Digite seu comentario aqui'></textarea>


                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Entregou com qualidade ?
                        <TextField sx={{
                            width: "80%",
                            margin: "10px"
                        }}
                            fullWidth id="outlined-basic" onChange={onChange} name={'pergunta2'} value={form.pergunta2} label="Sim ou Nao" variant="outlined" />
                        Porque ?
                        <textarea onChange={onChange} name={'pergunta2Resposta'} value={form.pergunta2Resposta} rows={4} placeholder='Digite seu comentario aqui'></textarea>





                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Profissional pro ativo ?
                        <TextField sx={{
                            width: "80%",
                            margin: "10px"
                        }}
                            fullWidth id="outlined-basic" onChange={onChange} name={'pergunta3'} value={form.pergunta3} label="Sim ou Nao" variant="outlined" />
                        Porque ?
                        <textarea onChange={onChange} name={'pergunta3Resposta'} value={form.pergunta3Resposta} rows={4} placeholder='Digite seu comentario aqui'></textarea>





                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Demonstrou comprometimento ?
                        <TextField sx={{
                            width: "80%",
                            margin: "10px"
                        }}
                            fullWidth id="outlined-basic" onChange={onChange} name={'pergunta4'} value={form.pergunta4} label="Sim ou Nao" variant="outlined" />
                        Porque ?
                        <textarea onChange={onChange} name={'pergunta4Resposta'} value={form.pergunta4Resposta} rows={4} placeholder='Digite seu comentario aqui'></textarea>




                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Sabe trabalhar em equipe ?
                        <TextField sx={{
                            width: "80%",
                            margin: "10px"
                        }}
                            fullWidth id="outlined-basic" onChange={onChange} name={'pergunta5'} value={form.pergunta5} label="Sim ou Nao" variant="outlined" />
                        Porque ?
                        <textarea onChange={onChange} name={'pergunta5Resposta'} value={form.pergunta5Resposta} rows={4} placeholder='Digite seu comentario aqui'></textarea>






                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Desenvolveu suas habilidades ?
                        <TextField sx={{
                            width: "80%",
                            margin: "10px"
                        }}
                            fullWidth id="outlined-basic" onChange={onChange} name={'pergunta6'} value={form.pergunta6} label="Sim ou Nao" variant="outlined" />
                        Porque ?
                        <textarea onChange={onChange} name={'pergunta6Resposta'} value={form.pergunta6Resposta} rows={4} placeholder='Digite seu comentario aqui'></textarea>




                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Possui habilidade de liderança ?
                        <TextField sx={{
                            width: "80%",
                            margin: "10px"
                        }}
                            fullWidth id="outlined-basic" onChange={onChange} name={'pergunta7'} value={form.pergunta7} label="Sim ou Nao" variant="outlined" />
                        Porque ?
                        <textarea onChange={onChange} name={'pergunta7Resposta'} value={form.pergunta7Resposta} rows={4} placeholder='Digite seu comentario aqui'></textarea>




                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Possui habilidade de liderança ?
                        <TextField sx={{
                            width: "80%",
                            margin: "10px"
                        }}
                            fullWidth id="outlined-basic" onChange={onChange} name={'pergunta8'} value={form.pergunta8} label="Sim ou Nao" variant="outlined" />
                        Porque ?
                        <textarea onChange={onChange} name={'pergunta8Resposta'} value={form.pergunta8Resposta} rows={4} placeholder='Digite seu comentario aqui'></textarea>




                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        E um profissional pontual ?
                        <TextField sx={{
                            width: "80%",
                            margin: "10px"
                        }}
                            fullWidth id="outlined-basic" onChange={onChange} name={'pergunta9'} value={form.pergunta9} label="Sim ou Nao" variant="outlined" />
                        Porque ?
                        <textarea onChange={onChange} name={'pergunta9Resposta'} value={form.pergunta9Resposta} rows={4} placeholder='Digite seu comentario aqui'></textarea>



                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Sabe trabalhar sobre pressao ?
                        <TextField sx={{
                            width: "80%",
                            margin: "10px"
                        }}
                            fullWidth id="outlined-basic" onChange={onChange} name={'pergunta10'} value={form.pergunta10} label="Sim ou Nao" variant="outlined" />
                        Porque ?
                        <textarea onChange={onChange} name={'pergunta10Resposta'} value={form.pergunta10Resposta} rows={4} placeholder='Digite seu comentario aqui'></textarea>



                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Participou ativamente das cerimonias ?
                        <TextField sx={{
                            width: "80%",
                            margin: "10px"
                        }}
                            fullWidth id="outlined-basic" label="Sim ou Nao" variant="outlined" />
                        Porque ?
                        <textarea rows={4} placeholder='Digite seu comentario aqui'></textarea>



                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Realizou atividades adiministrativas ?
                        <TextField sx={{
                            width: "80%",
                            margin: "10px"
                        }}
                            fullWidth id="outlined-basic" label="Sim ou Nao" variant="outlined" />
                        Porque ?
                        <textarea rows={4} placeholder='Digite seu comentario aqui'></textarea>

                        <br></br>
                        <br></br>
                        Quais caracteristicas o profissional se destaca ?
                        <textarea onChange={onChange} name={'caracteristicasProfissional'} value={form.caracteristicas_profissional} rows={4} placeholder='Digite seu comentario aqui'></textarea>

                        <br></br>
                        <br></br>
                        Consideraçoes gerais ?
                        <textarea onChange={onChange} name={'consideracoesGerais'} value={form.consideracoes_gerais} rows={4} placeholder='Digite seu comentario aqui'></textarea>
                        <br></br>
                        <br></br>
                        <LoadingButton
                            loading={loading}
                                
                            variant="contained"
                            fullWidth
                            type="submit"
                        >
                            Enviar feedback
                        </LoadingButton>
                    </Form>
                </Section>

            </Header>

        </Body>
    )

}

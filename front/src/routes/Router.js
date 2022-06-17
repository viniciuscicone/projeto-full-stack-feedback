import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PaginaLogin } from "../pages/PaginaLogin/PaginaLogin";

// ADM ROUTER

import { PaginaAdm } from "../pages/adm/PaginaAdm/PaginaAdm";
import { PaginaCadastroDeLeaguesADM } from '../pages/adm/PaginaCadastroDeLeagues/PaginaCadastroDeLeagues'
import { PaginaListagemDeLeaguesADM } from '../pages/adm/PaginaListagemDeLeagues/PaginaListagemDeLeagues'
import { PaginaCriacaoAvaliacaoADM } from '../pages/adm/PaginaCriacaoAvaliacao/PaginaCriacaoAvaliacao'
import { PaginaEditarLeagueADM } from '../pages/adm/PaginaEditarLeague/PaginaEditarLeague'
import { PaginaListagemDeUsersADM } from '../pages/adm/PaginaListagemUsers/PaginaListagemDeUsers'
import { PaginaGerenciarAcessoADM } from '../pages/adm/PaginaGerenciarAcesso/PaginaGerenciarAcesso'
import { PaginaPerfilLeaguersADM } from '../pages/adm/PaginaPerfilLeaguers/PaginaPerfilLeaguers'
import { PaginaCadastroDeTurmaADM } from '../pages/adm/PaginaCadastroDeTurma/PaginaCadastroDeTurma'
import { PaginaCadastroUsuariosADM } from '../pages/adm/PaginaCadastroUsuarios/PaginaCadastroUsuarios'
import { PaginaEditarCadastroADM } from '../pages/adm/PaginaEditarCadastro/PaginaEditarCadastro'
import { PaginaFormADM } from '../pages/adm/PaginaForm/form'



// GESTOR ROUTER

import { PaginaListagemDeLeaguesGESTOR } from '../pages/gestor/PaginaListagemDeLeagues/PaginaListagemDeLeagues'
import { PaginaGestorGESTOR } from '../pages/gestor/PaginaGestor/PaginaGestor'
import { PaginaCriacaoAvaliacaoGESTOR } from '../pages/gestor/PaginaCriacaoAvaliacao/PaginaCriacaoAvaliacao'
import { PaginaPerfilLeaguersGESTOR } from '../pages/gestor/PaginaPerfilLeaguers/PaginaPerfilLeaguers'

// MENTOR ROUTER

import { PaginaMENTOR } from '../pages/mentor/PaginaMentor/PaginaMentor'
import { PaginaCadastroDeLeaguesMENTOR } from '../pages/mentor/PaginaCadastroDeLeagues/PaginaCadastroDeLeagues'
import { PaginaListagemDeLeaguesMENTOR } from '../pages/mentor/PaginaListagemDeLeagues/PaginaListagemDeLeagues'
import { PaginaCriacaoAvaliacaoMENTOR } from '../pages/mentor/PaginaCriacaoAvaliacao/PaginaCriacaoAvaliacao'
import { PaginaEditarLeagueMENTOR } from '../pages/mentor/PaginaEditarLeague/PaginaEditarLeague'
import { PaginaPerfilLeaguersMENTOR } from '../pages/mentor/PaginaPerfilLeaguers/PaginaPerfilLeaguers'



export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PaginaLogin />} />

                <Route exact path="/adm" element={<PaginaAdm />} />
                <Route exact path="/adm/cadastro-leaguer" element={<PaginaCadastroDeLeaguesADM />} />
                <Route exact path="/adm/gerenciar-acessos" element={<PaginaGerenciarAcessoADM />} />
                <Route exact path="/adm/gerenciar-acessos/cadastro-de-usuarios" element={<PaginaCadastroUsuariosADM />} />
                <Route exact path="/adm/gerenciar-acessos/editar-cadastro/:id" element={<PaginaEditarCadastroADM />} />
                <Route exact path="/adm/gerenciar-acessos/cadastrar-turma" element={<PaginaCadastroDeTurmaADM />} />
                <Route exact path="/adm/listagem-de-leagues" element={<PaginaListagemDeLeaguesADM />} />
                <Route exact path="/adm/listagem-de-leagues/:id" element={<PaginaPerfilLeaguersADM />} />
                <Route exact path="/adm/nova-avaliacao" element={<PaginaCriacaoAvaliacaoADM />} />
                <Route exact path="/adm/editar-league" element={<PaginaEditarLeagueADM />} />
                <Route exact path="/adm/gerenciar-acessos/listagem-de-usuarios" element={<PaginaListagemDeUsersADM />} />
                <Route exact path="/adm/listagem-de-leagues/formulario/:id" element={<PaginaFormADM />} />



                <Route exact path="/gestor" element={<PaginaGestorGESTOR />} />
                <Route exact path="/gestor/listagem-de-leagues" element={<PaginaListagemDeLeaguesGESTOR />} />
                <Route exact path="/gestor/nova-avaliacao" element={<PaginaCriacaoAvaliacaoGESTOR />} />
                <Route exact path="/gestor/listagem-de-leagues/:id" element={<PaginaPerfilLeaguersGESTOR />} />



                <Route exact path="/mentor" element={<PaginaMENTOR />} />
                <Route exact path="/mentor/cadastro-league" element={<PaginaCadastroDeLeaguesMENTOR />} />
                <Route exact path="/mentor/listagem-de-leagues" element={<PaginaListagemDeLeaguesMENTOR />} />
                <Route exact path="/mentor/editar-leaguer" element={<PaginaEditarLeagueMENTOR />} />
                <Route exact path="/mentor/listagem-de-leagues/:id" element={<PaginaPerfilLeaguersMENTOR />} />
                <Route exact path="/mentor/nova-avaliacao" element={<PaginaCriacaoAvaliacaoMENTOR />} />

            </Routes>
        </BrowserRouter>
    )
}
export const irParaLogin = (navigate) => {
  navigate("/");
};

export const irParaAdm = (navigate) => {
  navigate(`/adm`);
};

export const irParaGestor = (navigate) => {
  navigate(`/gestor`);
};

export const irParaMentor = (navigate) => {
  navigate(`/mentor`);
};

//==================================================

export const irParaCadastroLeague = (navigate) => {
  navigate("/cadastro-league");
};

export const irParaGerenciarAcessos = (navigate) => {
  navigate("/adm/gerenciar-acessos");
};


export const irParaCadastroDeUsuario = (navigate) => {
  navigate("/adm/gerenciar-acessos/cadastro-de-usuarios");
};

export const irParaEditarCadastro = (navigate, id) => {
  navigate(`/adm/gerenciar-acessos/editar-cadastro/${id}`);
};

export const irParaCadastroDeTurma = (navigate) => {
  navigate("/adm/gerenciar-acessos/cadastrar-turma");
};



export const irParaLeaguersByMentor = (navigate) => {
  navigate("/mentor/leaguers");
};

export const irParaListagemDeLeaguers = (navigate) => {
  navigate("/listagem-de-leagues");
};

export const irParaListagemDeUsuarios = (navigate) => {
  navigate("/listagem-de-usuarios");
};

export const irParaPerfilDoLeaguer = (navigate, id) => {
navigate(`/listagem-de-leagues/perfil-do-leaguer/${id}`);
};

export const irParaNovaAvaliacao = (navigate) => {
  navigate("/nova-avaliacao");
};

export const irParaAvaliacaoFaseLabs = (navigate) => {
  navigate("/nova-avaliacao/avaliacao-fase-labs");
};

export const irParaAvaliacaoEmAndamento = (navigate, id) => {
  navigate(`/avaliacao-em-andamento/${id}`);
};

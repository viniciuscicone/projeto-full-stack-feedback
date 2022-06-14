CREATE TABLE IF NOT EXISTS GESTORES (
  id VARCHAR(255)UNIQUE PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  cargo VARCHAR(255) NOT NULL,
  role ENUM("MENTOR", "GESTOR", "ADM"),
  password VARCHAR(255) NOT NULL
);

select * from GESTORES;

CREATE TABLE IF NOT EXISTS LEAGUERS (
	id VARCHAR(255) UNIQUE PRIMARY KEY,
	nome VARCHAR(255) NOT NULL ,
	responsible VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
	turma VARCHAR(255),
	FOREIGN KEY(turma) REFERENCES TURMA(name),
	fase VARCHAR(255) NOT NULL,
	tecnologias VARCHAR(1000) NOT NULL,
	idiomas VARCHAR(255) NOT NULL
);

drop table FORMULARIO;


CREATE TABLE IF NOT EXISTS TURMA (
	id VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY,
	name VARCHAR(255) UNIQUE NOT NULL 
);


CREATE TABLE IF NOT EXISTS GRUPOS (
	id VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY,
	name_grupo VARCHAR(255) NOT NULL,
	id_funcionario VARCHAR(255) NOT NULL,
	mentor_id varchar(255) NOT NULL,
	FOREIGN KEY(mentor_id) REFERENCES GESTORES(id)
);

CREATE TABLE IF NOT EXISTS FORMULARIO (
	id VARCHAR(255) UNIQUE PRIMARY KEY,
	today VARCHAR(10) NOT NULL,
	nome VARCHAR(255),
	projetos ENUM('METASKILLS', 'METAPEOPLE') NOT NULL,
	tecnologias VARCHAR(1000) NOT NULL,
	tempo_formacao VARCHAR(255) NOT NULL,
	papel VARCHAR(255) NOT NULL,
	modelo_contrato ENUM('CLT') DEFAULT 'CLT',
	pergunta1 ENUM('SIM', 'NAO'),
	pergunta1_resposta VARCHAR(1000) NOT NULL,
	pergunta2 ENUM('SIM', 'NAO'),
	pergunta2_resposta VARCHAR(1000) NOT NULL,
	pergunta3 ENUM('SIM', 'NAO'),
	pergunta3_resposta VARCHAR(1000) NOT NULL,
	pergunta4 ENUM('SIM', 'NAO'),
	pergunta4_resposta VARCHAR(1000) NOT NULL,
	pergunta5 ENUM('SIM', 'NAO'),
	pergunta5_resposta VARCHAR(1000) NOT NULL,
	pergunta6 ENUM('SIM', 'NAO'),
	pergunta6_resposta VARCHAR(1000) NOT NULL,
	pergunta7 ENUM('SIM', 'NAO'),
	pergunta7_resposta VARCHAR(1000) NOT NULL,
	pergunta8 ENUM('SIM', 'NAO'),
	pergunta8_resposta VARCHAR(1000) NOT NULL,
	pergunta9 ENUM('SIM', 'NAO'),
	pergunta9_resposta VARCHAR(1000) NOT NULL,
	pergunta10 ENUM('SIM', 'NAO'),
	pergunta10_resposta VARCHAR(1000) NOT NULL,
	caracteristicas_profissional VARCHAR(1000) NOT NULL,
	consideracoes_gerais VARCHAR(1000) NOT NULL,
	leaguer_id VARCHAR(255) NOT NULL,
	FOREIGN KEY(leaguer_id) REFERENCES LEAGUERS(id)
);

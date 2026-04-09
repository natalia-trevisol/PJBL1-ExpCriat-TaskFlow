# Sistema Web de Gestão de Tarefas - TaskFlow

## Aluna

Natália Moritani Trevisol

**Usuário no GitHub:** natalia-trevisol

---

## Instituição

Pontifícia Universidade Católica do Paraná (PUCPR)

**Disciplina:** Experiência Criativa: Inovando Colaborativamente

---

## Resumo

O TaskFlow é um sistema web completo de gestão de tarefas desenvolvido com React no frontend, Node.js com Express no backend e MySQL como banco de dados.

O sistema permite o gerenciamento de tarefas por meio de um CRUD completo (Create, Read, Update, Delete), possibilitando ao usuário:

* Cadastrar novas tarefas
* Visualizar tarefas cadastradas
* Editar informações de tarefas
* Excluir tarefas
* Visualizar detalhes de cada tarefa

Além disso, o sistema conta com uma interface moderna desenvolvida com Tailwind CSS, incluindo:

* Layout responsivo
* Cards interativos com animações
* Cores dinâmicas baseadas no status da tarefa
* Validações de formulário
* Mensagens de erro amigáveis ao usuário
* Modal de confirmação de exclusão

---

## Tecnologias Utilizadas

### Frontend

* React
* Vite
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express
* MySQL

---

## Estrutura do Projeto

```
PJBL-expcriat5p/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── app.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
└── database.sql
```

---

## Banco de Dados

O sistema utiliza um banco de dados MySQL com a tabela `tarefa`:

| Campo     | Tipo     | Descrição                             |
| --------- | -------- | ------------------------------------- |
| id        | INT (PK) | Identificador da tarefa               |
| titulo    | VARCHAR  | Título da tarefa                      |
| descricao | TEXT     | Descrição da tarefa                   |
| status    | VARCHAR  | Status (pendente, iniciada, atrasada) |
| prazo     | DATE     | Data limite                           |

---

## Como Executar

### 1. Clonar o repositório

```bash
git clone https://github.com/natalia-trevisol/PJBL1-ExpCriat-TaskFlow
```

---

## Backend

### Instalar dependências

```bash
cd backend
npm install
```

### Rodar o servidor

```bash
node src/app.js
```

Servidor rodando em:
http://localhost:3000

---

## Frontend

### Instalar dependências

```bash
cd frontend
npm install
```

### Rodar aplicação

```bash
npm run dev
```

Acesse no navegador:
http://localhost:5173

---

## Banco de Dados

1. Abrir o MySQL Workbench
2. Criar um banco de dados
3. Importar o arquivo `database.sql`

Caminho:
Server → Data Import → Import from Self-Contained File

---

## Funcionalidades

* CRUD completo de tarefas
* Validação de dados no frontend e backend
* Interface moderna com Tailwind CSS
* Cards interativos com animação
* Cores por status (pendente, iniciada, atrasada)
* Modal de confirmação de exclusão
* Navegação entre páginas (React Router)

# Desafio Node.js – API de Cursos

[![Node.js](https://img.shields.io/badge/Node.js-22.x-green)](https://nodejs.org/en/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Fastify](https://img.shields.io/badge/Fastify-5.x-darkblue)](https://www.fastify.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-blue)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-24.x-blue)](https://www.docker.com/)

## 📝 Sobre o Projeto

Este projeto é uma API RESTful para o gerenciamento de cursos, desenvolvida durante o **Desafio: Sua Primeira API com Node.js** da Rocketseat.

A API foi construída com um foco em arquitetura robusta, seguindo as melhores práticas de mercado para garantir segurança, desempenho e manutenibilidade. O projeto inclui um ambiente completo de desenvolvimento e testes.

### Funcionalidades

- **Autenticação de Usuário** (`POST /sessions`): Login de usuário com validação de credenciais e geração de JWT.
- **Gerenciamento de Cursos** (`POST`, `GET`): Rotas para criar, listar e buscar cursos por ID.
- **Busca, Paginação e Ordenação**: Funcionalidades avançadas para filtrar, ordenar e paginar a lista de cursos.
- **Documentação Interativa**: Documentação da API gerada automaticamente com **Swagger** e **Scalar**.

---

## 💻 Tecnologias

As seguintes tecnologias foram utilizadas na construção do projeto:

- **Back-end:** `Node.js`, `Fastify`, `TypeScript`
- **Banco de Dados:** `PostgreSQL` (Docker e Neon)
- **ORM:** `Drizzle ORM` (`drizzle-kit`)
- **Validação:** `Zod`
- **Autenticação:** `argon2`, `jsonwebtoken`
- **Testes:** `Vitest`, `Supertest`, `@faker-js/faker` (para dados de teste)

---

## ⚙️ Configuração e Execução

### Pré-requisitos

- `Node.js` (v22.x ou superior)
- `Docker` e `Docker Compose`
- `npm`

### Passos

1.  Clone o repositório:

    - Clone o repositório e acesse a pasta do projeto.

2.  Instale as dependências:

    ```bash
    npm install
    ```

3.  Configure o banco de dados localmente:

    - Crie um arquivo `.env` na raiz do projeto.
    - Defina a URL do seu banco de dados local e a chave secreta JWT.

    ```env
    DATABASE_URL="postgresql://postgres:postgres@localhost:5432/desafio"
    JWT_SECRET="sua_chave_secreta_aqui"
    ```

4.  Inicie o banco de dados com Docker:

    ```bash
    docker-compose up -d
    ```

5.  Aplique as migrações do banco de dados para criar as tabelas:

    ```bash
    npm run db:migrate
    ```

6.  Inicie a aplicação em modo de desenvolvimento:
    ```bash
    npm run dev
    ```

---

## 📄 Documentação da API

Após iniciar o servidor, a documentação interativa da API estará disponível em:

`http://localhost:3333/docs`

---

## 🧪 Testes

Para rodar os testes de integração do projeto:

```bash
npm run test
```

---

## Scripts

- `npm run dev`: inicia o servidor com reload e carrega variáveis de `.env`
- `npm run db:generate`: gera artefatos do Drizzle a partir do schema
- `npm run db:migrate`: aplica migrações no banco
- `npm run db:studio`: abre o Drizzle Studio

# 🗂️ SIPAG

> Sistema integrado de controle de estoque, equipamentos e pedidos para agências e sede.

---

## 📌 Sobre o Projeto

O **SIPAG** é uma plataforma web desenvolvida para gerenciar o fluxo de equipamentos e pedidos entre a sede e suas agências. O sistema conta com controle de acesso por perfis de usuário, permitindo que cada nível hierárquico tenha acesso apenas às funcionalidades pertinentes ao seu papel.

---

## 👥 Perfis de Usuário

| Perfil | Descrição | Permissões |
|---|---|---|
| **Agente** | Controla a agência na qual foi cadastrado | Controla estoque da agência, cadastra equipamentos, cria pedidos |
| **Gerente** | Realiza o operacional junto dos agentes da sua agência e responde ao regional | Controla e supervisiona agentes da agência designada, acessa estoque da agência, cria e acompanha pedidos |
| **Analista** | Realiza a maior parte das funcionalidades do sistema | Cadastro/remoção de usuários, controle de estoque da sede e agências, autoriza/nega pedidos, cria pedidos |
| **Regional** | Controla todas as agências designadas no cadastro (uma ou mais) | Controla estoques das agências, visualiza e cria pedidos das agências |

---

## 🚀 Funcionalidades

- 📦 Controle de estoque por agência e sede
- 🖥️ Cadastro e gestão de equipamentos
- 📋 Criação e acompanhamento de pedidos
- ✅ Aprovação e negação de pedidos entre agências e sede
- 👤 Gerenciamento de usuários com controle de acesso por perfil
- 🌐 Painel diferenciado por nível de acesso (Agente, Gerente, Analista, Regional)

---

## 🛠️ Tecnologias Utilizadas

### Front-end
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

### Back-end
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white)
![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)

### Banco de Dados
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

---

## 📁 Estrutura do Repositório

```
SIPAG/
├── frontend/         # Aplicação Next.js + React + TypeScript
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   └── services/
│   └── package.json
├── backend/          # API em C# (.NET)
│   ├── Controllers/
│   ├── Models/
│   ├── Services/
│   └── SIPAG.sln
├── docs/             # Documentação técnica
│   ├── api.md
│   └── banco.md
└── README.md
```

---

## ⚙️ Como Rodar Localmente

### Pré-requisitos

- Node.js 18+
- .NET SDK 8+
- PostgreSQL

### Front-end

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

### Back-end

```bash
cd backend
dotnet restore
cp appsettings.example.json appsettings.json
dotnet run
```

---

## 🔑 Variáveis de Ambiente

### Front-end (`.env.local`)

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_API_URL` | URL base da API do back-end |

### Back-end (`appsettings.json`)

| Variável | Descrição |
|---|---|
| `ConnectionStrings__DefaultConnection` | String de conexão com o PostgreSQL |
| `Jwt__Secret` | Chave secreta para geração de tokens JWT |
| `Jwt__ExpiresInMinutes` | Tempo de expiração do token |

---

## 📐 Arquitetura

```
[Usuário] → [Next.js / React] → [API REST C#/.NET] → [PostgreSQL]
```

O front-end consome a API via requisições HTTP (REST). A autenticação é feita com JWT, e o controle de acesso é gerenciado pelo back-end com base no perfil do usuário (Agente, Analista ou Regional).

---

## 👨‍💻 Time de Desenvolvimento

| Área | Desenvolvedor |
|---|---|
| Front-end (Next.js, React, TypeScript) | [@wadtonrdp](https://github.com/wadtonrdp) |
| Back-end (C#, .NET, PostgreSQL) | [@tutuzimaia](https://github.com/tutuzimaia) |

---

## 📄 Licença

© 2026 SIPAG — Todos os direitos reservados.

Este projeto é de uso comercial. Nenhuma parte do código pode ser copiada, distribuída ou modificada sem autorização prévia dos autores.

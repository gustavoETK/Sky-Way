<div align="center">

# 🚀 Sky Way — Plataforma de Vagas em TI

**Português** | [English](#-sky-way--it-job-platform-english)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![No Backend](https://img.shields.io/badge/No%20Backend-localStorage-0066cc?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange?style=for-the-badge)

*Sua porta de entrada para as melhores oportunidades de emprego em TI — sem backend, sem frameworks.*

</div>

---

## 📋 Sobre o Projeto

O **Sky Way** é uma plataforma web de vagas de emprego e estágio focada no setor de Tecnologia da Informação. Construída inteiramente com HTML, CSS e JavaScript puro, a aplicação roda diretamente no navegador, sem necessidade de servidor ou banco de dados — toda a persistência de dados é feita via `localStorage`.

O projeto inclui um sistema completo de autenticação, dois módulos de listagem de vagas com filtros interativos, construtor de currículo, página de planos de assinatura e uma página institucional "Sobre Nós".

> **Fundada em 2023** por Gustavo Eidi (CEO) e Pedro Rafael (CTO).

---

## ✨ Funcionalidades

| Página | Arquivo | Descrição |
|---|---|---|
| 🔐 **Login / Cadastro** | `login.html` | Autenticação completa com cadastro, login e redefinição de senha |
| 🏠 **Home — Vagas Internacionais** | `index.html` | Listagem de vagas globais com filtro por tipo (emprego, estágio, jovem aprendiz, freelancer) e busca por texto |
| 📋 **Vagas em TI** | `vagas.html` | Vagas locais em SP filtradas por nível (Júnior, Pleno, Sênior) com localização aleatória |
| 📄 **Meu Currículo** | `curriculo.html` | Construtor de currículo com seções de experiência, educação e habilidades |
| 🚀 **Boost / Assinatura** | `assinatura.html` | Planos de assinatura (Standard, Professional, Premium, Enterprise) |
| ℹ️ **Sobre Nós** | `sobre.html` | Institucional com fundadores, parceiros, cursos recomendados e redes sociais |

---

## 🔑 Sistema de Autenticação

Todo o sistema de autenticação é feito via `localStorage`, sem backend:

- **Cadastro** — múltiplos usuários com nome, e-mail e senha (mín. 6 caracteres)
- **Login** — verificação por e-mail e senha com redirecionamento automático
- **Redefinição de senha** — alteração de senha pelo e-mail cadastrado
- **Sessão persistente** — usuário logado salvo no `localStorage`
- **Proteção de rotas** — páginas internas redirecionam para o login se não houver sessão ativa
- **Avatar dinâmico** — iniciais do nome exibidas na sidebar em todas as páginas

---

## 💼 Módulos de Vagas

### Home — Vagas Internacionais (`index.html`)

Vagas geradas dinamicamente (88 no total) com:

- **Tipos:** Emprego, Estágio, Jovem Aprendiz, Freelancer
- **Filtros:** checkbox por tipo de vaga + busca por texto em tempo real
- **Salários:** faixas salariais por categoria
- **Candidatura:** botão com notificação toast e posição na fila aleatória

### Vagas em TI (`vagas.html`)

Vagas fixas com dados reais (34 vagas) com:

- **Níveis:** Júnior, Pleno, Sênior
- **Localização:** cidades e bairros da Grande São Paulo gerados aleatoriamente
- **Filtros:** checkbox por nível + busca por texto
- **Candidatura:** notificação com nome da empresa e posição na fila

---

## 🗂 Estrutura do Projeto

```
Sky-Way-main/
└── Sky Way 14.04/
    ├── index.html          # Home — vagas internacionais
    ├── vagas.html          # Vagas em TI (Júnior/Pleno/Sênior)
    ├── login.html          # Login, cadastro e redefinição de senha
    ├── curriculo.html      # Construtor de currículo
    ├── assinatura.html     # Planos de assinatura (Boost)
    ├── sobre.html          # Sobre Nós + rodapé institucional
    ├── img/
    │   ├── pngegg.png              # Logo Sky Way
    │   ├── favicon.ico             # Ícone do site
    │   ├── img1.jpg                # Imagem de fundo do login
    │   ├── facebook.png            # Ícone redes sociais
    │   ├── instagram.png
    │   ├── linkedin.png
    │   ├── whatsapp.png
    │   └── Rickrolling_QR_code.png # Easter egg nos perfis dos fundadores 🥚
```

---

## 🚀 Como Usar

### Pré-requisitos

Apenas um navegador moderno. Nenhuma instalação ou dependência necessária.

### Rodando localmente

**Opção 1 — Abrir diretamente:**

Abra o arquivo `login.html` diretamente no navegador. Como o projeto usa `localStorage` (sem chamadas a APIs externas), funciona sem servidor.

**Opção 2 — Servidor local (recomendado para evitar restrições de CORS):**

Com VS Code + extensão Live Server:
```
Clique com botão direito em login.html → "Open with Live Server"
```

### Primeiro acesso

1. Acesse `login.html`
2. Clique em **"Cadastre-se"** e crie uma conta
3. Faça login com o e-mail e senha cadastrados
4. Explore as vagas, crie seu currículo e confira os planos

---

## 💰 Planos de Assinatura

| Plano | Preço | Destaques |
|---|---|---|
| **Standard** | R$ 19,90/mês | Vagas, candidaturas ilimitadas, filtros básicos |
| **Professional** | R$ 49,90/mês | Prioridade nas candidaturas, alertas, CV em destaque |
| **Premium** | R$ 99,90/mês | Mentoria com recrutadores, entrevistas simuladas, análise de CV |
| **Enterprise** | R$ 199,90/mês | Consultoria de carreira, networking, suporte 24/7, prioridade absoluta |

---

## ⚙️ Tecnologias

- **HTML5** — estrutura semântica de todas as páginas
- **CSS3** — estilos inline por página (sem framework externo)
- **JavaScript Vanilla** — toda a lógica de negócio, filtros, autenticação e persistência
- **localStorage** — autenticação, currículo e preferência de tema
- **SCSS** — arquivo base de estilos (`style/style.scss`)
- **Zero dependências externas** — sem jQuery, React, Bootstrap ou qualquer biblioteca

---

## ⚠️ Avisos

- **Segurança:** senhas são armazenadas em texto puro no `localStorage`. **Não use em produção com dados reais.**
- **Dados:** as vagas são fictícias e geradas dinamicamente. Nenhuma candidatura é de fato enviada.
- **Pagamentos:** os botões de assinatura não processam pagamentos reais.
- Projeto destinado a fins educacionais e de portfólio.

---

## 👥 Fundadores

| Nome | Cargo |
|---|---|
| **Gustavo Eidi** | CEO & Co-Fundador |
| **Pedro Rafael** | CTO & Co-Fundador |

---

## 📄 Licença

Distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

<br>
<br>

---

<div align="center">

# 🚀 Sky Way — IT Job Platform (English)

[Português](#-sky-way--plataforma-de-vagas-em-ti) | **English**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![No Backend](https://img.shields.io/badge/No%20Backend-localStorage-0066cc?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-In%20Development-orange?style=for-the-badge)

*Your gateway to the best IT job opportunities — no backend, no frameworks.*

</div>

---

## 📋 About

**Sky Way** is a web-based job listing platform focused on the Information Technology sector. Built entirely with HTML, CSS, and vanilla JavaScript, the application runs directly in the browser with no server or database required — all data persistence is handled via `localStorage`.

The project includes a complete authentication system, two job listing modules with interactive filters, a resume builder, a subscription plans page, and an institutional "About Us" page.

> **Founded in 2023** by Gustavo Eidi (CEO) and Pedro Rafael (CTO).

---

## ✨ Features

| Page | File | Description |
|---|---|---|
| 🔐 **Login / Register** | `login.html` | Full auth flow: sign up, login, and password reset |
| 🏠 **Home — International Jobs** | `index.html` | Global job listings filtered by type (job, internship, apprentice, freelancer) with text search |
| 📋 **IT Jobs** | `vagas.html` | Local São Paulo jobs filtered by seniority (Junior, Mid, Senior) with random locations |
| 📄 **My Resume** | `curriculo.html` | Resume builder with experience, education, and skills sections |
| 🚀 **Boost / Subscription** | `assinatura.html` | Subscription plans (Standard, Professional, Premium, Enterprise) |
| ℹ️ **About Us** | `sobre.html` | Institutional page with founders, partners, recommended courses and social links |

---

## 🔑 Authentication System

The entire auth system runs via `localStorage`, with no backend:

- **Sign up** — multiple users with name, email, and password (min. 6 characters)
- **Login** — email and password verification with automatic redirect
- **Password reset** — password change using the registered email
- **Persistent session** — logged-in user saved in `localStorage`
- **Route protection** — internal pages redirect to login if no active session exists
- **Dynamic avatar** — user initials displayed in the sidebar across all pages

---

## 💼 Job Listing Modules

### Home — International Jobs (`index.html`)

Dynamically generated listings (88 total) featuring:

- **Types:** Job, Internship, Young Apprentice, Freelancer
- **Filters:** checkbox by job type + real-time text search
- **Salaries:** salary ranges per category
- **Application:** button with toast notification and random queue position

### IT Jobs (`vagas.html`)

Static listings with fixed data (34 positions) featuring:

- **Levels:** Junior, Mid-level (Pleno), Senior
- **Location:** random cities and neighborhoods across Greater São Paulo
- **Filters:** checkbox by level + text search
- **Application:** notification with company name and queue position

---

## 🗂 Project Structure

```
Sky-Way-main/
└── Sky Way 14.04/
    ├── index.html          # Home — international job listings
    ├── vagas.html          # IT jobs (Junior/Mid/Senior)
    ├── login.html          # Login, register, and password reset
    ├── curriculo.html      # Resume builder
    ├── assinatura.html     # Subscription plans (Boost)
    ├── sobre.html          # About Us + institutional footer
    ├── img/
    │   ├── pngegg.png              # Sky Way logo
    │   ├── favicon.ico             # Site icon
    │   ├── img1.jpg                # Login background image
    │   ├── facebook.png            # Social media icons
    │   ├── instagram.png
    │   ├── linkedin.png
    │   ├── whatsapp.png
    │   └── Rickrolling_QR_code.png # Easter egg in founder profiles 🥚
```

---

## 🚀 Getting Started

### Prerequisites

Just a modern browser. No installation or dependencies required.

### Running Locally

**Option 1 — Open directly:**

Open `login.html` directly in your browser. Since the project uses `localStorage` (no external API calls), it works without a server.

**Option 2 — Local server (recommended to avoid CORS restrictions):**

With VS Code + Live Server extension:
```
Right-click login.html → "Open with Live Server"
```

### First Access

1. Open `login.html`
2. Click **"Cadastre-se"** (Sign up) and create an account
3. Log in with your registered email and password
4. Browse jobs, build your resume, and check out the plans

---

## 💰 Subscription Plans

| Plan | Price | Highlights |
|---|---|---|
| **Standard** | R$ 19.90/mo | Job access, unlimited applications, basic filters |
| **Professional** | R$ 49.90/mo | Priority applications, job alerts, featured CV |
| **Premium** | R$ 99.90/mo | Recruiter mentoring, mock interviews, CV analysis |
| **Enterprise** | R$ 199.90/mo | Career consulting, networking, 24/7 support, absolute priority |

---

## ⚙️ Tech Stack

- **HTML5** — semantic structure across all pages
- **CSS3** — inline styles per page (no external framework)
- **Vanilla JavaScript** — all business logic, filters, authentication, and persistence
- **localStorage** — authentication, resume data, and theme preference
- **SCSS** — base stylesheet (`style/style.scss`)
- **Zero external dependencies** — no jQuery, React, Bootstrap, or any library

---

## ⚠️ Disclaimers

- **Security:** Passwords are stored as plain text in `localStorage`. **Do not use in production with real data.**
- **Data:** All job listings are fictional and generated dynamically. No applications are actually submitted.
- **Payments:** Subscription buttons do not process real payments.
- Project intended for educational and portfolio purposes only.

---

## 👥 Founders

| Name | Role |
|---|---|
| **Gustavo Eidi** | CEO & Co-Founder |
| **Pedro Rafael** | CTO & Co-Founder |

---

## 📄 License

Distributed under the MIT License. See the `LICENSE` file for more details.

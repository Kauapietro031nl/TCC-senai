

# Sistema de Gerenciamento de Estoque - Ferragens Negrão

📦 **Projeto de TCC - SENAI (PR)**
🖥️ **Título:** Proposta de um sistema web de controle de entrada e saída de peças com JavaScript, HTML e CSS
🏫 **Escola:** (PR) SENAI - Campus da Indústria
🌎 **Área de Atuação:** Tecnologia da Informação

---

## 📌 Descrição do Projeto

A empresa **Ferragens Negrão** enfrenta diversos problemas no gerenciamento de seu estoque de remanufatura, incluindo a falta de rastreabilidade das peças, uso de planilhas acessíveis a todos, movimentações logísticas excessivas e um fluxo de aprovação ineficiente.

Este projeto tem como objetivo propor um **sistema web** para **controle de entrada e saída de peças**, otimizando o processo de gestão de estoque da empresa, oferecendo mais **visibilidade, segurança e rastreabilidade**.

---

## 🎯 Objetivo

Desenvolver um sistema simples e funcional que:

* Otimize o controle de peças e serviços.
* Codifique e identifique corretamente os itens.
* Facilite a rastreabilidade e histórico das movimentações.
* Reduza o desperdício de tempo e retrabalho.
* Restringa acessos com base em níveis de usuário.

---

## 🛠️ Tecnologias Utilizadas

* **Frontend:** HTML5, CSS3, JavaScript
* **Backend:** Node.js (Express)
* **Banco de Dados:** MySQL
* **Outras Tecnologias:** bcrypt, cors, dotenv, xlsx, pdfmake, entre outros
* **Hospedagem local:** Ambiente de desenvolvimento com `localhost`

---

## 🧩 Funcionalidades

* Login com criptografia de senha (bcrypt)
* Registro e visualização de peças em estoque
* Controle de entrada e saída com histórico
* Exportação de relatórios em PDF e XLSX
* Filtros e busca por nome, código ou data
* Controle de permissões e acesso por tipo de usuário
* Interface amigável e responsiva

---

## 🚫 Restrições que o sistema busca eliminar

* Tempo perdido na localização de peças
* Falta de visibilidade e controle
* Excesso ou falta de estoque
* Gestão de inventário ineficiente
* Acesso descontrolado às informações

---

## 📈 Benefícios Esperados

* Aumento da produtividade
* Redução de erros manuais
* Otimização do tempo nas movimentações
* Melhor rastreabilidade dos produtos
* Tomada de decisão mais rápida e segura

---

## 📂 Estrutura do Projeto

```
TCC-senai/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   ├── server.js
├── frontend/
│   ├── css/
│   ├── js/
│   ├── html/
│   ├── img/
├── README.md
```

---

## 🔐 Requisitos

* Node.js instalado
* MySQL rodando localmente
* Criar um arquivo `.env` com as variáveis de ambiente para conexão com o banco

---

## 🚀 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/Kauapietro031nl/TCC-senai.git
```

2. Instale as dependências:

```bash
cd TCC-senai/backend
npm install
```

3. Configure seu `.env` com as variáveis necessárias:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
PORT=4000
```

4. Inicie o servidor:

```bash
npm start
```

5. Acesse o frontend no navegador pelo caminho correspondente.

---

## 🧪 Status do Projeto

✅ Em desenvolvimento
📅 Apresentação final: **12 de agosto**
📍 Estado: **Minas Gerais -MG**

---

## 👥 Equipe

* Kauã Pietro (Desenvolvedor)
* João Pedro (Documentação)
* Arthur Joede(Designer)
* Thiago Vinnicius (Documentação)

---



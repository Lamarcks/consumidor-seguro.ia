# Consumidor Seguro.IA

### Assistente inteligente para orientação do consumidor

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white">
</p>

---

## Sobre o projeto

O **Consumidor Seguro.IA** é uma aplicação web criada para facilitar o acesso a informações relacionadas aos direitos do consumidor.

A proposta surgiu da dificuldade de encontrar orientações claras e práticas diante de situações comuns, como problemas com compras, cobranças, cancelamentos, produtos com defeito e serviços.

A aplicação combina uma interface simples com um assistente baseado em inteligência artificial, utilizando uma base de conhecimento como contexto para as respostas.

> O sistema tem finalidade informativa e não substitui orientação jurídica profissional ou atendimento dos órgãos competentes.

---

## Objetivo

O principal objetivo do projeto é transformar informações que normalmente estão espalhadas em textos e documentos em orientações mais fáceis de entender e utilizar.

A aplicação procura responder principalmente três perguntas:

* O que pode estar acontecendo?
* O que posso fazer agora?
* Que informações e documentos devo guardar?

---

## Funcionalidades

### Situações comuns

O usuário pode começar sua consulta selecionando uma situação, como:

* Compra pela internet
* Produto com defeito
* Cobrança
* Cancelamento
* Problemas com serviços
* Viagens
* Dados pessoais
* Preços
* Produto diferente do anunciado

### Assistente com IA

O usuário também pode descrever seu problema diretamente e enviar a situação para análise.

A aplicação utiliza o **Google Gemini** para gerar uma resposta contextualizada a partir das informações disponíveis na base de conhecimento.

### Orientações práticas

As respostas são organizadas para facilitar a leitura, incluindo informações como:

* Possível situação identificada
* Possível direito envolvido
* Próximas ações
* Evidências que podem ser guardadas
* Canais oficiais para buscar atendimento
* Fonte das informações

### Acessibilidade

A interface foi desenvolvida considerando diferentes formas de interação, incluindo:

* Navegação por teclado
* Elementos com foco visível
* Estrutura semântica
* Textos objetivos
* Organização visual das informações

---

## Como funciona

O fluxo principal da aplicação funciona da seguinte maneira:

```text
Usuário
   │
   ▼
Interface Web
   │
   ▼
Descrição do problema
   │
   ▼
API /api/chat
   │
   ▼
Base de conhecimento
   │
   ▼
Google Gemini
   │
   ▼
Resposta estruturada
   │
   ▼
Usuário
```

A chave da API não é exposta diretamente no código do frontend. A comunicação com o Gemini é realizada pelo backend.

---

## Base de conhecimento

O projeto possui uma base local de informações utilizada como contexto para o modelo de inteligência artificial.

Esse conteúdo é organizado no arquivo:

```text
banco_procon.js
```

A ideia é fornecer ao modelo informações relevantes antes da geração da resposta, reduzindo a dependência de conhecimento genérico do modelo.

Essa abordagem se aproxima do conceito de **RAG (Retrieval-Augmented Generation)**, utilizando informações externas como contexto para a geração das respostas.

---

## Tecnologias utilizadas

| Tecnologia    | Utilização                      |
| ------------- | ------------------------------- |
| HTML5         | Estrutura da interface          |
| CSS3          | Estilização e responsividade    |
| JavaScript    | Interações e lógica do frontend |
| Node.js       | Ambiente de execução do backend |
| Express       | Criação da API e servidor       |
| Google Gemini | Geração das respostas da IA     |

---

## Estrutura do projeto

```text
consumidor-seguro.ia/
│
├── assets/
│   └── imagens e recursos
│
├── app.js
├── banco_procon.js
├── index.html
├── server.js
├── style.css
├── package.json
├── .gitattributes
└── README.md
```

---

## Como executar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/Lamarcks/consumidor-seguro.ia.git
```

### 2. Entre na pasta

```bash
cd consumidor-seguro.ia
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure a chave da API

Crie um arquivo `.env` na raiz do projeto:

```env
GEMINI_API_KEY=sua_chave_aqui
```

### 5. Inicie o servidor

```bash
npm run dev
```

Depois, acesse:

```text
http://localhost:3000
```

---

## Exemplos de consulta

Alguns exemplos de situações que podem ser utilizadas para testar a aplicação:

```text
Comprei um produto pela internet e tive um problema com a entrega. O que posso fazer?

Recebi uma cobrança que não reconheço. Quais informações devo guardar?

Meu produto apresentou um defeito depois da compra. Como devo proceder?

Quero cancelar uma compra que fiz pela internet. O que devo verificar?
```

---

## Aprendizados

Durante o desenvolvimento do projeto, foram trabalhados conceitos relacionados a:

* Desenvolvimento de aplicações web
* Criação de APIs com Node.js e Express
* Integração com modelos de inteligência artificial
* Utilização de contexto para geração de respostas
* Organização de uma base de conhecimento
* Variáveis de ambiente e proteção de credenciais
* Acessibilidade em aplicações web
* Estruturação de interfaces voltadas para problemas reais

---

## Próximos passos

Algumas melhorias planejadas para o projeto:

* [ ] Melhorar a base de conhecimento
* [ ] Adicionar mais fontes oficiais
* [ ] Melhorar o tratamento de respostas da IA
* [ ] Criar testes automatizados
* [ ] Melhorar monitoramento e tratamento de erros
* [ ] Aprimorar acessibilidade
* [ ] Realizar o deploy da aplicação
* [ ] Avaliar melhorias de desempenho e segurança

---

## Contexto do projeto

O **Consumidor Seguro.IA** foi desenvolvido como um projeto prático para explorar a utilização de inteligência artificial na criação de aplicações voltadas para problemas do cotidiano.

Além do desenvolvimento web, o projeto também foi uma oportunidade para estudar como modelos de IA podem ser utilizados em conjunto com uma base de informações estruturada.

---

## Autor

**Lamarcks**

Estudante de Análise e Desenvolvimento de Sistemas, interessado em desenvolvimento web, automação, inteligência artificial e criação de soluções para problemas reais.

---

<p align="center">
  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ihago%20Lamarcks-0A66C2?style=for-the-badge\&logo=linkedin\&logoColor=white)](https://www.linkedin.com/in/ihago-lamarcks1/)

</p>

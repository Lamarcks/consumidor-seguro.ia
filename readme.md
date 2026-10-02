<div align="center">

# ⚖️ CONSUMIDOR SEGURO.IA

### Assistente Inteligente para Orientação do Direito do Consumidor

**Inteligência Artificial • Desenvolvimento Web • RAG • Acessibilidade**

Projeto desenvolvido para explorar a aplicação de **Inteligência Artificial Generativa** na simplificação de informações relacionadas aos direitos do consumidor.

<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge\&logo=express\&logoColor=white)
![Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge\&logo=google\&logoColor=white)
![RAG](https://img.shields.io/badge/RAG-Generative_AI-blueviolet?style=for-the-badge)

![Status](https://img.shields.io/badge/STATUS-EM_DESENVOLVIMENTO-orange?style=for-the-badge)

<br>

### 🌐 APLICAÇÃO WEB

</div>

---

# 📌 Sobre o projeto

O **Consumidor Seguro.IA** é uma aplicação web desenvolvida para tornar informações sobre **direitos do consumidor mais simples de entender e utilizar**.

A proposta surgiu a partir de um problema comum: muitas informações importantes estão disponíveis em documentos extensos e utilizando uma linguagem que pode ser difícil para uma pessoa que não possui conhecimento jurídico.

Em vez de começar por textos jurídicos, a aplicação parte da **situação vivenciada pelo consumidor**.

O usuário pode explicar o que aconteceu e receber uma orientação inicial sobre:

* O que pode estar acontecendo;
* Qual informação pode estar relacionada ao problema;
* O que fazer em seguida;
* Quais evidências guardar;
* Onde procurar ajuda.

> ⚠️ O projeto possui finalidade educacional e informativa. As respostas da IA não substituem orientação jurídica profissional nem representam uma decisão oficial sobre um caso concreto.

---

# 🎯 O problema

Uma situação de consumo pode parecer simples, mas muitas vezes gera dúvidas:

```text
"Meu produto apresentou defeito. E agora?"

"Fiz uma compra online e ela não chegou."

"Recebi uma cobrança que não reconheço."

"A empresa não quer cancelar meu pedido."

"O preço anunciado era diferente do cobrado."
```

O problema não é apenas encontrar uma informação.

É entender **qual informação procurar, o que fazer primeiro e quais evidências podem ser importantes**.

Além disso, materiais relacionados ao consumidor podem estar distribuídos em páginas, documentos e conteúdos com diferentes níveis de complexidade.

---

# 💡 A solução

O **Consumidor Seguro.IA** cria uma camada de interação mais simples entre o consumidor e essas informações.

A aplicação combina:

```text
Situação do consumidor
        ↓
Interface Web
        ↓
Backend
        ↓
Base de conhecimento
        ↓
Google Gemini
        ↓
Orientação estruturada
```

A Inteligência Artificial é utilizada para interpretar a pergunta e apresentar uma resposta mais acessível, utilizando como contexto informações previamente estruturadas no projeto.

A base inicial foi construída a partir de materiais relacionados ao **Procon-SP**.

---

# 🚀 Principais funcionalidades

### 🧭 Situações comuns

A aplicação apresenta diferentes situações que podem acontecer no cotidiano:

* 📦 Compra pela internet;
* 🛠️ Produto com defeito;
* 💳 Cobrança não reconhecida;
* ↩️ Cancelamento;
* 🔧 Problemas com serviços;
* ✈️ Problemas relacionados a viagens;
* 🔐 Dados e privacidade;
* 💰 Divergência de preço;
* 📋 Produto diferente do anunciado.

---

### 🤖 Assistente com Inteligência Artificial

O usuário pode explicar o problema utilizando linguagem natural.

Exemplo:

```text
Comprei um produto pela internet e o prazo de
entrega já passou, mas a empresa não responde.
```

A aplicação envia a consulta para o backend, que utiliza a **Google Gemini API** para processar a solicitação considerando o contexto disponível na base de conhecimento.

---

### 📚 Base de conhecimento

O projeto possui uma base local organizada em JavaScript com informações relacionadas a situações de consumo.

Entre os temas contemplados estão:

* Produtos;
* Garantias;
* Compras pela internet;
* Direito de arrependimento;
* Cobranças;
* Cartões;
* Alimentos;
* Preços;
* Serviços;
* Veículos usados.

A base pode ser expandida conforme o projeto evolui.

---

### 🧾 Evidências

A aplicação também busca orientar o consumidor sobre informações que podem ser importantes para registrar o problema.

Exemplos:

* Nota fiscal;
* Comprovante de pagamento;
* Contrato;
* Pedido de compra;
* Fotos;
* Prints;
* E-mails;
* Mensagens;
* Protocolos de atendimento.

---

### 🏛️ Canais oficiais

Quando a situação exigir uma análise ou atendimento que ultrapasse o escopo da aplicação, o projeto pode orientar o usuário a procurar canais oficiais.

A proposta é funcionar como um **ponto inicial de orientação**, e não como substituto dos órgãos responsáveis.

---

### ♿ Acessibilidade

A interface também foi desenvolvida considerando princípios de acessibilidade e facilidade de utilização.

Entre os recursos trabalhados estão:

* Navegação por teclado;
* Elementos interativos acessíveis;
* Organização visual das informações;
* Interface responsiva;
* Linguagem mais simples.

---

# 🧠 Arquitetura do projeto

A aplicação separa a interface do usuário da comunicação com a API de Inteligência Artificial.

```text
┌──────────────────────┐
│       Usuário        │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│     Interface Web    │
│    HTML + CSS + JS   │
└──────────┬───────────┘
           │
           │ POST /api/chat
           ▼
┌──────────────────────┐
│       Node.js        │
│        Express       │
│      server.js       │
└──────────┬───────────┘
           │
           ├──────────────► Banco Procon
           │                banco_procon.js
           │
           ▼
┌──────────────────────┐
│    Google Gemini     │
│   Gemini 2.5 Flash   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Resposta estruturada │
│      ao usuário      │
└──────────────────────┘
```

---

# 🔄 Como funciona a consulta

O fluxo principal pode ser resumido em:

```text
Pergunta do usuário
        ↓
Frontend
        ↓
POST /api/chat
        ↓
Backend Express
        ↓
Contexto da base Procon
        ↓
Google Gemini
        ↓
Resposta estruturada
        ↓
Frontend
```

A resposta é organizada para facilitar a compreensão:

```text
🔎 O que pode estar acontecendo

⚖️ Possível direito envolvido

📋 O que fazer agora

📸 O que guardar como prova

🏛️ Onde buscar ajuda

⚠️ Atenção

📚 Fonte
```

---

# 🧠 RAG e base de conhecimento

O projeto utiliza uma abordagem simplificada de **RAG — Retrieval-Augmented Generation**.

Neste caso, o conceito é aplicado fornecendo informações da base de conhecimento do projeto como contexto para o modelo de linguagem.

```text
Base de conhecimento
        ↓
Contexto do Procon
        ↓
Pergunta do usuário
        ↓
Google Gemini
        ↓
Resposta contextualizada
```

O objetivo é reduzir respostas genéricas e manter a geração da IA relacionada ao domínio do projeto.

---

# 🛡️ Segurança

A chave utilizada para acessar a API do Gemini não deve ficar exposta no código do frontend.

O backend utiliza uma variável de ambiente:

```env
GEMINI_API_KEY=sua_chave_aqui
```

A aplicação acessa a chave através do ambiente do servidor.

O arquivo `.env` deve permanecer fora do controle de versão:

```gitignore
.env
```

> ⚠️ Para utilização em produção, ainda seriam necessários mecanismos adicionais como rate limiting, gerenciamento seguro de secrets, monitoramento, autenticação quando aplicável e proteção contra abuso da API.

---

# 🛠️ Tecnologias utilizadas

| Categoria       | Tecnologia                      |
| --------------- | ------------------------------- |
| 🎨 Front-end    | HTML5, CSS3, JavaScript         |
| ⚙️ Back-end     | Node.js                         |
| 🚀 API          | Express.js                      |
| 🧠 IA           | Google Gemini API               |
| 🤖 Modelo       | Gemini 2.5 Flash                |
| 📚 Contexto     | Base de conhecimento local      |
| 🔎 Arquitetura  | RAG                             |
| ♿ Interface     | Acessibilidade e responsividade |
| 🔐 Configuração | Variáveis de ambiente           |

---

# 📂 Estrutura do projeto

```text
consumidor-seguro.ia/
│
├── assets/
│
├── banco_procon.js
├── index.html
├── app.js
├── style.css
├── server.js
│
├── package.json
├── package-lock.json
├── .gitattributes
├── IMAGENS.txt
└── readme.md
```

### Principais arquivos

| Arquivo           | Responsabilidade                |
| ----------------- | ------------------------------- |
| `index.html`      | Estrutura da interface          |
| `style.css`       | Estilização e responsividade    |
| `app.js`          | Interações da aplicação         |
| `server.js`       | Backend e integração com Gemini |
| `banco_procon.js` | Base de conhecimento            |
| `package.json`    | Dependências e scripts          |
| `assets/`         | Recursos visuais do projeto     |

---

# ⚙️ Executando localmente

## 1. Clone o repositório

```bash
git clone https://github.com/Lamarcks/consumidor-seguro.ia.git
```

Entre na pasta:

```bash
cd consumidor-seguro.ia
```

---

## 2. Instale as dependências

```bash
npm install
```

---

## 3. Configure a API do Gemini

Crie um arquivo:

```text
.env
```

Na raiz do projeto:

```env
GEMINI_API_KEY=sua_chave_aqui
```

> 🔐 Nunca publique sua chave real no GitHub.

---

## 4. Inicie a aplicação

```bash
npm run dev
```

A aplicação será iniciada utilizando o servidor Node.js.

Acesse:

```text
http://localhost:3000
```

---

# 🧪 Exemplos para testar

### 📦 Compra online

```text
Comprei um produto pela internet e ele não chegou.
```

### 🛠️ Produto com defeito

```text
Meu produto apresentou defeito depois da compra.
```

### 💳 Cobrança

```text
Apareceu uma cobrança no meu cartão que eu não reconheço.
```

### ↩️ Cancelamento

```text
Quero cancelar uma compra e não sei como proceder.
```

### 💰 Preço

```text
O preço anunciado era diferente do preço cobrado.
```

---

# 📈 Diferenciais do projeto

O Consumidor Seguro.IA reúne diferentes áreas de desenvolvimento em uma única aplicação:

```text
                 CONSUMIDOR SEGURO.IA
                          │
          ┌───────────────┼───────────────┐
          │               │               │
          ▼               ▼               ▼
      Web/App            IA          Acessibilidade
          │               │               │
          └───────────────┼───────────────┘
                          │
                          ▼
                         RAG
                          │
                          ▼
                 Base de conhecimento
                          │
                          ▼
                    Google Gemini
```

Entre os principais pontos trabalhados estão:

* Aplicação web completa;
* Backend com Node.js e Express;
* Integração com API de IA;
* Utilização de contexto próprio;
* Base de conhecimento estruturada;
* RAG;
* Interface responsiva;
* Acessibilidade;
* Organização de respostas;
* Segurança de credenciais;
* Estratégia de contingência para situações fora do contexto principal.

---

# 🎓 Aprendizados

Durante o desenvolvimento foram colocados em prática conceitos relacionados a:

* Desenvolvimento Web;
* JavaScript;
* Node.js;
* Express;
* APIs;
* Inteligência Artificial Generativa;
* Google Gemini;
* RAG;
* Engenharia de Prompt;
* Organização de bases de conhecimento;
* Segurança de aplicações;
* Variáveis de ambiente;
* Acessibilidade Web;
* UX/UI;
* Responsividade;
* Arquitetura cliente-servidor.

Além da parte técnica, o projeto trouxe o desafio de transformar informações potencialmente complexas em uma experiência mais simples para o usuário.

---

# 🗺️ Próximas evoluções

Algumas melhorias planejadas para o projeto:

* [ ] Expandir a base de conhecimento;
* [ ] Melhorar a recuperação do contexto relevante;
* [ ] Adicionar referências mais detalhadas às respostas;
* [ ] Criar testes automatizados;
* [ ] Melhorar tratamento de erros;
* [ ] Implementar rate limiting;
* [ ] Adicionar monitoramento;
* [ ] Melhorar avaliação das respostas da IA;
* [ ] Evoluir recursos de acessibilidade;
* [ ] Melhorar a estratégia de atualização da base;
* [ ] Avaliar arquitetura para produção.

---

# 🎓 Contexto do projeto

O **Consumidor Seguro.IA** foi desenvolvido com finalidade **acadêmica e experimental**, explorando a utilização de Inteligência Artificial na criação de aplicações voltadas para problemas reais do cotidiano.

A proposta une conhecimentos de:

```text
Desenvolvimento Web
        +
Inteligência Artificial
        +
RAG
        +
Acessibilidade
        +
Segurança
```

---

# 👨‍💻 Autor

## Ihago Lamarcks

Projeto desenvolvido para estudo e aplicação prática de conceitos de **Desenvolvimento Web, Inteligência Artificial e RAG**.

<p align="left">

[![GitHub](https://img.shields.io/badge/GitHub-Lamarcks-181717?style=for-the-badge\&logo=github)](https://github.com/Lamarcks)

</p>

---

<div align="center">

### ⭐ Se este projeto foi útil ou interessante, considere deixar uma estrela no repositório.

**Desenvolvido com HTML, CSS, JavaScript, Node.js, Express e Google Gemini.**

</div>

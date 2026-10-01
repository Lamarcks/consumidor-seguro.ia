# ⚖️ Consumidor Seguro.IA — Assistente Inteligente do Consumidor

### Inteligência Artificial aplicada à simplificação de informações sobre direitos do consumidor

Projeto acadêmico desenvolvido para explorar a aplicação de **Inteligência Artificial, desenvolvimento web e bases de conhecimento** na criação de uma experiência mais simples e acessível para consumidores.

A proposta é transformar situações comuns do dia a dia — como uma compra que não chegou, uma cobrança desconhecida ou um produto com defeito — em orientações claras sobre **por onde começar, quais informações reunir e quais canais oficiais podem ser procurados**.

> ⚠️ O projeto possui finalidade educacional e informativa. As respostas da IA não substituem orientação jurídica profissional nem representam uma decisão oficial sobre um caso concreto.

🌐 **WEB · JAVASCRIPT · NODE.JS · EXPRESS · GEMINI API · IA GENERATIVA · RAG · UX/UI · RESPONSIVIDADE**

---

## 📌 Sobre o projeto

Encontrar informações sobre direitos do consumidor nem sempre é simples.

Uma pessoa pode saber que existe algum direito relacionado ao seu problema, mas não saber:

- O que fazer primeiro;
- Quais documentos guardar;
- Como explicar o problema;
- Onde procurar ajuda;
- Qual órgão ou canal oficial pode ser utilizado.

O **Consumidor Seguro.IA** foi criado para experimentar uma abordagem diferente:

**em vez de começar por textos jurídicos extensos, começar pela situação vivenciada pelo consumidor.**

A aplicação apresenta situações comuns de consumo e permite que o usuário descreva seu problema para receber uma explicação em linguagem mais simples.

A base inicial do projeto utiliza informações estruturadas a partir de materiais do **Procon-SP**, enquanto a Inteligência Artificial é utilizada para interpretar a pergunta e apresentar as informações de maneira mais acessível.

---

## 🎯 Objetivo

O objetivo do projeto é estudar como a IA pode ser utilizada para melhorar a **acessibilidade da informação**, sem substituir as fontes oficiais.

A aplicação busca:

- Simplificar a linguagem;
- Organizar situações comuns de consumo;
- Ajudar o usuário a identificar o próximo passo;
- Indicar quais evidências podem ser importantes;
- Facilitar o acesso a informações oficiais;
- Experimentar integração entre frontend, backend e IA generativa.

---

## 🚀 Funcionalidades

### 🧭 Situações comuns

A interface apresenta situações que podem acontecer no cotidiano do consumidor, como:

- 📦 Compra pela internet;
- 🛠️ Produto com defeito;
- 💳 Cobrança não reconhecida;
- ↩️ Cancelamento de compra;
- 🔧 Serviço mal prestado;
- ✈️ Problemas com viagem;
- 🔐 Uso de dados pessoais;
- 💰 Divergência de preço;
- 📋 Produto diferente do anunciado.

Cada situação possui informações específicas e pode ser utilizada como ponto de partida para uma consulta à IA.

### 🤖 Assistente com Inteligência Artificial

O usuário pode descrever o que aconteceu utilizando linguagem natural.

Exemplo:

> "Comprei um produto pela internet e já passou o prazo de entrega, mas a empresa não responde."

A aplicação envia a consulta para o backend, que utiliza a **API do Google Gemini** para processar a solicitação considerando o contexto disponível na base do projeto.

### 📚 Base de conhecimento

O projeto possui uma base estruturada com informações relacionadas a situações de consumo.

Entre os temas atualmente contemplados estão:

- Produtos;
- Garantias;
- Compras pela internet;
- Direito de arrependimento;
- Cobranças;
- Cartões;
- Alimentos;
- Preços;
- Serviços;
- Veículos usados.

A base pode ser expandida conforme o projeto evolui.

### 🧾 Orientação sobre evidências

Além de explicar a situação, o projeto busca orientar o consumidor sobre informações que podem ser importantes para registrar o problema, como:

- Nota fiscal;
- Comprovante de pagamento;
- Contrato;
- Pedido de compra;
- Fotos;
- Prints;
- E-mails;
- Mensagens;
- Protocolos de atendimento.

### 🏛️ Canais oficiais

Quando necessário, o projeto pode orientar o usuário a procurar canais oficiais de atendimento e resolução de conflitos.

A intenção é fazer com que a aplicação funcione como um **ponto inicial de orientação**, e não como substituta dos órgãos oficiais.

---

## 🧠 Arquitetura do projeto

A aplicação está sendo estruturada em uma arquitetura separando a interface do usuário da comunicação com a API de Inteligência Artificial.

```text
┌──────────────────────┐
│      Usuário         │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│   Interface Web      │
│ HTML + CSS + JS      │
└──────────┬───────────┘
           │
           │ POST /api/consultar
           ▼
┌──────────────────────┐
│      Node.js         │
│       Express        │
│      server.js       │
└──────────┬───────────┘
           │
           │ API
           ▼
┌──────────────────────┐
│     Google Gemini    │
│   IA Generativa      │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Resposta processada  │
│      para o usuário  │
└──────────────────────┘
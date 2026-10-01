const SITUACOES = {
  "compra-online": {
    categoria: "Compras",
    titulo: "Compra pela internet",
    imagem: "assets/imagens/compra-online.jpg",
    resumo: "Você comprou pela internet, mas o pedido não chegou, chegou diferente do anunciado ou surgiu algum problema depois da compra?",
    detalhes: "Compras realizadas pela internet podem envolver atraso ou não entrega, produto diferente do anunciado, problemas no recebimento ou dificuldade para cancelar a contratação. O projeto orienta o consumidor a reunir documentos que ajudem a demonstrar o que foi contratado e o que aconteceu.",
    evidencias: "Guarde o anúncio, prints da oferta, confirmação do pedido, comprovante de pagamento, nota fiscal, mensagens trocadas com a empresa e protocolos de atendimento."
  },

  "produto-defeito": {
    categoria: "Produtos",
    titulo: "Produto com defeito",
    imagem: "assets/imagens/produto-defeito.jpg",
    resumo: "O produto apresentou defeito, parou de funcionar ou não corresponde ao que foi informado no momento da compra?",
    detalhes: "O problema pode envolver mau funcionamento, diferença entre o que foi anunciado e o que foi entregue ou outro vício relacionado ao produto. Registre o problema e mantenha os documentos da compra e do atendimento.",
    evidencias: "Guarde a nota fiscal, comprovante de compra, certificado de garantia quando houver, fotos ou vídeos do problema, ordem de serviço e protocolos de atendimento."
  },

  "cobranca": {
    categoria: "Financeiro",
    titulo: "Cobrança que você não reconhece",
    imagem: "assets/imagens/cobranca-nao-reconhecida.jpg",
    resumo: "Apareceu uma compra, serviço ou valor na sua fatura que você não reconhece?",
    detalhes: "Uma cobrança desconhecida deve ser conferida com atenção. Pode ser necessário identificar a origem do lançamento, verificar se existe algum contrato ou serviço relacionado e registrar a contestação junto à empresa ou instituição responsável.",
    evidencias: "Guarde a fatura, comprovantes, protocolos, mensagens, e-mails e qualquer documento utilizado para contestar a cobrança."
  },

  "cancelamento": {
    categoria: "Compras",
    titulo: "Quero cancelar uma compra",
    imagem: "assets/imagens/cancelar-compra.jpg",
    resumo: "Você realizou uma compra pela internet ou outro meio fora de uma loja física e agora deseja cancelar?",
    detalhes: "O cancelamento depende das circunstâncias da contratação. Para determinadas compras realizadas fora do estabelecimento comercial, existe previsão de direito de arrependimento. A situação concreta deve ser conferida de acordo com a contratação.",
    evidencias: "Guarde a confirmação da compra, data da contratação ou recebimento, comprovante de pagamento, pedido de cancelamento e protocolo fornecido pela empresa."
  },

  "servico": {
    categoria: "Serviços",
    titulo: "Serviço mal prestado",
    imagem: "assets/imagens/servico-mal-prestado.jpg",
    resumo: "Você contratou um serviço, mas ele foi executado de forma diferente do combinado, ficou incompleto ou apresentou problemas?",
    detalhes: "Problemas na prestação de serviços podem envolver execução inadequada, serviço incompleto ou descumprimento do que havia sido combinado. Dependendo do caso, podem existir alternativas previstas na legislação de consumo.",
    evidencias: "Guarde orçamento, contrato, ordem de serviço, recibos, comprovantes de pagamento, fotos do problema e protocolos de atendimento."
  },

  "viagem": {
    categoria: "Viagens",
    titulo: "Problema com viagem",
    imagem: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
    resumo: "Seu voo foi cancelado, houve alteração inesperada, problema com bagagem ou alguma dificuldade com um serviço contratado durante a viagem?",
    detalhes: "Problemas durante viagens podem envolver cancelamento, alterações de serviços, problemas com bagagem, hospedagem diferente da contratada ou descumprimento da oferta. A situação concreta precisa ser analisada de acordo com o serviço contratado e os documentos disponíveis.",
    evidencias: "Guarde passagens, reservas, comprovantes de pagamento, mensagens da empresa, cartões de embarque, protocolos e registros relacionados ao problema."
  },

  "dados": {
    categoria: "Dados e privacidade",
    titulo: "Uso dos meus dados pessoais",
    imagem: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85",
    resumo: "Uma empresa pediu seu CPF, telefone ou outros dados e você ficou em dúvida sobre a finalidade desse cadastro?",
    detalhes: "Durante uma relação de consumo, empresas podem solicitar informações pessoais. É importante observar a finalidade informada, as condições apresentadas e os cuidados adotados para proteger os dados.",
    evidencias: "Guarde termos apresentados pela empresa, telas de cadastro, mensagens, e-mails e informações sobre a finalidade para a qual os dados foram solicitados."
  },

  "preco": {
    categoria: "Compras",
    titulo: "Preço diferente no pagamento",
    imagem: "assets/imagens/preco-diferente.jpg",
    resumo: "O preço anunciado ou apresentado na prateleira era um, mas no caixa apareceu outro valor?",
    detalhes: "Diferenças entre o preço apresentado ao consumidor e o valor informado no momento do pagamento podem gerar dúvidas sobre a oferta. Registre onde o preço foi divulgado e confira se havia alguma condição específica.",
    evidencias: "Fotografe a etiqueta ou anúncio, guarde encartes ou prints da oferta e, se possível, tenha o comprovante da compra para demonstrar o valor efetivamente cobrado."
  },

  "produto-diferente": {
    categoria: "Compras",
    titulo: "Produto diferente do anunciado",
    imagem: "assets/imagens/produto-diferente.jpg",
    resumo: "O produto recebido não corresponde às características, quantidade ou modelo apresentados na oferta?",
    detalhes: "Quando o produto entregue é diferente daquele apresentado na oferta, é importante comparar exatamente o que foi anunciado com o que foi recebido e registrar a solicitação feita ao fornecedor.",
    evidencias: "Guarde o anúncio original, descrição do produto, fotos do item recebido, nota fiscal, pedido de compra, comprovante de entrega e protocolos de atendimento."
  }
};

function selecionarSituacao(chave) {
  const situacao = SITUACOES[chave];
  const campo = document.getElementById("userInput");

  if (!situacao || !campo) return;

  campo.value = `Gostaria de entender melhor esta situação de consumo: ${situacao.titulo}. ${situacao.resumo}`;
  campo.focus();

  document.getElementById("consulta")?.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

function abrirSituacao(chave) {
  const situacao = SITUACOES[chave];
  const modal = document.getElementById("situacaoModal");

  if (!situacao || !modal) return;

  document.getElementById("situacaoModalCategoria").textContent = situacao.categoria;
  document.getElementById("situacaoModalTitulo").textContent = situacao.titulo;
  document.getElementById("situacaoModalTexto").textContent = situacao.resumo;
  document.getElementById("situacaoModalDetalhes").textContent = situacao.detalhes;
  document.getElementById("situacaoModalEvidencias").textContent = situacao.evidencias;

  const imagem = document.getElementById("situacaoModalImagem");
  imagem.src = situacao.imagem;
  imagem.alt = situacao.titulo;

  modal.classList.add("aberto");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-aberto");

  document.getElementById("situacaoModalIA").onclick = () => {
    fecharSituacao();
    selecionarSituacao(chave);
  };
}

function fecharSituacao() {
  const modal = document.getElementById("situacaoModal");
  if (!modal) return;

  modal.classList.remove("aberto");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-aberto");
}

function ativarCard(event, chave) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    abrirSituacao(chave);
  }
}

function filtrarSituacoes(filtro) {
  document.querySelectorAll(".filtro-btn").forEach(botao => {
    botao.classList.toggle("ativo", botao.dataset.filtro === filtro);
  });

  document.querySelectorAll(".situacao-card").forEach(card => {
    const categoria = card.dataset.categoria;
    const mostrar = filtro === "todos" || categoria === filtro;
    card.classList.toggle("oculto", !mostrar);
  });
}

function respostaLocal(texto) {
  const normalizado = texto.toLowerCase();

  if (normalizado.includes("não chegou") || normalizado.includes("nao chegou") || normalizado.includes("pedido")) {
    return "Para uma compra pela internet que não chegou, vale reunir confirmação do pedido, comprovante de pagamento, anúncio, nota fiscal e protocolos de atendimento. A situação pode depender do que foi contratado e do que a empresa informou sobre a entrega.";
  }

  if (normalizado.includes("cobrança") || normalizado.includes("cobranca") || normalizado.includes("fatura")) {
    return "Se você não reconhece uma cobrança, confira a origem do lançamento e registre a contestação junto à empresa ou instituição responsável. Guarde a fatura, protocolos, mensagens e documentos usados na contestação.";
  }

  if (normalizado.includes("defeito") || normalizado.includes("quebrou") || normalizado.includes("parou")) {
    return "Se um produto apresentou defeito, reúna a nota fiscal, comprovante de compra, fotos ou vídeos do problema e os protocolos de atendimento. A análise dos prazos e das soluções depende das características do produto e da situação.";
  }

  if (normalizado.includes("cancelar") || normalizado.includes("desistir")) {
    return "Se você quer cancelar uma compra, o primeiro passo é identificar como e quando ela foi contratada. Em determinadas compras feitas fora do estabelecimento comercial, existe previsão de direito de arrependimento. Guarde o pedido de cancelamento e o protocolo.";
  }

  return "Entendi a situação. Para uma análise mais específica, descreva o que aconteceu, quando aconteceu, qual produto ou serviço estava envolvido e quais documentos ou protocolos você possui. Esta versão local está preparada para testar a interface enquanto a integração com a IA é configurada.";
}

async function enviarMensagem() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chatWindow");

  if (!input || !chat) return;

  const texto = input.value.trim();
  if (!texto) {
    input.focus();
    return;
  }

  chat.hidden = false;
  chat.innerHTML = "<strong>Analisando sua situação...</strong>";

  try {
    const response = await fetch("/api/consultar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mensagem: texto })
    });

    if (!response.ok) throw new Error("API indisponível");

    const data = await response.json();
    chat.innerHTML = data.resposta || respostaLocal(texto);
  } catch (error) {
    chat.innerHTML = `<strong>Modo de teste local</strong><br>${respostaLocal(texto)}`;
  }

  chat.scrollIntoView({ behavior: "smooth", block: "center" });
}

document.addEventListener("click", event => {
  const modal = document.getElementById("situacaoModal");
  if (modal && event.target === modal) {
    fecharSituacao();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    fecharSituacao();
  }
});

// banco_procon.js
// Base de conhecimento estruturada com dados oficiais da Fundação Procon-SP.

const BANCO_PROCON = {
    fonte: "Fundação PROCON-SP",
    contexto_geral: `
        ALIMENTOS E CONSUMO:
        - Aceitação de vale-refeição: O estabelecimento que aceita não pode restringir data, dia ou horário para o uso (Lei Estadual 15.060/2013).
        - Higiene e Inspeção: Balcões refrigerados não devem ter poças ou gelo excessivo. Produtos de origem animal devem conter o selo SIF (Serviço de Inspeção Federal).
        - Alimentos estragados/vencidos: O consumidor tem direito à substituição do produto por outro idêntico ou à restituição imediata da quantia paga corrigida (Art. 18 do CDC).
        - Danos à saúde: Se passar mal com alimento estragado, deve buscar atendimento médico, pedir relatório/laudo comprobatório e guardar as notas fiscais dos remédios para exigir reembolso (nexo causal).

        ASSUNTOS FINANCEIROS E BANCOS:
        - Atendimento Isonômico: É proibido diferenciar o atendimento ou horários de pagamento entre clientes e não clientes nos caixas. É proibido recusar recebimento em dinheiro de boletos comuns.
        - Venda Casada: É crime e prática abusiva exigir a contratação de seguros, títulos de capitalização ou cartões para abrir ou manter uma conta bancária (Art. 39, I do CDC).
        - Segurança e Fraudes: Os bancos têm responsabilidade objetiva pela segurança. Em caso de roubo, furto, extravio ou golpes com cartões e talões de cheque, o banco responde pelos prejuízos causados por falhas em seus sistemas.
        - Quitação Antecipada: É direito garantido o desconto proporcional dos juros e acréscimos ao antecipar parcelas de financiamento ou empréstimo (Art. 52, § 2º do CDC).

        CARTÃO DE CRÉDITO:
        - Cartão Não Solicitado: O envio de cartão de crédito sem pedido prévio é prática abusiva. Deve ser inutilizado, e cobranças indevidas geram direito a indenização.
        - Perda, Roubo ou Extravio: Deve ser comunicado imediatamente à central de atendimento e registrado Boletim de Ocorrência (BO). O banco responde pelo uso indevido por terceiros devido à fragilidade de segurança do sistema.
        - Compras Não Reconhecidas: Devem ser contestadas imediatamente junto à administradora do cartão para abertura de processo de rastreamento e estorno dos lançamentos.
        - Crédito Rotativo: Os juros incidem apenas sobre o saldo devedor remanescente e não sobre o total da fatura anterior. As taxas não são tabeladas e devem vir descritas claramente na fatura.

        PRODUTOS E GARANTIAS:
        - Vício e Defeito: Vício é o termo técnico do CDC para defeitos. Os fornecedores respondem solidariamente por avarias, quebras ou mau funcionamento de produtos.
        - Prazos de Garantia Legal: Independentemente de termo escrito, o consumidor tem 30 dias para reclamar de produtos não-duráveis (alimentos) e 90 dias para produtos duráveis (eletrônicos, carros, eletrodomésticos) (Art. 26 do CDC).
        - Vício Oculto: Para defeitos que aparecem apenas com o tempo de uso, o prazo de garantia (30 ou 90 dias) começa a contar a partir do momento em que o defeito fica evidente.
        - Prazo de Reparo (30 dias): A assistência técnica autorizada tem até 30 dias corridos para consertar o produto. Se o prazo estourar, o consumidor escolhe livremente entre: 1) Substituição do produto por outro novo; 2) Devolução imediata do valor pago corrigido; 3) Abatimento proporcional do preço (Art. 18, § 1º do CDC).
        - Produtos Essenciais: Geladeira, fogão, freezer, micro-ondas, alimentos e aparelhos médicos não precisam esperar os 30 dias na assistência. O consumidor pode exigir a troca ou reembolso imediato.
        - Direito de Arrependimento (7 dias): Para compras realizadas FORA do estabelecimento físico (Internet, Telefone, Catálogo), o consumidor pode desistir da compra em até 7 dias corridos após o recebimento, recebendo o dinheiro de volta integralmente (incluindo o frete) (Art. 49 do CDC).
        - Divergência de Preço: O consumidor tem direito a pagar o menor valor anunciado. No entanto, se o erro for óbvio e absurdo (ex: TV de R$ 5.000 por R$ 5,00), a boa-fé protege o lojista e a oferta não é obrigatória.
        - Veículos Usados: A garantia de 90 dias cobre TODAS as peças do carro usado comprado em concessionária, sendo ilegal a cláusula que limita a garantia "apenas para motor e câmbio" (Art. 24 do CDC).
    `,
    contingencia: `
        ORIENTAÇÃO DE CONTINGÊNCIA (Caso o problema não esteja especificado no FAQ do Procon):
        1. Explique educadamente que esse cenário específico não está mapeado no FAQ básico da Fundação Procon.
        2. Oriente o usuário com base nos princípios gerais do CDC: ele tem direito à informação clara, proteção contra práticas abusivas e reparação de danos.
        3. Instrua o usuário a reunir provas: guarde nota fiscal, cupons, contratos, ordens de serviço, protocolos de atendimento com data e hora e fotos do problema.
        4. Recomende os seguintes canais oficiais para registrar a reclamação ou buscar auxílio jurídico gratuito:
           - Consumidor.gov.br: Plataforma federal oficial para conciliação direta com empresas.
           - Procon da cidade do usuário: Para abertura de processo administrativo.
           - Juizado Especial Cível (JEC): Para causas de até 20 salários mínimos, não exige advogado e resolve disputas de consumo rapidamente.
           - Defensoria Pública do Estado: Caso o usuário não tenha condições de pagar um advogado particular.
    `
};

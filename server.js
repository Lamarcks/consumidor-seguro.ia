// server.js
import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import { BANCO_PROCON } from "./Nova pasta/banco_procon.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.error("ERRO: GEMINI_API_KEY não foi configurada no arquivo .env");
    process.exit(1);
}

const ai = new GoogleGenAI({
    apiKey
});

app.use(express.json({ limit: "100kb" }));
app.use(express.static(__dirname));

app.post("/api/chat", async (req, res) => {
    try {
        const { mensagem } = req.body;

        if (!mensagem || typeof mensagem !== "string") {
            return res.status(400).json({
                erro: "Mensagem inválida."
            });
        }

        const prompt = `
Você é o assistente de orientação ao consumidor do projeto Consumidor Seguro.IA.

Sua função é explicar possíveis direitos do consumidor de forma simples,
clara e responsável.

REGRAS IMPORTANTES:
- Não se apresente como advogado.
- Não dê certeza jurídica quando os fatos forem insuficientes.
- Use expressões como "pode existir", "em princípio", "depende do caso"
  quando necessário.
- Não invente leis, artigos, prazos ou direitos.
- Priorize o conteúdo da base fornecida abaixo.
- Se a base não tiver informação suficiente, deixe isso claro.
- Não invente uma fonte.
- Oriente o usuário a guardar documentos e provas.
- Quando apropriado, indique canais oficiais de reclamação.
- A resposta deve ser prática e fácil de entender.

BASE DE CONHECIMENTO DO PROCON:
${BANCO_PROCON.contexto_geral}

ORIENTAÇÃO DE CONTINGÊNCIA:
${BANCO_PROCON.contingencia}

PERGUNTA DO USUÁRIO:
${mensagem}

Responda seguindo exatamente esta estrutura:

🔎 O que pode estar acontecendo
Explique o problema em linguagem simples.

⚖️ Possível direito envolvido
Explique qual regra ou princípio pode se aplicar.
Se não houver informação suficiente, diga isso.

📋 O que fazer agora
Liste ações práticas em ordem.

📸 O que guardar como prova
Liste documentos, fotos, protocolos ou outras evidências relevantes.

🏛️ Onde buscar ajuda
Indique canais oficiais apropriados quando fizer sentido.

⚠️ Atenção
Informe limitações, exceções ou informações que dependem do caso.

📚 Fonte
Informe a fonte utilizada pela base de conhecimento.
`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
        });

        const texto = response.text;

        if (!texto) {
            throw new Error("A API não retornou texto.");
        }

        res.json({
            resposta: texto
        });

    } catch (error) {
        console.error("Erro na API:", error);

        res.status(500).json({
            erro: "Não foi possível consultar a inteligência artificial.",
            detalhe: process.env.NODE_ENV === "development"
                ? error.message
                : undefined
        });
    }
});

app.listen(PORT, () => {
    console.log(`\nConsumidor Seguro.IA`);
    console.log(`Servidor: http://localhost:${PORT}`);
});
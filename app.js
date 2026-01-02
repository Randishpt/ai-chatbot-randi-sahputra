const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/chat', async (req, res) => {
    const { message } = req.body;
    try {
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: "Kamu adalah asisten AI yang ramah, hangat, dan sangat membantu. Gaya bicaramu santai namun tetap sopan (profesional muda). Kamu harus selalu menjawab dalam Bahasa Indonesia. Gunakan emoji sesekali untuk membuat percakapan lebih hidup dan menyenangkan. Jangan ragu untuk memberikan semangat atau sapaan hangat."
        });
        const result = await model.generateContent(message);
        const response = await result.response;
        res.json({ reply: response.text() });
    } catch (error) {
        console.error("AI Error:", error);
        if (error.response) {
            console.error("AI Error Response:", JSON.stringify(error.response, null, 2));
        }
        res.status(500).json({ reply: "Maaf, sistem AI sedang sibuk. (Error: " + error.message + ")" });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Chatbot running on http://localhost:${PORT}`));

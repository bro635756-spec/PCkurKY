const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/chat', async (req, res) => {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "model": "google/gemini-2.0-flash-001",
            "messages": req.body.messages
        })
    });
    const data = await response.json();
    res.json(data);
});

app.listen(process.env.PORT || 3000);

const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.post("/submit", async (req, res) => {
    try {
        const response = await fetch(`${process.env.BACKEND_URL || "http://localhost:5000"}/submit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();

        res.send(`
            <h1>Response from Flask Backend</h1>
            <p>${data.message}</p>
            <a href="/">Go Back</a>
        `);

    } catch (error) {
        console.error(error);
        res.status(500).send("Could not connect to Flask backend.");
    }
});

app.listen(PORT, () => {
    console.log(`Frontend running on port ${PORT}`);
});
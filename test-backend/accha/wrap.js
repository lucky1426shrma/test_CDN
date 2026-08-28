const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Backend deployment is working!",
        status: "success"
    });
});

app.get("/api/users", (req, res) => {
    res.json({
        users: [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" },
            { id: 3, name: "Charlie" }
        ]
    });
});

app.get("/api/users/:id", (req, res) => {
    res.json({
        message: "User fetched successfully",
        userId: req.params.id
    });
});

app.post("/api/echo", (req, res) => {
    res.json({
        message: "Request received",
        data: req.body
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({ status: "healthy" });
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});

const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server is running!");
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
    console.log("test");
})
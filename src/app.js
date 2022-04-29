const express = require("express");
const app = express();

// GET Path
app.get("/test", (_req, res) => {
    res.status(200).send("Hello world!");
});

module.exports = app;

const http = require("http");

// Port Environment variable
const PORT = process.env.PORT || 5000;

// Creating the node server
const SERVER = http.createServer();

// Firing up the server on selected port
SERVER.listen(PORT);

SERVER.on("listening", () => {
    console.log("Node js Server is running on port", PORT);
});

// Callback function for checking connecting or error
SERVER.on("error", error => {
    throw new Error(`[Server]::ERROR:${error.message}`);
});
// const http = require('http');

// console.log("Http...:"+http);

// const hostname = '127.0.0.1';
// console.log("Hostname...:"+hostname);
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('content-Type', 'text/plain');
//     res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

//Importa o módulo espress
const express = require('express');

//Cria uma aplicação express
const app = express();

//Define a porta que o servidor irá escutar
const port = 3000;

//Define uma rota para a raiz ('/') que responde com 'Hello, word!'
app.get('/', (req, res) => {
    res.send('Se leu, tá funcionando! :D');
});

// Inicia o servidor e escuta na porta definida
app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});

const express = require('express');
const app = express();
const port = 3000; // Porta do servidor

// Configuração do EJS
app.set('view engine', 'ejs');

// Servir arquivos estáticos (CSS, imagens, etc.)
app.use(express.static(__dirname + '/public'));

// Rotas
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/campo', (req, res) => {
  res.render('campo');
});

app.get('/cidade', (req, res) => {
  res.render('cidade');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

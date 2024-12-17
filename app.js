const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
const dotenv = require('dotenv');
const photoRoutes = require('./src/routes/photoRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do Handlebars
app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'layout',
  allowProtoPropertiesByDefault: true,
  layoutsDir: path.join(__dirname, 'src', 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'src', 'views', 'partials')
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src', 'views'));


// Middleware para arquivos estáticos
app.use(express.static(path.join(__dirname, 'src', 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'src', 'public', 'uploads')));


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));


// Redirecionar a rota raiz para '/photos'
app.get('/', (req, res) => {
  res.redirect('/photos');
});


// Rotas
app.use('/photos', photoRoutes);


// Inicializar o servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

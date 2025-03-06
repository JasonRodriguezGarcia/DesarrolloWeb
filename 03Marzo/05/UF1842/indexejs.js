import express from 'express';
import path from 'path';

const app = express();

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const data = { title: 'Home Page', message: 'Welcome to the Home Page!' };
    res.render('index', data);
  });

app.get('/ejemplo1', (req, res) => {
    const data = { titulo: 'Home peich titulo'};
    res.render('ejemplo1', data);
});
    
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
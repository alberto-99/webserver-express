const express = require('express')
const app = express()
const hbs = require('hbs');

require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
// Expres hbS engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err) {});



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'alberto lucio'

    });

});

app.get('/about', (req, res) => {

    res.render('about');

});



app.listen(port, () => {
    console.log(`Escuchando peticiones del puerto ${port}`);
})
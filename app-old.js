const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'aplication/json' });

        let salida = {
            nombre: 'Alberto',
            edad: 33,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('escuchando el puerto 8080');
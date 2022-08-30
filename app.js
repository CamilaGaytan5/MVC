const express = require('express');
const path = require('path');

const app = express();

const publicPatch = path.resolve(__dirname, './public');
app.use( express.static(publicPatch) ); 
//con esta linea de decimos a express que queremos tener a la carpeta public como un archivo de recursos estáticos, para que lo podamos consumir de manera sencilla

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json(
        {
        mensaje: 'hola'
        }
)
})

app.listen(8000, () => {
    console.log('Servidor escuchando en el puerto 8000')
}) 

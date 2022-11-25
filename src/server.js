const express = require("express");
const {Router} = require("express")

const app = express();

const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const server = app.listen(PORT, () => console.log("Servidor escuchando en puerto 8080"));

const routerProductos = Router();
const routerCarrito = Router();

routerProductos.get('/:id', (req,res) =>{
    const id = req.params.id;
    
})

routerProductos.post('/', (req, res) => {
    const producto = req.body;
    if(body == null)
        return {error: "Producto sin datos"};

})

routerProductos.put('/:id', (req,res) =>{
    const id = req.params.id;
})

routerProductos.delete('/:id', (req, res) => {
    const id = req.params.id;
})

app.use('/productos', routerProductos);
app.use('/carrito', routerCarrito);


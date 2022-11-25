const fs = require("fs");

class Contenedor{
    constructor(filename)
    {
        this.filename = filename
    }

    async getAll()
    {
        try {
            const contenido = await fs.promises.readFile(this.filename, "utf-8");
            if(contenido.length != 0)
            {
                const productos = JSON.parse(contenido);
                //console.log(productos);
                return productos;
            }
            return {error: "No hay contenido en el archivo"}
        } catch (error) {
            return {error: "Ha ocurido un error al obtener el contenido del archivo."}
        }
    }

    /*async save()
    {
        try {
            const contenido = await fs.promises.readFile(this.filename);
        } catch (error) {
            
        }
    }*/



}

class  Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre=nombre
        this.apellido= apellido
        this.libros= libros
        this.mascotas= mascotas

    }
    
    getFullName(){
        console.log(`Mi nombre comopleto es: ${this.nombre} ${this.apellido}`);
    }

    addPets(mascota){
        this.mascotas.push(mascota)
        console.log(this.mascotas);
    }

    countPets(){
        console.log(this.mascotas.length);
    }

    addBook(titulo, autor){
        this.libros.push({titulo: titulo, autor:autor})
        console.log(this.libros);
    }

    getBookNames(){
        const titulos = this.libros.map( libro => {
            return libro.titulo
        } )
        console.log(titulos);
    }
}

const usuario1 = new Usuario("Valentin", "Iglesias", [{titulo:"libro 1", autor:"autor 1"}], ["Perro", "Gato"])

usuario1.getFullName()
usuario1.addPets("Tortuga")
usuario1.countPets()
usuario1.addBook("libro2", "autor2")
usuario1.getBookNames()

// ------------------------------Ejercicio 2---------------------------------

const fs = require("fs");

const archivo = "productos.txt";


class Contenedor {
    
    constructor( id, nombre, precio, url) {
            this.id = id,
            this.nombre = nombre,
            this.precio = precio,
            this.url = url
            
    }
    
    async save() {
        

        try {
            await fs.promises.appendFile("./productos2.txt", `
        {
            "id":${this.id}},
            "nombre":"${this.nombre}", 
            "precio":${this.precio},
            "url":"${this.url}"`) 

            console.log(`Producto Guardado, su ID es ${this.id}`)
        } catch (err) {
            console.log(err)
        }
    }

    async getById(num) {
        try {
            
            if(num == this.id){
                const item = {
                id:this.id,

                nombre: this.nombre, 

                precio:this.precio,

                url:this.url, 
                }
                return console.log("Producto:", item)
            }else {
                return console.log(null)
            }
        } catch (error) {
            return console.log(error)
            
        }
    }
    
    async getAll(){
        try {
            const productos = await fs.promises.readFile("./productos2.txt", "utf-8" )
            const items= [productos]
            console.log(items)

        } catch (err) {
            return console.log(err)
        }

    }


}

let producto_1 = new Contenedor (1,"Procesador", 25000, "/intel.jpg");
let producto_2 = new Contenedor (2, "Mother", 10000, "/mother.jpg");
let producto_3 = new Contenedor (3, "Placa de video", 250000, "/placadevideo.jpg");

producto_1.save()
producto_2.save()
producto_1.getById(1)
producto_3.getById(3)
producto_3.getAll()
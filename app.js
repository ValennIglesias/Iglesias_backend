
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
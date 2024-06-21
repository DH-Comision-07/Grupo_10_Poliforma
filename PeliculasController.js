class PeliculasController {
    constructor() {
        this.peliculas = [];
        this.currentId = 1;
    }

    // Crear una nueva película
    crearPelicula(req, res) {
        const { titulo, director, año, genero } = req.body;

        if (!titulo || !director || !año || !genero) {
            return res.status(400).json({ mensaje: 'Todos los campos son obligatorios.' });
        }

        const nuevaPelicula = {
            id: this.currentId++,
            titulo,
            director,
            año,
            genero
        };

        this.peliculas.push(nuevaPelicula);
        return res.status(201).json(nuevaPelicula);
    }

    // Obtener todas las películas
    obtenerPeliculas(req, res) {
        return res.status(200).json(this.peliculas);
    }

    // Obtener una película por ID
    obtenerPeliculaPorId(req, res) {
        const { id } = req.params;
        const pelicula = this.peliculas.find(p => p.id === parseInt(id));

        if (!pelicula) {
            return res.status(404).json({ mensaje: 'Película no encontrada.' });
        }

        return res.status(200).json(pelicula);
    }

    // Actualizar una película por ID
    actualizarPelicula(req, res) {
        const { id } = req.params;
        const { titulo, director, año, genero } = req.body;
        const pelicula = this.peliculas.find(p => p.id === parseInt(id));

        if (!pelicula) {
            return res.status(404).json({ mensaje: 'Película no encontrada.' });
        }

        pelicula.titulo = titulo || pelicula.titulo;
        pelicula.director = director || pelicula.director;
        pelicula.año = año || pelicula.año;
        pelicula.genero = genero || pelicula.genero;

        return res.status(200).json(pelicula);
    }

    // Eliminar una película por ID
    eliminarPelicula(req, res) {
        const { id } = req.params;
        const index = this.peliculas.findIndex(p => p.id === parseInt(id));

        if (index === -1) {
            return res.status(404).json({ mensaje: 'Película no encontrada.' });
        }

        this.peliculas.splice(index, 1);
        return res.status(204).send();
    }
}

module.exports = new PeliculasController();

// IIFE para el Patrón Módulo
const MultimediaModule = (function() {
  // Función privada para mostrar el video
    const mostrarVideo = function(url, id) {
        const iframe = document.getElementById(id);
        iframe.setAttribute('src', url);
    };

    // Función pública para llamar a la función privada
    const crearReproductor = function(url, id) {
        mostrarVideo(url, id);
    };

    return {
        crearReproductor: crearReproductor
    };
})();

// Clase padre Contenido
class Contenido {
    constructor(url) {
        let _url = url; // Closure para proteger la propiedad url

        this.getUrl = function() {
            return _url;
        };
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

// Clase hija Reproductor
class Reproductor extends Contenido {
    constructor(url, id) {
        super(url);
        this._id = id;
    }

    playMultimedia() {
        MultimediaModule.crearReproductor(this.getUrl(), this._id);
    }

    setInicio(tiempo) {
        const nuevaUrl = `${this.getUrl()}?start=${tiempo}`;
        const iframe = document.getElementById(this._id);
        iframe.setAttribute('src', nuevaUrl);
    }
}

// Instancias de la clase Reproductor
const reproductorMusica = new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY', 'musica');
const reproductorPelicula = new Reproductor('https://www.youtube.com/embed/TKmGU77INaM', 'peliculas');
const reproductorSerie = new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY', 'series');

// Invocar al método playMultimedia para mostrar los videos
reproductorMusica.playMultimedia();
reproductorPelicula.playMultimedia();
reproductorSerie.playMultimedia();

// Utilizar el método setInicio para modificar el tiempo de inicio
reproductorPelicula.setInicio(120); // Inicio de la película a los 2 minutos
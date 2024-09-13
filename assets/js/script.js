const moduloVideo = (() => {
    function insertarVideo(url, id){
        const iframe = document.getElementById(id);
        iframe.setAttribute('src', url);
    }

    return {
        cargarVideo: function(url, id){
            insertarVideo(url, id);
        }
    }
})();

class Multimedia {
    constructor(url){
        this._url = url;
    }
    get url(){
        return this._url;
    }
    setInicio(){
        return "Este método es para realizar un cambio en la URL del video";
    }
}


class Reproductor extends Multimedia{
    constructor(url, id){
        super(url);
        this.id = id;
    }
    setInicio(tiempo){
        let tiempoUrl = `${this._url}?start=${tiempo}`;
        document.getElementById(this.id).setAttribute('src', tiempoUrl);
    }
    playMultimedia(){
        moduloVideo.cargarVideo(this._url, this.id);
    }
}

const reproductorMusica = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", "musica");
const reproductorPelicula = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", "peliculas");
const reproductorSerie = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", "series");

reproductorMusica.playMultimedia();
reproductorPelicula.playMultimedia();
reproductorSerie.playMultimedia();

reproductorMusica.setInicio(30);
reproductorPelicula.setInicio(60);
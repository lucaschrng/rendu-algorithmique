class Personnage {
    constructor(
        name,
        mentalHealth
    ) {
        this.name = name;
        this.mentalHealth = mentalHealth;
    }
}

class Playlist {
    constructor() {
        this.songs = [];
    };

    addSong(artistName, songTitle) {
        this.songs.push([artistName, songTitle]);
    }

    playSong() {
        let songSelect = Math.floor(Math.random() * this.songs.length);
        return this.songs[songSelect][0] + ' - ' + this.songs[songSelect][1];
    }
}

class Trajet {
    constructor() {
        this.redLights = 30;
        this.taxiChange = 0;
    }
}

// initialisation du personnage
let personnage = new Personnage('Lucas', 10);

// initialisation de la playlist
let playlist = new Playlist();
playlist.addSong('Wejdene', 'Anissa');
playlist.addSong('Hello', 'Adele');
playlist.addSong('Beat It', 'Mickael Jackson');
playlist.addSong('Halo', 'Beyonce');
playlist.addSong('7 rings', 'Ariana Grande');

// initialisation du trajet
let trajet = new Trajet();

// simulation du trajet
while (trajet.redLights > 0) {

    let currentlyPlaying = playlist.playSong();
    console.log('À l\'écoute :', currentlyPlaying);
    if (currentlyPlaying === 'Wejdene - Anissa') {
        personnage.mentalHealth--;
        trajet.taxiChange++;
    }

    trajet.redLights--;
    console.log('Nombre de feux restants :', trajet.redLights, '\n');

    if (personnage.mentalHealth === 0) {
        trajet.redLights = 0;
    }
}

// resultat du trajet
if (personnage.mentalHealth > 0) {
    console.log(personnage.name, 'est bien arrivé à destination et a dû changé', trajet.taxiChange, 'fois de taxi.');
} else {
    console.log('Explosion !');
}
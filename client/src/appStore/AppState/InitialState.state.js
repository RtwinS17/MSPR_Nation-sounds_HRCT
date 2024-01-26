const initialState = {
    Alertes : [{
        idAlerte: 0,
        title: "",
        type: "",
        texte: "",
        createAt: "",
        idUser: 0,
        actif: false, // !
    },],

    Commentaires :[{
        idCommentaire: 0,
        idUser: 0,
        idConcert: 0,
        texte: "",
        note: 0,
        date: "",
        createAt: "",
        reply: [Map(id, comments)] // ! Map des commentaires en réponse au commentaire
    },],

    Concerts: [{
        idConcert: 0,
        groupe: "",
        horaire: "",
        scene: "",
        description: "",
        lieu: "",
        genre: "",
        partenaire: [],
    },],

    Lieux: [{
        idLieu: 0,
        alias: "", // ! 
        localisation: {
            latitude: 0,
            longitutude: 0,
        },
        concerts: [idConcert],
        genre: [],
        POIS: [],
    },],

    Genres: [{
        idGenre: 0,
        name: "",
        concerts : [idConcert,] // !
    },],

    Partenaires: [{
        idPartenaire: 0,
        categorie: [],
        name: "",
        logo: "",
        URL: "",
    },],

    POIs: [{
        idPOI: 0,
        name: "",
        type: "",
        idLieu: 0,
    },],

    Preferences: [{
        idPreference: 0,
        idUser: "",
        theme: "",
        genre: [],
        notifications: [],
    },],

    Scenes: [{
        idScene: 0,
        name: "",
        type: "",
        idLieu: 0,
    },],

    Users: [{
        idUser: 0,
        name: "",
        email: "",
        password: "",
        token: "",
        commentaires: [],
    },],
}
// Shared song data for Catarsis Musical
// This data is used across multiple pages including the songbook and voting system

const SONGS = [
    {
        id: 4,
        title: "19 días y 500 noches",
        artist: "Joaquín Sabina 🇪🇸",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 5,
        title: "40 y 20",
        artist: "Jose Jose 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 6,
        title: "A gritos de esperanza",
        artist: "Alex Ubago 🇪🇸",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 7,
        title: "Adios amor",
        artist: "Christian Nodal 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 9,
        title: "Adiós amor / Oye mujer",
        artist: "Ke Personajes 🇦🇷",
        vibe: "cumbias",
        genre: "Tropical"
    },
    {
        id: 11,
        title: "Adónde vas amor",
        artist: "Dyango 🇪🇸",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 12,
        title: "Adoro",
        artist: "Bronco 🇲🇽",
        vibe: "cumbias",
        genre: "Tropical"
    },
    {
        id: 13,
        title: "Afuera",
        artist: "Caifanes 🇲🇽",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 14,
        title: "Agua",
        artist: "Jarabe de Palo 🇪🇸",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 15,
        title: "Ahora",
        artist: "Alberto Plaza 🇨🇱",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 17,
        title: "Aint No Sunshine",
        artist: "Bill Withers 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 18,
        title: "Aire",
        artist: "Los Cafres 🇦🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 19,
        title: "Aire de Jah",
        artist: "Gondwana 🇨🇱",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 20,
        title: "Aleluya",
        artist: "Jose Feliciano 🇵🇷",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 22,
        title: "Algo de mí",
        artist: "Camilo Sesto 🇪🇸",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 23,
        title: "Alma, corazón y vida",
        artist: "Los Panchos 🇲🇽",
        vibe: "musica-de-trio",
        genre: "Romántica"
    },
    {
        id: 24,
        title: "Almohada",
        artist: "Jose Jose 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 25,
        title: "Amada amante",
        artist: "Roberto Carlos 🇧🇷",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 26,
        title: "Amar y querer",
        artist: "Jose Jose 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 27,
        title: "Amarte a la antigua",
        artist: "Pedro Fernandez 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 29,
        title: "Amarte es un placer",
        artist: "Luis Miguel 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 30,
        title: "Amiga",
        artist: "Miguel Bose 🇪🇸",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 31,
        title: "Amiga mía",
        artist: "Alejandro Sanz 🇪🇸",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 32,
        title: "Amigos",
        artist: "Eterna Soledad 🇦🇷",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 33,
        title: "Amor del bueno",
        artist: "Reyli Barba 🇲🇽",
        vibe: "extras-acusticos",
        genre: "General"
    },
    {
        id: 34,
        title: "Amor del bueno",
        artist: "Reily 🇲🇽",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 35,
        title: "Amores lejanos",
        artist: "Enanitos Verdes 🇦🇷",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 36,
        title: "Angel",
        artist: "Elefante 🇲🇽",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 37,
        title: "Angel",
        artist: "Robbie Williams 🇬🇧",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 38,
        title: "Anónimos",
        artist: "Los Pericos 🇦🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 39,
        title: "Apache",
        artist: "The Shadows 🇬🇧",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 41,
        title: "Aquellas pequeñas cosas",
        artist: "Joan Manuel Serrat 🇪🇸",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 43,
        title: "Árbol sin hojas",
        artist: "Dread Mar I 🇦🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 44,
        title: "Armonía de amor",
        artist: "Gondwana 🇨🇱",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 46,
        title: "Así es la vida",
        artist: "Elefante 🇲🇽",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 48,
        title: "Así fue",
        artist: "Dread Mar I 🇦🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 49,
        title: "Aunque no sea contigo",
        artist: "Enrique Bunbury 🇪🇸",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 50,
        title: "Aunque no te pueda ver",
        artist: "Alex Ubago 🇪🇸",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 51,
        title: "Aventurera",
        artist: "Alberto Plaza 🇨🇱",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 52,
        title: "Ay, qué noche tan preciosa",
        artist: "Pedro Infante 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 53,
        title: "Azul",
        artist: "Tango India 🇨🇷",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 54,
        title: "Babe Im Gonna Leave You",
        artist: "Led Zeppelin 🇬🇧",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 55,
        title: "Besame la boca",
        artist: "Ricardo Montaner 🇻🇪",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 57,
        title: "Besándote",
        artist: "Auténticos Decadentes 🇦🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 58,
        title: "Bittersweet Symphony",
        artist: "The Verve 🇬🇧",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 59,
        title: "Black",
        artist: "Pearl Jam 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 60,
        title: "Black Magic Woman",
        artist: "Santana 🇲🇽",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 61,
        title: "Bonita",
        artist: "Los Choclok 🇲🇽",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 62,
        title: "Brazos de sol",
        artist: "Alejandro Filio 🇲🇽",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 64,
        title: "Caballero",
        artist: "Alejandro Fernández 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 65,
        title: "California",
        artist: "Phantom Planet 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 66,
        title: "Cama y mesa",
        artist: "Roberto Carlos 🇧🇷",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 67,
        title: "Caminemos",
        artist: "Los Panchos 🇲🇽",
        vibe: "musica-de-trio",
        genre: "Romántica"
    },
    {
        id: 68,
        title: "Cancion para Annie",
        artist: "John Denver 🇺🇸",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 71,
        title: "Canción para mi muerte",
        artist: "Sui Generis 🇦🇷",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 72,
        title: "Canta Corazón",
        artist: "Alejandro Fernández 🇲🇽",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 73,
        title: "Caraluna",
        artist: "Bacilos 🇺🇸",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 74,
        title: "Cartas amarillas",
        artist: "Nino Bravo 🇪🇸",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 76,
        title: "Chao cariño chao",
        artist: "Abracadabra 🇦🇷",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 77,
        title: "Como la flor",
        artist: "Selena 🇺🇸",
        vibe: "cumbias",
        genre: "Tropical"
    },
    {
        id: 78,
        title: "Como la flor",
        artist: "Selena / Ke Personajes 🇺🇸 / 🇦🇷",
        vibe: "cumbias",
        genre: "Tropical"
    },
    {
        id: 79,
        title: "Cómo te voy a olvidar",
        artist: "Los Ángeles Azules 🇲🇽",
        vibe: "cumbias",
        genre: "Tropical"
    },
    {
        id: 80,
        title: "Como yo nadie te ha amado",
        artist: "Bon Jovi 🇺🇸",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 81,
        title: "Confesiones de invierno",
        artist: "Sui Generis 🇦🇷",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 83,
        title: "Conociéndote",
        artist: "César “Banana” Pueyrredón 🇦🇷",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 85,
        title: "Corazón",
        artist: "Auténticos Decadentes 🇦🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 87,
        title: "Corazón partío",
        artist: "Alejandro Sanz 🇪🇸",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 88,
        title: "Creep",
        artist: "Radiohead 🇬🇧",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 89,
        title: "Creep",
        artist: "Stone Temple Pilots 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 90,
        title: "Cuando seas grande",
        artist: "Miguel Mateos 🇦🇷",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 91,
        title: "Cuántas noches",
        artist: "El parque 🇨🇷",
        vibe: "tradicional-costarricense",
        genre: "Tradicional"
    },
    {
        id: 92,
        title: "Culpable o no",
        artist: "Luis Miguel 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 93,
        title: "De Antes",
        artist: "Cultura Profética 🇵🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 94,
        title: "De la cana se hace el guaro",
        artist: "Tradicional Costarricense 🇨🇷",
        vibe: "extras-acusticos",
        genre: "General"
    },
    {
        id: 95,
        title: "De la caña se hace el guaro",
        artist: "Jose Capmany 🇨🇷",
        vibe: "tradicional-costarricense",
        genre: "Tradicional"
    },
    {
        id: 97,
        title: "De la noche a la mañana",
        artist: "Elefante 🇲🇽",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 98,
        title: "De lo profundo",
        artist: "George Hernández 🇨🇷",
        vibe: "serenatas",
        genre: "Romántica"
    },
    {
        id: 99,
        title: "De mí enamórate",
        artist: "Tito Nieves 🇵🇷",
        vibe: "salsa",
        genre: "Tropical"
    },
    {
        id: 101,
        title: "De música ligera",
        artist: "Soda Stereo 🇦🇷",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 102,
        title: "De qué manera te olvido",
        artist: "Vicente Fernández 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 103,
        title: "Debes buscarte un nuevo amor",
        artist: "Tranzas 🇪🇨",
        vibe: "tradicional-costarricense",
        genre: "Tradicional"
    },
    {
        id: 105,
        title: "Derroche",
        artist: "Ana Belén 🇪🇸",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 107,
        title: "Después de ti",
        artist: "José Feliciano 🇵🇷",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 108,
        title: "Detalles",
        artist: "Roberto Carlos 🇧🇷",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 109,
        title: "Devuélveme a mi chica",
        artist: "Hombres G 🇪🇸",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 110,
        title: "Dile a tu orgullo",
        artist: "Grupo Firme 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 112,
        title: "Dime qué puedo hacer sin ti",
        artist: "Suite Doble 🇨🇷",
        vibe: "tradicional-costarricense",
        genre: "Tradicional"
    },
    {
        id: 113,
        title: "Directo al corazón",
        artist: "Pepe Aguilar 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 115,
        title: "Diseñame",
        artist: "Joan Sebastian 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 116,
        title: "Down down down",
        artist: "The expendables 🇺🇸",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 117,
        title: "Dream On",
        artist: "Aerosmith 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 118,
        title: "Drive",
        artist: "Incubus 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 119,
        title: "Dulce pecado",
        artist: "Jessi Uribe 🇨🇴",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 120,
        title: "El adiós",
        artist: "Caos 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 121,
        title: "El amor de mi vida",
        artist: "Camilo Sesto 🇪🇸",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 122,
        title: "El cantante",
        artist: "Héctor Lavoe (Rubén Blades) 🇵🇷 / 🇵🇦",
        vibe: "salsa",
        genre: "Tropical"
    },
    {
        id: 123,
        title: "El color de tus ojos",
        artist: "Banda MS 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 124,
        title: "El duelo",
        artist: "La Ley 🇨🇱",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 125,
        title: "El gato que está triste y azul",
        artist: "Roberto Carlos 🇧🇷",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 126,
        title: "El gran varón",
        artist: "Willie Colón 🇵🇷",
        vibe: "salsa",
        genre: "Tropical"
    },
    {
        id: 127,
        title: "El hombre del piano",
        artist: "Billy Joel (Ana Belén) 🇺🇸 / 🇪🇸",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 128,
        title: "El Hombre del Piano",
        artist: "Billy Joel 🇺🇸",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 129,
        title: "El lado oscuro",
        artist: "Jarabe de Palo 🇪🇸",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 131,
        title: "El listón de tu pelo",
        artist: "Los Ángeles Azules 🇲🇽",
        vibe: "cumbias",
        genre: "Tropical"
    },
    {
        id: 132,
        title: "El Rey Tiburon",
        artist: "Proyecto Uno 🇩🇴",
        vibe: "charangas",
        genre: "General"
    },
    {
        id: 133,
        title: "El Rey Tiburón",
        artist: "Mana 🇲🇽",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 134,
        title: "El sonido del silencio",
        artist: "Alex Campos 🇨🇴",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 135,
        title: "El último beso",
        artist: "Los Apson 🇲🇽",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 136,
        title: "Ella",
        artist: "Almirante 🇵🇦",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 137,
        title: "Ella",
        artist: "Gaviota 🇨🇷",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 138,
        title: "Ella y él",
        artist: "José Luis Perales 🇪🇸",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 140,
        title: "En algún lugar",
        artist: "Duncan Dhu 🇪🇸",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 141,
        title: "En el aire",
        artist: "Nonpalidece 🇦🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 142,
        title: "En el prado y en el mar",
        artist: "Dyango 🇪🇸",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 143,
        title: "Enganada",
        artist: "Los Tres Reyes 🇲🇽",
        vibe: "musica-de-trio",
        genre: "Romántica"
    },
    {
        id: 145,
        title: "Englishman in New York",
        artist: "Sting 🇬🇧",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 146,
        title: "Entra en mi vida",
        artist: "Sin Bandera 🇲🇽 / 🇦🇷",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 147,
        title: "Entre dos tierras",
        artist: "Héroes del Silencio 🇪🇸",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 149,
        title: "Eres",
        artist: "Café Tacuba 🇲🇽",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 150,
        title: "Eres tú",
        artist: "Mocedades 🇪🇸",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 151,
        title: "Escandalo",
        artist: "Marc Anthony 🇵🇷",
        vibe: "boleros",
        genre: "Romántica"
    },
    {
        id: 153,
        title: "Esclavo y amo",
        artist: "Pepe Aguilar 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 155,
        title: "Eso y más",
        artist: "Joan Sebastian 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 156,
        title: "Esperare",
        artist: "Tango India 🇨🇷",
        vibe: "tradicional-costarricense",
        genre: "Tradicional"
    },
    {
        id: 158,
        title: "Este es un nuevo día",
        artist: "Facundo Cabral 🇦🇷",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 159,
        title: "Eterna soledad",
        artist: "Enanitos Verdes 🇦🇷",
        vibe: "extras-acusticos",
        genre: "General"
    },
    {
        id: 160,
        title: "Every Breath You Take",
        artist: "The Police 🇬🇧",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 161,
        title: "Fall to Pieces",
        artist: "Velvet Revolver 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 162,
        title: "Felicidad",
        artist: "Gondwana 🇨🇱",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 163,
        title: "Fix You",
        artist: "Coldplay 🇬🇧",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 165,
        title: "Flaca",
        artist: "Andrés Calamaro 🇦🇷",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 167,
        title: "Flor pálida",
        artist: "Marc Anthony 🇵🇷",
        vibe: "salsa",
        genre: "Tropical"
    },
    {
        id: 168,
        title: "For Whom the Bell Tolls",
        artist: "Metallica 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 169,
        title: "Fria como el viento",
        artist: "Luis Miguel 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 170,
        title: "From yesterday",
        artist: "30 Seconds to Mars 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 171,
        title: "From Yesterday",
        artist: "Thirty Seconds to Mars 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 172,
        title: "Gavilan o Paloma",
        artist: "Jose Jose 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 173,
        title: "Gema",
        artist: "Los Panchos 🇲🇽",
        vibe: "musica-de-trio",
        genre: "Romántica"
    },
    {
        id: 175,
        title: "Golpes en el corazón",
        artist: "Auténticos Decadentes 🇦🇷",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 176,
        title: "Green River",
        artist: "Creedence Clearwater Revival 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 177,
        title: "Guantanamera",
        artist: "Joseito Fernandez 🇨🇺",
        vibe: "charangas",
        genre: "General"
    },
    {
        id: 178,
        title: "Guitarras blancas",
        artist: "Enanitos Verdes 🇦🇷",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 179,
        title: "Hablame",
        artist: "Los Panchos 🇲🇽",
        vibe: "musica-de-trio",
        genre: "Romántica"
    },
    {
        id: 180,
        title: "Hasta Ayer",
        artist: "Marc Anthony 🇵🇷",
        vibe: "boleros",
        genre: "Romántica"
    },
    {
        id: 181,
        title: "Have You Ever Seen the Rain",
        artist: "Creedence Clearwater Revival 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 182,
        title: "Hay que noche tan preciosa",
        artist: "Pedro Infante 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 183,
        title: "Here Without You",
        artist: "3 Doors Down 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 184,
        title: "Historia de un amor",
        artist: "Los Panchos 🇲🇽",
        vibe: "boleros",
        genre: "Romántica"
    },
    {
        id: 185,
        title: "Hoja en blanco",
        artist: "Dread Mar I 🇦🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 186,
        title: "Hombre lobo en París",
        artist: "La unión 🇪🇸",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 187,
        title: "Hotel California",
        artist: "Eagles 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 188,
        title: "Hoy",
        artist: "Gian Marco 🇵🇪",
        vibe: "cumbias",
        genre: "Tropical"
    },
    {
        id: 189,
        title: "Hoy",
        artist: "Gian Marco / Valentino Merlo ft. Ke Personajes 🇵🇪 / 🇦🇷",
        vibe: "cumbias",
        genre: "Tropical"
    },
    {
        id: 190,
        title: "Hoy tengo ganas de ti",
        artist: "Miguel Gallardo 🇪🇸",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 191,
        title: "Idilio",
        artist: "Willie Colón 🇵🇷",
        vibe: "salsa",
        genre: "Tropical"
    },
    {
        id: 192,
        title: "Ilegal",
        artist: "Cultura Profética 🇵🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 193,
        title: "Imagine",
        artist: "John Lennon 🇬🇧",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 194,
        title: "In the arms of an angel",
        artist: "Sarah McLachlan 🇨🇦",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 196,
        title: "Insensato",
        artist: "Sr. Loop 🇵🇦",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 197,
        title: "Iris",
        artist: "Goo Goo Dolls 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 198,
        title: "La Bamba",
        artist: "Ritchie Valens 🇺🇸",
        vibe: "charangas",
        genre: "General"
    },
    {
        id: 199,
        title: "La chispa adecuada",
        artist: "Héroes del Silencio 🇪🇸",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 200,
        title: "La cima del cielo",
        artist: "Ricardo Montaner 🇻🇪",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 201,
        title: "La cita",
        artist: "Jessi Uribe y Galy Galeano 🇨🇴",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 202,
        title: "La cita",
        artist: "Jessi Uribe & Galy Galiano 🇨🇴",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 203,
        title: "La ciudad de la furia",
        artist: "Soda Stereo 🇦🇷",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 204,
        title: "La copa rota",
        artist: "José Feliciano 🇵🇷",
        vibe: "boleros",
        genre: "Romántica"
    },
    {
        id: 206,
        title: "La cosa más bella",
        artist: "Eros Ramazoti 🇮🇹",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 207,
        title: "La espera",
        artist: "Cultura Profética 🇵🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 208,
        title: "La flaca",
        artist: "Jarabe de Palo 🇪🇸",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 209,
        title: "La Gloria eres Tu",
        artist: "Luis Miguel (Los Panchos) 🇲🇽",
        vibe: "boleros",
        genre: "Romántica"
    },
    {
        id: 210,
        title: "La gloria eres tú",
        artist: "Los Panchos / Luis Miguel 🇲🇽",
        vibe: "serenatas",
        genre: "Romántica"
    },
    {
        id: 211,
        title: "La hiena",
        artist: "Los Pericos 🇦🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 212,
        title: "La Historia del Taxi",
        artist: "Ricardo Arjona 🇬🇹",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 213,
        title: "La luna y el toro",
        artist: "Dyango 🇪🇸",
        vibe: "charangas",
        genre: "General"
    },
    {
        id: 214,
        title: "La modelo",
        artist: "Jaime Gamboa (Capmany) 🇨🇷",
        vibe: "serenatas-despecho",
        genre: "Romántica"
    },
    {
        id: 215,
        title: "La modelo",
        artist: "Jose Capmany 🇨🇷",
        vibe: "tradicional-costarricense",
        genre: "Tradicional"
    },
    {
        id: 217,
        title: "La primera cita",
        artist: "Carín León 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 218,
        title: "La quiero a morir",
        artist: "DLG 🇺🇸",
        vibe: "salsa",
        genre: "Tropical"
    },
    {
        id: 219,
        title: "La simeona",
        artist: "Los Caporales 🇨🇷",
        vibe: "serenatas-despecho",
        genre: "Romántica"
    },
    {
        id: 220,
        title: "La venia bendita",
        artist: "Marco Antonio Solis 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 222,
        title: "Lagrimas Negras",
        artist: "Miguel Matamoros 🇨🇺",
        vibe: "boleros",
        genre: "Romántica"
    },
    {
        id: 223,
        title: "Lamento boliviano",
        artist: "Enanitos Verdes 🇦🇷",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 224,
        title: "Las Luces de Nueva York",
        artist: "La Sonora Santanera 🇲🇽",
        vibe: "boleros",
        genre: "Romántica"
    },
    {
        id: 225,
        title: "Lástima que seas ajena",
        artist: "Vicente Fernández 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 226,
        title: "Let Her Go",
        artist: "Passenger 🇬🇧",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 227,
        title: "Libre",
        artist: "Nino Bravo 🇪🇸",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 228,
        title: "Little Wing",
        artist: "Jimi Hendrix 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 229,
        title: "Lo dudo",
        artist: "Jose Jose 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 230,
        title: "Lo que hay",
        artist: "Sr. Loop 🇵🇦",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 231,
        title: "Lo que no fue no será",
        artist: "Jose jose 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 233,
        title: "Lobo hombre en París",
        artist: "La Unión 🇪🇸",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 234,
        title: "Loco por un amor",
        artist: "Para ti madrecita 🇨🇷",
        vibe: "serenatas-madre",
        genre: "Romántica"
    },
    {
        id: 235,
        title: "Loco tu forma de ser",
        artist: "Auténticos Decadentes 🇦🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 236,
        title: "Los Caminos de la vida",
        artist: "Vicentico 🇦🇷",
        vibe: "cumbias",
        genre: "Tropical"
    },
    {
        id: 237,
        title: "Luz de día",
        artist: "Enanitos Verdes 🇦🇷",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 238,
        title: "Madrecita querida",
        artist: "Para ti madrecita 🇨🇷",
        vibe: "serenatas-madre",
        genre: "Romántica"
    },
    {
        id: 239,
        title: "Maldita primavera",
        artist: "Yuridia 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 241,
        title: "Maldito duende",
        artist: "Héroes del Silencio 🇪🇸",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 242,
        title: "Mama Said",
        artist: "Metallica 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 243,
        title: "Mary es mi amor",
        artist: "Leo Dan 🇦🇷",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 244,
        title: "Me bebí tu recuerdo",
        artist: "Gali Galeano 🇨🇴",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 245,
        title: "Me dediqué a perderte",
        artist: "Alejandro Fernández 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 246,
        title: "Me gustas",
        artist: "Joan Sebastian 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 247,
        title: "Me vas a extrañar",
        artist: "Pepe Aguilar 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 248,
        title: "Mediterráneo",
        artist: "Joan Manuel Serrat 🇪🇸",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 249,
        title: "Mentira",
        artist: "La Ley 🇨🇱",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 250,
        title: "Mi chica de humo",
        artist: "Emmanuel 🇲🇽",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 251,
        title: "Mi credo",
        artist: "Pepe Aguilar 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 252,
        title: "Mi fortaleza",
        artist: "Nonpalidece 🇦🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 253,
        title: "Mi historia entre tus dedos",
        artist: "Gianluca Grignani 🇮🇹",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 254,
        title: "Mi mejor amiga",
        artist: "Geovany Barrantes 🇨🇷",
        vibe: "serenatas-madre",
        genre: "Romántica"
    },
    {
        id: 256,
        title: "Mi primer día sin ti",
        artist: "Enanitos Verdes 🇦🇷",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 257,
        title: "Mi unicornio azul",
        artist: "Silvio Rodríguez 🇨🇺",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 258,
        title: "Miedo",
        artist: "Pepe Aguilar 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 259,
        title: "Mil horas",
        artist: "Los Abuelos de la Nada 🇦🇷",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 260,
        title: "Misterios y pasiones",
        artist: "Balerom (Evolución) 🇨🇷",
        vibe: "tradicional-costarricense",
        genre: "Tradicional"
    },
    {
        id: 261,
        title: "Misunderstood",
        artist: "Bon Jovi 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 262,
        title: "More Than Words",
        artist: "Extreme 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 263,
        title: "Mori",
        artist: "Tranzas 🇪🇨",
        vibe: "tradicional-costarricense",
        genre: "Tradicional"
    },
    {
        id: 264,
        title: "Motivos",
        artist: "Jose Domingo Figueroa 🇨🇷",
        vibe: "boleros",
        genre: "Romántica"
    },
    {
        id: 266,
        title: "Muchacha ojos de papel",
        artist: "Luis Alberto Spinetta 🇦🇷",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 268,
        title: "Mujeres divinas",
        artist: "Vicente Fernández 🇲🇽",
        vibe: "musica-de-trio",
        genre: "Romántica"
    },
    {
        id: 269,
        title: "My Way",
        artist: "Frank Sinatra 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 270,
        title: "Nada",
        artist: "Dread Mar I 🇦🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 271,
        title: "Ni contigo ni sin ti",
        artist: "Los Ángeles Azules 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 272,
        title: "No deseo ni pensar",
        artist: "Gaviota 🇨🇷",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 273,
        title: "No me conoces",
        artist: "Marc Anthony 🇵🇷",
        vibe: "boleros",
        genre: "Romántica"
    },
    {
        id: 274,
        title: "No me lo puedo explicar",
        artist: "Tiziano Ferro 🇮🇹",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 276,
        title: "No puedo enamorarme de ti",
        artist: "Joaquín Sabina 🇪🇸",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 278,
        title: "No te apartes de mí",
        artist: "Yahir 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 280,
        title: "No voy en tren",
        artist: "Charly García 🇦🇷",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 281,
        title: "No Woman No Cry",
        artist: "Bob Marley 🇯🇲",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 282,
        title: "Nothing Else Matters",
        artist: "Metallica 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 283,
        title: "Novia mía",
        artist: "Los Panchos 🇲🇽",
        vibe: "musica-de-trio",
        genre: "Romántica"
    },
    {
        id: 284,
        title: "Nuestro Juramento",
        artist: "Julio Jaramillo 🇪🇨",
        vibe: "boleros",
        genre: "Romántica"
    },
    {
        id: 285,
        title: "Odiame",
        artist: "Los Tres Reyes 🇲🇽",
        vibe: "musica-de-trio",
        genre: "Romántica"
    },
    {
        id: 287,
        title: "Ojalá",
        artist: "Silvio Rodríguez 🇨🇺",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 289,
        title: "Ojos marrones",
        artist: "Sebastián Yatra 🇨🇴",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 290,
        title: "Old Man",
        artist: "Neil Young 🇨🇦",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 291,
        title: "Open my eyes",
        artist: "Soja 🇺🇸",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 292,
        title: "Otherside",
        artist: "Red Hot Chili Peppers 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 293,
        title: "Otra como tú",
        artist: "Eros Ramazoti 🇮🇹",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 294,
        title: "Otro gol",
        artist: "Gandhi 🇨🇷",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 296,
        title: "Pajarillo",
        artist: "José María Napoleón 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 297,
        title: "Pampa",
        artist: "Costa Rica 🇨🇷",
        vibe: "tradicional-costarricense",
        genre: "Tradicional"
    },
    {
        id: 299,
        title: "Para empezar",
        artist: "Leonel García 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 301,
        title: "Para estar",
        artist: "Cultura Profética 🇵🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 302,
        title: "Para no verte más",
        artist: "La mosca TSE 🇦🇷",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 303,
        title: "Para siempre",
        artist: "Vicente Fernández 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 304,
        title: "Para toda la vida",
        artist: "Los Panchos 🇲🇽",
        vibe: "musica-de-trio",
        genre: "Romántica"
    },
    {
        id: 305,
        title: "Parece que fue ayer",
        artist: "Los Panchos 🇲🇽",
        vibe: "musica-de-trio",
        genre: "Romántica"
    },
    {
        id: 307,
        title: "Patience",
        artist: "Guns N’ Roses 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 308,
        title: "Penelope",
        artist: "Joan Manuel Serrat 🇪🇸",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 309,
        title: "People are strange",
        artist: "The Doors 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 310,
        title: "Perdon",
        artist: "Los Panchos 🇲🇽",
        vibe: "musica-de-trio",
        genre: "Romántica"
    },
    {
        id: 312,
        title: "Perdoname",
        artist: "Camilo Sesto 🇪🇸",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 314,
        title: "Perfidia",
        artist: "Los Panchos 🇲🇽",
        vibe: "musica-de-trio",
        genre: "Romántica"
    },
    {
        id: 315,
        title: "Perfume de Gardenias",
        artist: "La Sonora Santanera 🇲🇽",
        vibe: "boleros",
        genre: "Romántica"
    },
    {
        id: 317,
        title: "Piel de ángel",
        artist: "Camilo Sesto 🇪🇸",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 318,
        title: "Plegaria",
        artist: "César de Guatemala 🇬🇹",
        vibe: "musica-de-trio",
        genre: "Romántica"
    },
    {
        id: 319,
        title: "Plush",
        artist: "Stone Temple Pilots 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 321,
        title: "Pobre corazón",
        artist: "Ke Personajes 🇦🇷",
        vibe: "cumbias",
        genre: "Tropical"
    },
    {
        id: 323,
        title: "Popotitos",
        artist: "Enrique Guzmán 🇲🇽",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 324,
        title: "Por el boulevard de los suenios rotos",
        artist: "Joaquin Sabina 🇪🇸",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 325,
        title: "Por el bulevar de los sueños rotos",
        artist: "Joaquín Sabina 🇪🇸",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 326,
        title: "Por ese palpitar",
        artist: "Sandro 🇦🇷",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 328,
        title: "Por mujeres como tú",
        artist: "Pepe Aguilar 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 329,
        title: "Porque será (Jamás imaginé querer como te quiero)",
        artist: "Marco 🇲🇽",
        vibe: "musica-de-trio",
        genre: "Romántica"
    },
    {
        id: 330,
        title: "Porque te tengo que olvidar",
        artist: "Jose Feliciano 🇵🇷",
        vibe: "boleros",
        genre: "Romántica"
    },
    {
        id: 332,
        title: "Prometiste",
        artist: "Pepe Aguilar 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 334,
        title: "Puerto Limón",
        artist: "Abracadabra 🇦🇷",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 335,
        title: "Pupilas Lejanas",
        artist: "Los Pericos 🇦🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 336,
        title: "Que alguien me diga",
        artist: "Gilberto Santa Rosa 🇵🇷",
        vibe: "boleros",
        genre: "Romántica"
    },
    {
        id: 337,
        title: "Qué de raro tiene",
        artist: "Vicente Fernández 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 338,
        title: "Qué locura enamorarme de ti",
        artist: "Eddie Santiago 🇵🇷",
        vibe: "salsa",
        genre: "Tropical"
    },
    {
        id: 339,
        title: "Que me alcance la vida",
        artist: "Sin Bandera 🇲🇽 / 🇦🇷",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 341,
        title: "Qué pasará mañana",
        artist: "José Luis Perales 🇪🇸",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 342,
        title: "Que vas a hacer esta noche",
        artist: "Gaviota 🇨🇷",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 344,
        title: "Que vuelvas",
        artist: "Carin Leon 🇲🇽",
        vibe: "cumbias",
        genre: "Tropical"
    },
    {
        id: 346,
        title: "Quédate",
        artist: "Abracadabra 🇦🇷",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 348,
        title: "Quién es usted",
        artist: "Christian Nodal 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 350,
        title: "Quién fuera",
        artist: "Silvio Rodríguez 🇨🇺",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 351,
        title: "Quieres ser mi amante",
        artist: "Camilo Sesto 🇪🇸",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 352,
        title: "Redemption Song",
        artist: "Bob Marley 🇯🇲",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 353,
        title: "Reloj",
        artist: "Los Panchos 🇲🇽",
        vibe: "musica-de-trio",
        genre: "Romántica"
    },
    {
        id: 354,
        title: "Resistance",
        artist: "Muse 🇬🇧",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 355,
        title: "Resistence",
        artist: "MUSE 🇬🇧",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 356,
        title: "Riders on the Storm",
        artist: "The Doors 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 357,
        title: "Rimas pa seducir",
        artist: "Cultura Profética 🇵🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 358,
        title: "Sabor a mí",
        artist: "Los Panchos 🇲🇽",
        vibe: "boleros",
        genre: "Romántica"
    },
    {
        id: 360,
        title: "Santa Lucía",
        artist: "Miguel Ríos 🇪🇸",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 361,
        title: "Señora de las cuatro décadas",
        artist: "Ricardo Arjona 🇬🇹",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 362,
        title: "Sentimiento Original",
        artist: "Gondwana 🇨🇱",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 363,
        title: "Serenata a mi madre",
        artist: "Para ti madrecita 🇨🇷",
        vibe: "serenatas-madre",
        genre: "Romántica"
    },
    {
        id: 365,
        title: "Si no te hubieras ido",
        artist: "Maná 🇲🇽",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 367,
        title: "Si nos dejan",
        artist: "José Alfredo Jiménez 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 368,
        title: "Si te pudiera mentir",
        artist: "Calibre 50 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 369,
        title: "Si una vez",
        artist: "Selena 🇺🇸",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 370,
        title: "Si una vez",
        artist: "Selena / Carín León (versión popular actual) 🇺🇸 / 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 371,
        title: "Sin Cadenas",
        artist: "Los Pericos 🇦🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 372,
        title: "Sin daños a terceros",
        artist: "Ricardo Arjona 🇬🇹",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 373,
        title: "Sin ti",
        artist: "Los Panchos 🇲🇽",
        vibe: "musica-de-trio",
        genre: "Romántica"
    },
    {
        id: 374,
        title: "Sin tu latido",
        artist: "Luis Eduardo Aute 🇪🇸",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 375,
        title: "Sin un amor",
        artist: "Los Panchos 🇲🇽",
        vibe: "musica-de-trio",
        genre: "Romántica"
    },
    {
        id: 377,
        title: "Sobreviviendo",
        artist: "Víctor Heredia 🇦🇷",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 378,
        title: "Sola",
        artist: "Kadeho 🇨🇷",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 379,
        title: "Solo para ti",
        artist: "Camila 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 381,
        title: "Solo pienso en ti",
        artist: "Víctor Manuelle 🇵🇷",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 383,
        title: "Solo por ti",
        artist: "Cultura Profética 🇵🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 384,
        title: "Somos Novios",
        artist: "Luis Miguel 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 385,
        title: "Soy el ladron",
        artist: "Gualberto Ibarreto",
        vibe: "boleros",
        genre: "Romántica"
    },
    {
        id: 386,
        title: "Soy tico",
        artist: "Costa Rica 🇨🇷",
        vibe: "tradicional-costarricense",
        genre: "Tradicional"
    },
    {
        id: 387,
        title: "Stairway to Heaven",
        artist: "Led Zeppelin 🇬🇧",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 389,
        title: "Stand by Me",
        artist: "Ben E. King 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 390,
        title: "Sube el Humo",
        artist: "Cultura Profética 🇵🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 391,
        title: "Sueño con serpientes",
        artist: "Silvio Rodríguez 🇨🇺",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 392,
        title: "Surfing with the Alien",
        artist: "Joe Satriani 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 393,
        title: "Take On Me",
        artist: "A-ha 🇳🇴",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 394,
        title: "Tan linda es mi Costa Rica",
        artist: "Costa Rica 🇨🇷",
        vibe: "tradicional-costarricense",
        genre: "Tradicional"
    },
    {
        id: 395,
        title: "Tardes Negras",
        artist: "Tiziano Ferro 🇮🇹",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 396,
        title: "Tatuajes",
        artist: "Joan Sebastian 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 397,
        title: "Te amare",
        artist: "Miguel Bose 🇪🇸",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 398,
        title: "Te amo",
        artist: "Alexander Acha 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 399,
        title: "Te Conozco",
        artist: "Ricardo Arjona 🇬🇹",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 400,
        title: "Te conozco bien",
        artist: "Marc Anthony 🇵🇷",
        vibe: "salsa",
        genre: "Tropical"
    },
    {
        id: 401,
        title: "Te he prometido",
        artist: "Leo Dan 🇦🇷",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 402,
        title: "Te lo pido por favor",
        artist: "Juan Gabriel 🇲🇽",
        vibe: "serenatas-madre",
        genre: "Romántica"
    },
    {
        id: 403,
        title: "Te para 3",
        artist: "Soda Stereo 🇦🇷",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 404,
        title: "Te quiero te quiero",
        artist: "Nino Bravo 🇪🇸",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 406,
        title: "Te veo venir soledad",
        artist: "Franco de Vita 🇻🇪",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 407,
        title: "Tears in Heaven",
        artist: "Eric Clapton 🇬🇧",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 409,
        title: "Tengo ganas",
        artist: "Víctor Manuelle 🇵🇷",
        vibe: "salsa",
        genre: "Tropical"
    },
    {
        id: 410,
        title: "The Day That Never Comes",
        artist: "Metallica 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 411,
        title: "The house of the rising sun",
        artist: "The Animals 🇬🇧",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 412,
        title: "The Kill",
        artist: "30 Seconds to Mars 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 413,
        title: "The Old Man Down the Road",
        artist: "John Fogerty 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 414,
        title: "The Reason",
        artist: "Hoobastank 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 415,
        title: "The Scientist",
        artist: "Coldplay 🇬🇧",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 417,
        title: "Todo a pulmón",
        artist: "Miguel Ríos 🇪🇸",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 418,
        title: "Tren al sur",
        artist: "Los Prisioneros 🇨🇱",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 419,
        title: "Tres regalos",
        artist: "Los Panchos 🇲🇽",
        vibe: "musica-de-trio",
        genre: "Romántica"
    },
    {
        id: 420,
        title: "True Love",
        artist: "Soja 🇺🇸",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 421,
        title: "Tu",
        artist: "Carin Leon 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 422,
        title: "Tú",
        artist: "Carín León (Selena) 🇲🇽 / 🇺🇸",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 423,
        title: "Tu amor me hace bien",
        artist: "Marc Anthony 🇵🇷",
        vibe: "salsa",
        genre: "Tropical"
    },
    {
        id: 424,
        title: "Tu carcel",
        artist: "Los Bukis 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 425,
        title: "Tu cárcel",
        artist: "Enanitos Verdes 🇦🇷",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 426,
        title: "Tu eres mi hermano del alma",
        artist: "Roberto Carlos 🇧🇷",
        vibe: "musica-de-trio",
        genre: "Romántica"
    },
    {
        id: 427,
        title: "Tú eres mi hermano del alma",
        artist: "Roberto Carlos (versión trío frecuente) 🇧🇷",
        vibe: "musica-de-trio",
        genre: "Romántica"
    },
    {
        id: 428,
        title: "Tu eterno enamorado",
        artist: "Banda Maguey 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 429,
        title: "Tu presencia",
        artist: "Nonpalidece 🇦🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 431,
        title: "Tú sin mí",
        artist: "Dread Mar I 🇦🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 432,
        title: "Tus ojos",
        artist: "Los Cafres 🇦🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 433,
        title: "Un beso y una flor",
        artist: "Nino Bravo 🇪🇸",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 435,
        title: "Un velero llamado libertad",
        artist: "José Luis Perales 🇪🇸",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 436,
        title: "Una noche mas contigo",
        artist: "Carin Leon 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 437,
        title: "Under the Bridge",
        artist: "Red Hot Chili Peppers 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 438,
        title: "Urge",
        artist: "La Sonora Santanera 🇲🇽",
        vibe: "boleros",
        genre: "Romántica"
    },
    {
        id: 439,
        title: "Usted",
        artist: "Luis Miguel (Los Panchos) 🇲🇽",
        vibe: "boleros",
        genre: "Romántica"
    },
    {
        id: 440,
        title: "Usted",
        artist: "Los Panchos / Luis Miguel 🇲🇽",
        vibe: "serenatas",
        genre: "Romántica"
    },
    {
        id: 441,
        title: "Usted es hermosa",
        artist: "Fausto Miño 🇪🇨",
        vibe: "serenatas",
        genre: "Romántica"
    },
    {
        id: 442,
        title: "Vasos Vacíos",
        artist: "Fabulosos Cadillacs 🇦🇷",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 443,
        title: "Verde, amarillo y rojo",
        artist: "Gondwana 🇨🇱",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 445,
        title: "Vermilion Pt. 2",
        artist: "Slipknot 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 447,
        title: "Vive",
        artist: "José María Napoleón 🇲🇽",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 448,
        title: "Vivir así es morir de amor",
        artist: "Camilo Sesto 🇪🇸",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 449,
        title: "Vivo en el 6",
        artist: "Christian Nodal 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 450,
        title: "Volver, volver",
        artist: "Vicente Fernández 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 452,
        title: "Voy a pasármelo bien",
        artist: "Hombres G 🇪🇸",
        vibe: "rock-latino",
        genre: "Rock"
    },
    {
        id: 453,
        title: "Voy por ella",
        artist: "Balerom (Evolución) 🇨🇷",
        vibe: "tradicional-costarricense",
        genre: "Tradicional"
    },
    {
        id: 454,
        title: "Wherever You Will Go",
        artist: "The Calling 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 455,
        title: "Wind of Change",
        artist: "Scorpions 🇩🇪",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 456,
        title: "Wish You Were Here",
        artist: "Pink Floyd 🇬🇧",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 457,
        title: "Wonderwall",
        artist: "Oasis 🇬🇧",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 459,
        title: "Y cómo es él",
        artist: "José Luis Perales 🇪🇸",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 461,
        title: "Y nos dieron las 10",
        artist: "Joaquín Sabina 🇪🇸",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 462,
        title: "Ya lo pasado",
        artist: "Jose Jose 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 463,
        title: "Ya me entere",
        artist: "Chayin Rubio 🇲🇽",
        vibe: "banda-popular",
        genre: "Regional"
    },
    {
        id: 464,
        title: "Ya no somos, ni seremos",
        artist: "Christian Nodal 🇲🇽",
        vibe: "despecho-intenso",
        genre: "Regional"
    },
    {
        id: 465,
        title: "Yellow",
        artist: "Coldplay 🇬🇧",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 466,
        title: "Yellow Ledbetter",
        artist: "Pearl Jam 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 467,
        title: "Yo no sé mañana",
        artist: "Luis Enrique 🇳🇮",
        vibe: "salsa",
        genre: "Tropical"
    },
    {
        id: 468,
        title: "Yo te seguiré",
        artist: "Alberto Plaza 🇨🇱",
        vibe: "trova-y-plancha",
        genre: "Pop y Cantautor"
    },
    {
        id: 469,
        title: "You and me",
        artist: "Soja 🇺🇸",
        vibe: "reggae-roots",
        genre: "Alternativo"
    },
    {
        id: 470,
        title: "You Give Love a Bad Name",
        artist: "Bon Jovi 🇺🇸",
        vibe: "classical-rock",
        genre: "Rock"
    },
    {
        id: 471,
        title: "Por tu maldito amor",
        artist: "Vicente Fernández 🇲🇽",
        vibe: "despecho-intenso",
        genre: "Regional"
    },
    {
        id: 472,
        title: "Perdname",
        artist: "Espinoza Paz 🇲🇽",
        vibe: "despecho-intenso",
        genre: "Regional"
    },
    {
        id: 473,
        title: "Hombre Normal",
        artist: "Espinoza Paz 🇲🇽",
        vibe: "clasicos-romanticos",
        genre: "Romántica"
    },
    {
        id: 474,
        title: "Perdname",
        artist: "Camilo Sesto 🇪🇸",
        vibe: "despecho-intenso",
        genre: "Romántica"
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SONGS };
}

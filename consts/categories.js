// Category definitions for Catarsis Musical
// Includes vibes and backing track options with visual styling

const VIBES = [
    {
        id: 'serenatas',
        name: 'Serenatas Románticas',
        genre: 'Romántica',
        emoji: '🌹',
        bgColor: '#be123c',
        textColor: '#ffe4e6'
    },
    {
        id: 'serenatas-despecho',
        name: 'Despecho y Corazón Roto',
        genre: 'Romántica',
        emoji: '💔',
        bgColor: '#1f2937',
        textColor: '#fca5a5'
    },
    {
        id: 'boleros',
        name: 'Boleros del recuerdo',
        genre: 'Romántica',
        emoji: '🕰️',
        bgColor: '#713f12',
        textColor: '#fcd34d'
    },
    {
        id: 'musica-de-trio',
        name: 'Bohemia de Trío',
        genre: 'Romántica',
        emoji: '🎻',
        bgColor: '#92400e',
        textColor: '#fde68a'
    },
    {
        id: 'serenatas-madre',
        name: 'Para la Reina de la Casa',
        genre: 'Romántica',
        emoji: '👑',
        bgColor: '#9d174d',
        textColor: '#fbcfe8'
    },
    {
        id: 'trova-y-plancha',
        name: 'Trova & Plancha',
        genre: 'Pop y Cantautor',
        emoji: '🎙️',
        bgColor: '#7c2d12',
        textColor: '#fdba74'
    },
    {
        id: 'clasicos-romanticos',
        name: 'Clásicos Románticos',
        genre: 'Romántica',
        emoji: '💘',
        bgColor: '#831843',
        textColor: '#fda4af'
    },
    {
        id: 'rock-latino',
        name: 'Rock Latino',
        genre: 'Rock',
        emoji: '🤘',
        bgColor: '#1f2937',
        textColor: '#fca5a5'
    },
    {
        id: 'classical-rock',
        name: 'Rock Clásico',
        genre: 'Rock',
        emoji: '⚡',
        bgColor: '#111827',
        textColor: '#93c5fd'
    },
    {
        id: 'banda-popular',
        name: 'Cantina, Tequila y Rancheras',
        genre: 'Regional',
        emoji: '🥃',
        bgColor: '#065f46',
        textColor: '#6ee7b7'
    },
    {
        id: 'salsa',
        name: 'Salsa pa\' bailar',
        genre: 'Tropical',
        emoji: '🕺',
        bgColor: '#b45309',
        textColor: '#fef3c7'
    },
    {
        id: 'reggae-roots',
        name: 'Reggae Roots',
        genre: 'Alternativo',
        emoji: '🌴',
        bgColor: '#14532d',
        textColor: '#86efac'
    },
    {
        id: 'cumbias',
        name: 'Cumbiones pa\' Bailar',
        genre: 'Tropical',
        emoji: '💃',
        bgColor: '#7c3aed',
        textColor: '#c4b5fd'
    },
    {
        id: 'tradicional-costarricense',
        name: 'Musica de Costa Rica',
        genre: 'Tradicional',
        emoji: '🇨🇷',
        bgColor: '#1d4ed8',
        textColor: '#dbeafe'
    }
];

const BACKING_TRACK_OPTIONS = [
    {
        id: 'available',
        name: 'Disponible',
        emoji: '✓',
        bgColor: '#065f46', // Green
        textColor: '#6ee7b7'
    },
    {
        id: 'unavailable',
        name: 'No Disponible',
        emoji: '✕',
        bgColor: '#374151', // Gray
        textColor: '#9ca3af'
    }
];

// Playlists for customized song collections
const PLAYLISTS = [
    {
        id: 'especiales-serenatas',
        name: 'Especiales para SERENATAS',
        emoji: '❤️',
        description: 'Las mejores canciones para dedicar y enamorar en una serenata',
        bgColor: '#be123c',
        textColor: '#ffe4e6',
        songIds: [209, 439, 68, 342, 220, 441, 264, 404, 98]
    },
    {
        id: 'despecho-y-desamor',
        name: 'Despecho y desamor',
        emoji: '💔',
        description: 'Canciones para cantar a grito herido y curar el alma',
        bgColor: '#1f2937',
        textColor: '#fca5a5',
        songIds: [143, 285, 310, 471, 472, 312]
    },
    {
        id: 'boleros-del-recuerdo',
        name: 'Boleros del recuerdo',
        emoji: '🎼',
        description: 'Joyas inolvidables de la música romántica',
        bgColor: '#713f12',
        textColor: '#fcd34d',
        songIds: [184, 330, 27, 358, 315, 224, 151, 438, 204, 336]
    },
    {
        id: 'trova-y-plancha-playlist',
        name: 'Trova y plancha',
        emoji: '🎙️',
        description: 'Clásicos inolvidables de trova y plancha',
        bgColor: '#7c2d12',
        textColor: '#fdba74',
        songIds: [158, 350, 391, 374, 360, 417, 51, 212, 361, 325, 4, 71, 81, 76, 459]
    },
    {
        id: 'clasicos-romanticos-playlist',
        name: 'Clásicos Románticos',
        emoji: '💘',
        description: 'Canciones inolvidables que le cantan al amor',
        bgColor: '#831843',
        textColor: '#fda4af',
        songIds: [346, 351, 115, 105, 74, 155, 317, 172, 231, 190, 33, 326, 80, 137, 258, 247, 384, 11, 142, 29]
    },
    {
        id: 'rock-clasico-playlist',
        name: 'Rock Clásico en Inglés',
        emoji: '⚡',
        description: 'Los grandes clásicos del rock en inglés',
        bgColor: '#111827',
        textColor: '#93c5fd',
        songIds: [407, 393, 411, 161, 455, 181, 456, 437, 307, 262, 197, 163, 59, 414, 226, 282]
    },
    {
        id: 'banda-popular-playlist',
        name: 'Banda popular y música mexicana',
        emoji: '🥃',
        description: 'Las mejores canciones de cantina, banda y rancheras',
        bgColor: '#065f46',
        textColor: '#6ee7b7',
        songIds: [348, 217, 119, 64, 428, 449, 368, 328, 367, 337, 303, 123]
    },
    {
        id: 'tradicional-costarricense-playlist',
        name: 'Tradicional Costarricense',
        emoji: '🇨🇷',
        description: 'Lo mejor de la música nacional',
        bgColor: '#1d4ed8',
        textColor: '#dbeafe',
        songIds: [95, 112, 294, 53, 156, 378, 215, 260, 453, 91, 297, 386, 394, 103, 263]
    },
    {
        id: 'cumbias-playlist',
        name: 'Cumbias pa\' Bailar',
        emoji: '💃',
        description: 'Las mejores cumbias para mover el cuerpo',
        bgColor: '#7c3aed',
        textColor: '#c4b5fd',
        songIds: [321, 9, 189, 78, 131, 79, 344, 236, 12]
    },
    {
        id: 'salsa-playlist',
        name: 'Salsa pa\' bailar',
        emoji: '🕺',
        description: 'La mejor salsa para sacarle fuego a la pista',
        bgColor: '#b45309',
        textColor: '#fef3c7',
        songIds: [467, 218, 167, 409, 423, 400, 180, 273, 338, 99, 191, 126, 122]
    },
    {
        id: 'serenatas-madre-playlist',
        name: 'Serenatas para la madre',
        emoji: '👑',
        description: 'Las mejores canciones para la reina de la casa',
        bgColor: '#9d174d',
        textColor: '#fbcfe8',
        songIds: [234, 238, 363, 254, 402]
    },
    {
        id: 'reggae-roots-playlist',
        name: 'Reggae Roots',
        emoji: '🌴',
        description: 'Vibras positivas y mucho reggae',
        bgColor: '#14532d',
        textColor: '#86efac',
        songIds: [357, 192, 443, 19, 18, 432, 38, 335, 371, 235, 442, 362, 469, 61, 281, 352, 162, 431, 270, 57, 383]
    }
];

// Helper function to get vibe by ID
function getVibeById(id) {
    return VIBES.find(vibe => vibe.id === id);
}

// Helper function to get backing track option by ID
function getBackingTrackById(id) {
    return BACKING_TRACK_OPTIONS.find(option => option.id === id);
}

// Helper function to get playlist by ID
function getPlaylistById(id) {
    return PLAYLISTS.find(playlist => playlist.id === id);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        VIBES,
        BACKING_TRACK_OPTIONS,
        PLAYLISTS,
        getVibeById,
        getBackingTrackById,
        getPlaylistById
    };
}

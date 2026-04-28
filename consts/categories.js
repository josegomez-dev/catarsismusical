// Category definitions for Catarsis Musical
// Includes vibes and backing track options with visual styling

const VIBES = [
    {
        id: 'clasicos-romanticos',
        name: 'Clásicos Románticos',
        emoji: '🌙',
        bgColor: '#831843',
        textColor: '#fda4af'
    },
    {
        id: 'boleros-del-recuerdo',
        name: 'Boleros del Recuerdo',
        emoji: '🎺',
        bgColor: '#713f12',
        textColor: '#fcd34d'
    },
    {
        id: 'trova-y-plancha',
        name: 'Trova y Plancha',
        emoji: '🎸',
        bgColor: '#7c2d12',
        textColor: '#fdba74'
    },
    {
        id: 'rock-latino',
        name: 'Rock Latino',
        emoji: '🎸',
        bgColor: '#1f2937',
        textColor: '#fca5a5'
    },
    {
        id: 'classical-rock',
        name: 'Rock Clásico',
        emoji: '🎷',
        bgColor: '#111827',
        textColor: '#93c5fd'
    },
    {
        id: 'banda-popular',
        name: 'Banda Popular',
        emoji: '🤠',
        bgColor: '#065f46',
        textColor: '#6ee7b7'
    },
    {
        id: 'musica-de-trio',
        name: 'Música de Trío',
        emoji: '🎺',
        bgColor: '#92400e',
        textColor: '#fde68a'
    },
    {
        id: 'reggae-roots',
        name: 'Reggae Roots',
        emoji: '🌴',
        bgColor: '#14532d',
        textColor: '#86efac'
    },
    {
        id: 'cumbias',
        name: 'Cumbias',
        emoji: '💃',
        bgColor: '#7c3aed',
        textColor: '#c4b5fd'
    },
    {
        id: 'salsa',
        name: 'Salsa',
        emoji: '🔥',
        bgColor: '#be123c',
        textColor: '#fda4af'
    },
    {
        id: 'charangas',
        name: 'Charangas',
        emoji: '🎉',
        bgColor: '#0f766e',
        textColor: '#5eead4'
    },
    {
        id: 'extras-acusticos',
        name: 'Extras Acústicos',
        emoji: '🪶',
        bgColor: '#374151',
        textColor: '#d1d5db'
    },
    {
        id: 'serenata-despecho',
        name: 'Serenata de Despecho',
        emoji: '💔',
        bgColor: '#7f1d1d',
        textColor: '#fca5a5'
    },
    {
        id: 'original',
        name: 'Música original de José Alejandro Gómez Castro (cantautor)',
        emoji: '✨',
        bgColor: '#581c87',
        textColor: '#d8b4fe'
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
        id: 'las-mas-pedidas',
        name: '🔥 Las Más Pedidas',
        emoji: '🔥',
        description: 'Las canciones más solicitadas',
        bgColor: '#dc2626',
        textColor: '#fecaca',
        songIds: [1, 2, 3, 15, 23, 50, 75, 100] // Add song IDs as needed
    },
    {
        id: 'baby-parties',
        name: '👶 Baby Parties',
        emoji: '👶',
        description: 'Canciones para fiestas de bebés',
        bgColor: '#60a5fa',
        textColor: '#dbeafe',
        songIds: [40, 41, 42, 60, 65] // Add song IDs as needed
    },
    {
        id: 'despedidas-soltera',
        name: '💃 Despedidas de Soltera',
        emoji: '💃',
        description: 'El soundtrack perfecto para la despedida',
        bgColor: '#ec4899',
        textColor: '#fbcfe8',
        songIds: [55, 70, 85, 90] // Add song IDs as needed
    },
    {
        id: 'serenatas-bodas',
        name: '💒 Serenatas para Bodas',
        emoji: '💒',
        description: 'Canciones románticas para bodas',
        bgColor: '#f59e0b',
        textColor: '#fef3c7',
        songIds: [1, 2, 15, 23, 50] // Add song IDs as needed
    },
    {
        id: 'jose-jose-perales-nino-bravo-camilo',
        name: '🎤 Clásicos: José José, Perales, Niño Bravo, Camilo Sesto',
        emoji: '🎤',
        description: 'Éxitos de los maestros del bolero',
        bgColor: '#8b5cf6',
        textColor: '#ede9fe',
        songIds: [1, 5, 10, 15, 22] // Add song IDs as needed
    },
    {
        id: 'boleros-luismi',
        name: '🌙 Boleros de Luismi',
        emoji: '🌙',
        description: 'Los románticos de Luis Miguel',
        bgColor: '#d946ef',
        textColor: '#f3e8ff',
        songIds: [1, 2, 6, 7] // Add song IDs as needed
    },
    {
        id: 'sabina-serrat-silvio',
        name: '🎸 Sabina, Serrat y Silvio Rodríguez',
        emoji: '🎸',
        description: 'Los grandes de la trova y la canción',
        bgColor: '#14b8a6',
        textColor: '#ccfbf1',
        songIds: [16, 17, 18, 19] // Add song IDs as needed
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

const SONG_FACTS = {
    1: "Considerado uno de los boleros cubanos más sublimes, compuesto por José Antonio Méndez, es una pieza clave indiscutible en el movimiento del 'filin'.",
    13: "Miguel Matamoros combinó el bolero con el son cubano en esta icónica canción, inspirada al escuchar el llanto inconsolable de una mujer por su difunto esposo.",
    15: "¡Rompiendo fronteras! Escrita por el panameño Carlos Eleta Almarán tras la triste pérdida de su cuñada, se ha convertido en el bolero más traducido en toda la historia de la música.",
    24: "Basada en las experiencias reales de Billy Joel trabajando como pianista y cantante de salón en un bar de Los Ángeles durante seis meses en 1972.",
    26: "Un clásico de Arjona que expone las ironías y complejidades del amor de forma tan conversacional que cambió el modo de escribir la trova urbana.",
    28: "Este himno de Nino Bravo ha trascendido generaciones, inspirado en la triste historia real de la primera víctima que intentó cruzar el Muro de Berlín.",
    44: "Perales originalmente compuso este tema pensando que se lo daría a Julio Iglesias, inspirado tras la noticia de que su ex-esposa se volvería a casar.",
    48: "Escrita y popularizada inmensamente en España por Ana Belén, ha sido catalogada como un verdadero himno a la sensualidad sin tapujos.",
    68: "Una joya mística del rock mexicano de Caifanes que explora de manera cruda cómo los demonios personales y la sociedad pueden arrinconarnos.",
    79: "La melodía de este himno en 'doble tempo' nació inspirada en las frías y caóticas tardes recorriendo la inmensa ciudad de Buenos Aires.",
    80: "El ritmo y el bajo característicos de la canción no se hicieron con cuerdas sino con el teclado clásico Casio, sellando la época del synth-pop latino.",
    86: "Aunque Los Enanitos la catapultaron, la canción original fue escrita varios años antes por la banda mendocina amiga 'Alcohol Etílico'.",
    90: "El título nació después de que Cerati escuchara a sus padres hablar de 'música ligera' refiriéndose a las obras más amenas de la música clásica.",
    91: "El 'Maldito Duende' es en realidad una metáfora pura del vocalista Bunbury cantándole de frente a las adicciones nocturnas de forma poética.",
    104: "Aunque Santana la hizo un éxito mundial arrasador con su estilo tan latino, el tema original proviene de la genialidad de Peter Green de Fleetwood Mac.",
    111: "La última canción que Jim Morrison grabó junto a The Doors antes de su misteriosa muerte, mezclando sonidos de tormentas reales de lluvia en el estudio.",
    116: "Cuenta la leyenda urbana que Jimmy Page compuso el solo acústico frente a una fogata en una cabaña remota en las montañas galesas sin electricidad.",
    118: "Don Henley ha explicado a lo largo de décadas que líricamente esta canción relata los claroscuros y excesos asfixiantes del 'Sueño Americano' en Los Ángeles.",
    124: "Goo Goo Dolls escribió este mega hit explícitamente desde la trágica perspectiva narrativa de Nicolas Cage en la clásica película romántica 'City of Angels'."
};

function getSongFact(songId) {
    return SONG_FACTS[songId] || null;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SONG_FACTS,
        getSongFact
    };
}

$(document).ready(function () {
  var fraces_romanticas = [{
    'frase': 'El amor es intensidad y por esto es una distensión del tiempo: estira los minutos y los alarga como siglos',
    'autor': 'Octavio Paz'
  },
  {
    'frase': 'El amor se compone de una sola alma que habita en dos cuerpos',
    'autor': 'Aristóteles'
  },
  {
    'frase': 'Andábamos sin buscarnos, pero sabiendo que andábamos para encontrarnos',
    'autor': 'Julio Cortázar'
  },
  {
    'frase': 'Por encima de todo vístanse de amor que es el vínculo perfecto',
    'autor': 'Colosenses 3:14'
  },
  {
    'frase': 'Prefiero vivir una vida contigo, que pasar el resto de las edades sin ti',
    'autor': 'El señor de los anillos'
  },
  {
    'frase': 'Creo que los lugares en que he estado y las fotos que he hecho durante mi vida me han estado conduciendo hacia ti”',
    'autor': 'Los puentes de Madison'
  },
  {
    'frase': 'A veces podemos pasarnos años sin vivir en absoluto, y de pronto toda nuestra vida se concentra en un solo instante',
    'autor': 'Oscar Wilde'
  },
  {
    'frase': 'Te quiero no por quien eres, sino por quien soy cuando estoy contigo ',
    'autor': 'Gabriel García Márquez'
  },
  {
    'frase': 'Siempre fuiste mi espejo. Quiero decir que para verme tenía que mirarte',
    'autor': 'Julio Cortázar'
  },
  {
    'frase': 'Me basta mirarte para saber que contigo me voy a empapar el alma',
    'autor': 'Julio Cortázar'
  },
  {
    'frase': 'Yo no te pido que me bajes una estrella azul, solo te pido que mi espacio lo llenes con tu luz',
    'autor': 'Mario Benedetti'
  },
  {
    'frase': 'Fíjese que cuando sonríe se le forman unas comillas en cada extremo de la boca. Esa, su boca, es mi cita favorita',
    'autor': 'Mario Benedetti'
  },
  {
    'frase': 'Amor es solo una palabra, hasta que alguien llega para darle sentido',
    'autor': 'Paulo Coelho.'
  },
  {
    'frase': 'Cuando te das cuenta que quieres pasar el resto de tu vida con una persona, quieres que el resto de tu vida empiece lo antes posible',
    'autor': 'Billy Cristal'
  },
  {
    'frase': 'Si no te hubiera conocido, habría soñado hacerte una realidad',
    'autor': 'Sebastián Chantoix.'
  },
  {
    'frase': 'Sea lo que sea de lo que estén hechas nuestras almas, la tuya y la mía son las mismas',
    'autor': 'Emily Bronte'
  },
  {
    'frase': 'Mi verdadero amor posee mi corazón y yo tengo el suyo',
    'autor': 'Philip Sydney'
  },
  ];
  var numero = Math.floor(Math.random() * 16) + 1;
  var frase = fraces_romanticas[numero]['frase'];
  var autor = fraces_romanticas[numero]['autor'];
  $('#banner-frase').html(frase);
  $('#banner-autor').html(autor);
});
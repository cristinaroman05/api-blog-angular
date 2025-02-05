export interface ICategory {
  id: number;
  name: string;
}

export interface IPost {
  id?: number;
  title: string;
  text: string;
  author: string;
  image: string;
  category: ICategory;
  date: Date;
}

export const POSTS: IPost[] = [
  {
    id: 1,
    title: 'Las mejores playas del Caribe',
    text: 'Explora las playas más paradisíacas del Caribe y disfruta del sol y la arena. Desde arenas blancas hasta aguas cristalinas, te contamos cuáles son los destinos imprescindibles para unas vacaciones de ensueño. Además, te damos consejos sobre la mejor época para viajar y actividades que no te puedes perder.',
    author: 'Juan Pérez',
    image: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg',
    category: { id: 1, name: 'Playa' },
    date: new Date('2024-01-15'),
  },
  {
    id: 2,
    title: 'Senderismo en los Alpes',
    text: 'Descubre las mejores rutas de senderismo en los Alpes europeos. Desde senderos para principiantes hasta desafíos para expertos, en esta guía te mostramos los paisajes más impresionantes, consejos para prepararte y qué llevar en tu mochila para una experiencia segura y placentera.',
    author: 'María López',
    image: 'https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg',
    category: { id: 2, name: 'Montaña' },
    date: new Date('2024-02-10'),
  },
  {
    id: 3,
    title: 'Vida nocturna en Nueva York',
    text: 'Conoce los mejores bares y discotecas de la Gran Manzana. Desde los icónicos rooftop bars con vistas impresionantes hasta los clubes más exclusivos, te contamos dónde vivir la mejor fiesta neoyorquina. También exploramos opciones para todos los gustos y presupuestos.',
    author: 'Carlos Gómez',
    image:
      'https://images.pexels.com/photos/17377644/pexels-photo-17377644/free-photo-of-ciudad-punto-de-referencia-edificios-nueva-york.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: { id: 3, name: 'Ciudad' },
    date: new Date('2024-03-05'),
  },
  {
    id: 4,
    title: 'Escapada rural en la Toscana',
    text: 'Disfruta de la tranquilidad y la belleza de los paisajes toscanos. Te llevamos por un recorrido por los viñedos, pueblos medievales y la gastronomía que hacen de esta región italiana un destino perfecto para desconectar. Además, te recomendamos las mejores casas rurales y actividades imperdibles.',
    author: 'Laura Méndez',
    image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
    category: { id: 4, name: 'Rural' },
    date: new Date('2024-04-12'),
  },
  {
    id: 5,
    title: 'Festivales de música en Europa',
    text: 'Una guía de los mejores festivales de música en el continente europeo. Desde el legendario Glastonbury hasta el vibrante Tomorrowland, te contamos qué hace únicos a estos eventos, cómo conseguir entradas y qué llevar para disfrutar al máximo la experiencia.',
    author: 'Fernando Ruiz',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
    category: { id: 5, name: 'Festivales' },
    date: new Date('2024-05-20'),
  },
  {
    id: 6,
    title: 'Las playas más escondidas de Asia',
    text: 'Explora playas poco conocidas pero impresionantes en Asia. Te mostramos rincones secretos en Filipinas, Indonesia y Tailandia donde la naturaleza sigue intacta. Además, te damos recomendaciones sobre cómo llegar y qué hacer en cada una de ellas.',
    author: 'Ana Castillo',
    image:
      'https://images.pexels.com/photos/30356959/pexels-photo-30356959/free-photo-of-serena-vista-costera-en-binh-thu-n-vietnam.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: { id: 1, name: 'Playa' },
    date: new Date('2024-06-18'),
  },
  {
    id: 7,
    title: 'Escalada en los Andes',
    text: 'Una aventura para los amantes de la montaña en Sudamérica. Desde la imponente Cordillera Blanca en Perú hasta el mítico Aconcagua en Argentina, te contamos qué rutas elegir según tu nivel y cómo prepararte para el reto.',
    author: 'José Martínez',
    image:
      'https://images.pexels.com/photos/326235/pexels-photo-326235.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: { id: 2, name: 'Montaña' },
    date: new Date('2024-07-08'),
  },
  {
    id: 8,
    title: 'Turismo urbano en Tokio',
    text: 'Descubre la fusión de tradición y modernidad en la capital japonesa. Desde sus templos ancestrales hasta la vibrante vida nocturna de Shinjuku, exploramos los imperdibles de esta ciudad única y te damos consejos para moverte como un local.',
    author: 'Sofía Herrera',
    image:
      'https://images.pexels.com/photos/17650715/pexels-photo-17650715/free-photo-of-ciudad-luces-noche-calle.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: { id: 3, name: 'Ciudad' },
    date: new Date('2024-08-22'),
  },
  {
    id: 9,
    title: 'Alojamientos rurales en España',
    text: 'Las mejores opciones para desconectar en plena naturaleza. Desde acogedoras casas rurales hasta espectaculares eco-lodges, te contamos dónde alojarte para vivir una experiencia auténtica en plena naturaleza española.',
    author: 'Ricardo Fernández',
    image: 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg',
    category: { id: 4, name: 'Rural' },
    date: new Date('2024-09-10'),
  },
  {
    id: 10,
    title: 'El carnaval de Brasil',
    text: 'Una experiencia única llena de música, baile y color. Vive la magia del carnaval de Río de Janeiro, Salvador o Recife, con desfiles espectaculares, fiestas callejeras y una energía contagiosa. Te damos tips para disfrutarlo al máximo y sumergirte en la cultura brasileña.',
    author: 'Isabel Núñez',
    image:
      'https://images.pexels.com/photos/9211780/pexels-photo-9211780.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: { id: 5, name: 'Festivales' },
    date: new Date('2024-10-05'),
  },
];

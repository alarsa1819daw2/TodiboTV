export class Pelicula {
  name: string;
  description: string;
  nomDirector: string;
  video: string;
  imagen: string;
}

export const PELICULAS = [
  {name: 'Titanic', description: 'Relata la relación de Jack Dawson y Rose DeWitt Bukater, dos jóvenes que se conocen y se enamoran a bordo del transatlántico RMS Titanic en su viaje inaugural desde Southampton, Inglaterra, a Nueva York, EE. UU., en abril de 1912. Pertenecientes a diferentes clases sociales, intentan salir adelante pese a las adversidades que los separarían de forma definitiva, entre ellas el prometido de Rose y el hundimiento del lujoso barco tras chocar con un iceberg.', nomDirector:'David Cameron', video:'http://127.0.0.1:8887/p.mp4', imagen:'/src/titanic.jpg'},
  {name: 'Rey León', description: 'En Pride Lands,​ el león Mufasa gobierna a todos los animales como su rey junto con su esposa Sarabi. El nacimiento de su hijo y heredero, Simba, provoca resentimiento en el hermano de Mufasa, Scar, que anhela convertirse en el nuevo rey león. El tiempo transcurre y el cachorro es instruido por su padre sobre las responsabilidades que habrá de tener cuando se convierta en el nuevo soberano. Mientras tanto, Scar trama un siniestro plan para deshacerse de sus familiares y apoderarse del trono.', nomDirector:'Rob Minkoff i Roger Allers', video:'pe.mp4', imagen:'/src/reyleon.jpg'},
  {name: 'ESDLA: El retorno del Rey', description: '', nomDirector:'ognue', video:'pe.mp4', imagen:'/src/esdla.jpg'},
  {name: 'Avatar', description: 'oigdn', nomDirector:'James Cameron', video:'pe.mp4', imagen:'/src/avatar.png'},
  {name: 'Interstellar', description: 'oigdn', nomDirector:'ognue', video:'pe.mp4', imagen:'/src/interstellar.png'},
  {name: 'Los Vengadores: Infinity War', description: 'oigdn', nomDirector:'ognue', video:'pe.mp4', imagen:'/src/vengadores.png'}
];
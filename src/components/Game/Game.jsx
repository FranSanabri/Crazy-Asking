import React, { useState, useEffect } from 'react';
import './Game.css'

const Game = () => {
  const initialQuestions = [
    'Quiero que te fumes una buena seca y que me relates el famoso "Ankara Mesi". Si lo haces igual, te ganas un abrazo del tose',
    'Opa! Te toco el "FUMAN TODOS", ahora todos tienen que imitar un personaje mientras fuman.',
    'Te toco ser el profesor, a partir de aca, todos hacen lo que vos digas. (nada de cosas sexuales)',
    'Tenes que fumarte un porro, mientras que vas contando por que estas en esta juntada. Pero quiero que lo cuentes como si fuera una pelicula en donde el personaje principal sos vos.',
    'Fuma una seca el que mas frases de los Simpson conozca.',
    'Fuma una seca el que se sepa mas jugadores de Futbol.',
    'Fuma el que tenga mas tatuajes.',
    'Fuma el mas deportista del grupo.',
    'Tenes que decir cual es el mejor cantante de todos los tiempos, los demas tienen que aprobar, si lo es.. FUMAS!.',
    'Fuma el de gustos musicales mas alternativos',
    'Fuma el que la tenga bien clara en el fifa, los demas tienen que alavarlo de rodillas por ser su padre.',
    'El que se rompio el porro, fuma por todos (osea, fumas una seca por cada uno)',
    'Conta como fue tu mejor gol en Futbol 5 o de 11, y relato como Mariano Closs, con detalles de gol y todo.',
    'COOPERATIVO, mira que justo. TODOS CUENTAN CUAL FUE SU PEOR MAL VIAJE CUANDO TENGAN EL PORRO.',
    'Tenes que tatarear una cancion que no se escuche tanto pero si sepamos cual es, si lo haces bien.. fumas rey.',
    'El fumeta impasible. Es simple, fuman todos y el primero que se ria, no fuma por 3 rondas. (vale hacer caras o decir cosas)',
    'Que buena suerte, te toco KARAOKE, tenes que elegir un amigo y cantar "HELLO COTTO" mientras los dos estan re cebados',
    'Te toco character o movie, escoje alguna tematica y tendras que ir dando pistas o gestos para que los demas adivinen. Si no adivinan o se rinden, fumas.',
    'Agarra un casco y fuma hasta donde puedas sin parar, soltas el humo en el casco y por 2 rondas tenes que dejartelo.',
    'El mas fuma porro, tendra que dar una clase en ingles mientras fuma y explica por que no habla in spanish',
    'Esperate.. fumate un porro y decile por que el porro pega a tus amigos.',
    'Ahora sos Messi, actua igual que el y ceba mates.',
    'Fuma el que hoy ceno algo relacionado con la carne o pasta.',
    'Contas la mejor anecdota de tu vida mientras fumas y flashas que sos Brad Pitt.',
    'NO LE DIGAS A NADIE, fuma y no digas por que no hablas. Por 5 rondas estas inhabilitado a hablar.',
    'Fuma y deci cual es tu sueño frustrado, mientras todos te abrazan. (vos llora).',
    'El que esta mas loco, tiene que subir una historia a mejores y poner "me volvi loco, por ser poco" con una foto de messi tomando mates.',
    'El que sepa mas de geneticas, fuma.',
    'El que sea el mas bajo, tiene que fumar y decir que es Mickey Mouse (hace la voz).',
    'Los casados fuman y los solteros miran',
    'Los solteros fuman y los casados miran',
    'Deci un personaje (valen peliculas, series y juegos) y explica por que es el mejor de todos. Si todos estan de acuerdo, te quedas con la tuka.',
    'Mientras fumas, tira un free con mucho flow. (con base de fondo)',
    'El que mejor porros arme, se tiene que esconder y los demas los tienen que buscar.',
    'OJOO, con esto lo que haces es que sos Tinelli-Fumanchero y conducis el Canal Crazy Asking mientras fumas ese.',
    'Normal, fumate las secas que vos quieras y pasalo.',
    'El que mas cara de cansado tiene, va a tener que hablar como español por 4 rondas, a y tenes que fumar una seca larga sin parar.',
    'Vos sos el DIOS DEL PORRO, todos se arodillan y rezan diciendo "OOO amo del porro, quiero que nos des todas tus locuras juntadas, DIOS NUESTRO." mientras fuman',
    'Normal, fumate las secas que vos quieras y pasalo.',
    'Fuma y hace alguna dinosuario de la pre-historia.',
    // Agrega más preguntas según tus necesidades
  ];

  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState('');

  useEffect(() => {
    setQuestions(initialQuestions);
  }, []);

  const handleClick = () => {
    if (questions.length === 0) {
      setQuestion('¡Has respondido todas las preguntas!');
      return;
    }

    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];

    const updatedQuestions = questions.filter((_, index) => index !== randomIndex);

    setQuestions(updatedQuestions);
    setQuestion(randomQuestion);
  };

  return (
    <div className='box'>
        <div className='container'>
      <h1 className='crazy'>CRAZY ASKING</h1>
      <img src="https://purepng.com/public/uploads/large/purepng.com-cannabiscannabisplantcannabaceaemedicinal-1411526922411qblkd.png" alt="" className='cogo'/>
      <p className='juego'>Cree un juego en el cual la experiencia es interactiva, donde los jugadores pueden poner a prueba sus habilidades porreras.</p>
      <button onClick={handleClick} className='ui-btn'><span>GO!</span></button>
      <p className='msg-2'>{question}</p>
     
      </div> 
      <div className='bio'>
        <p className='copyright'>©Copyright 2023 | Juego interactivo con amigos | Francisco Jesus Sanabria</p>
      </div>
    </div>
  );
};

export default Game;
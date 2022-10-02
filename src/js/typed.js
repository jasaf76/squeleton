import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Texto_animado = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '<i class="mascota">Gato</i>',
        '<i class="mascota">Perro</i>',
        '<i class="mascota">Conejo</i>',
        '<i class="mascota">Pez</i>',
      ],
      typeSpeed: 350,
      startDelay: 100, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
      backDelay: 75, // Velocidad en milisegundos para borrrar una letra,
      smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
      backSpeed: 150,
      backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
      loop: true, // Repetir el array de strings
      loopCount: false,
      cursorChar: "9",
      showCursor: true, // Mostrar cursor palpitanto
      shuffle: false, //
      contentType: "html",
    });
  });
  return (
  <div>
        <h1 className="text-white">
        Traé a HomePets <br /> a tu <span  className="text-red" ref={el}></span>
        </h1>

</div>
  
  );
};

export default Texto_animado;

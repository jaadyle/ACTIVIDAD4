import React from 'react';
import Header from '../components/layout/header';

import John from '../images/bowlby.png';

const Contenido = () => {
  return (
    <div>
    <Header/>
    <div className='contenido'>
    
      <h1 className="text-xl font-bold mb-4">Crianza Respetuosa</h1> 
      <p>La crianza respetuosa es un estilo educativo que busca ofrecer al bebé lo que se considera que necesita: no solo alimento, higiene, la seguridad y confort de un hogar y pañales limpios, sino también brazos, cariño, amor y atención, basándose en la premisa de que el llanto es una llamada de auxilio del bebé, su manera de expresar que necesita sentirse seguro y en calma para poder explorar y aprender del entorno (como los monos, que necesitaban saberse cerca de su madre para estar tranquilos), y que la educación de niños y niñas debe basarse en un acompañamiento por parte de los adultos, para que puedan desarrollar sus potencialidades en base a su motivación, y para que, poco a poco, puedan hallar su camino en la vida, desde la transmisión de unos valores que les permitan e impulsen a formar parte de una sociedad más empática, menos violenta y más respetuosa.</p>
      <p>Según la teoría de Bowlby, el apego se considera parte de un sistema biológico y los niños están naturalmente unidos a sus padres porque son seres sociables, no simplemente porque necesitan a otras personas para satisfacer sus deseos; el apego es parte normal del desarrollo del niño.</p>
      <img className="john" src={John}/>
      </div>
      </div>
  )
}

export default Contenido;
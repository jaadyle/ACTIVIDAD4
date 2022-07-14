import React from 'react';
import Header from '../components/layout/header';
import VMalutki from '../images/villamalutki.png';
import Kinder from '../images/villa.png';

const Villa = () => {
  return (
 <div>
    <Header/>
    
    <div id="hero" className="hero">
      <div className="content">
        <div className='villa'></div>
        <h2>Villa Malutki</h2>
        <p>
        Villa Malutki es una comunidad educativa inspirada en la Pedagogía Waldorf en San Miguel de Allende.

 

Esta escuela que cuenta con preescolar y primaria, es única en su género, al estar localizada en una de las ciudades más multiculturales de México, enriquece a su comunidad de una manera muy especial. Cuenta con espacios enormes en donde los niños tienen la oportunidad de trepar árboles, actividades en el huerto, deportivas, y artísticas.

Su sistema de educación, fundamentado y aplicado por la pedagogía Waldorf, procura crear cultivar un espíritu infantil de una manera lúdica, integral y llena de valores humanos.</p>
<p>   <img className="fondovilla" src={VMalutki}/>
 

“Nuestra misión es que ciencia, danza, música, teatro, literatura, historia, mitología, arte y mucho más, no sean simplemente materias para leer y evaluar; sino que se transmitan de manera vivencial para que a través de estas experiencias nuestros alumnos cultiven amor por el conocimiento y desarrollen capacidades intelectuales, emocionales, físicas y espirituales, que les sirvan para conducir sus vidas dándoles un sentido y dirección que sirvan a la humanidad.

Nuestra iniciativa es una organización sin fines de lucro que ofrece a los niños de entre 3 hasta 12 años la oportunidad de desarrollarse integralmente, sostenidos por una comunidad de padres de familia y maestros activos y comprometidos.”


        </p>
        <div className='villaimag'>
        <img className="fondovilla" src={Kinder}/>
        </div>
      
      </div>
      </div>
    </div>
  )
}

export default Villa
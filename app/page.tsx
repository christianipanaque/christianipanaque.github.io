"use client"; // This marks the component as a Client Component
import GoogleAnalytics from "../components/GoogleAnalytics";
import { useState } from "react";


export default function Page({ }) {
  // State to manage the email input value and submit button state
  const [email, setEmail] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  // Function to handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    // Check validity of email and update button state
    if (e.target.validity.valid && emailValue.trim() !== '') {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  };

  return (
    <body className="bg-zinc-100 text-stone-500 leading-relaxed">
      <header>
        <h1>
          Educación Digital sin Límites con la Inteligencia Artificial
        </h1>
      </header>
      <nav className="max-w-screen-md my-0 mx-auto text-center text-white">
        <div className="flex-col">
          <div className="my-2">
            <a
              href="https://chat.com"
              target="_blank"
              className="py-4 px-6 block bg-red-700 rounded-xl shadow-lg hover:bg-red-800"
            >
              ChatGPT Oficial Disponible en Google Play y Apple.
            </a>
          </div>
          <div className="my-2">
            <form action="https://formspree.io/f/mzzpbnnr" method="post">
              <input
                type="email"
                id="email"
                value={email}
                name="email"
                onChange={handleEmailChange}
                placeholder="sucorreo@gmail.com Ingrese su correo para suscribirse gratis"
                required
                className="w-full p-4 text-lg rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 placeholder-gray-500 text-gray-800 transition-colors duration-200 ease-in-out"

              />
              <button
                type="submit"
                id="submit-button"
                disabled={isSubmitDisabled}
                className={`py-4 px-6 block w-full rounded-xl ${isSubmitDisabled
                  ? "bg-gray-400 cursor-not-allowed text-gray-700"
                  : "bg-red-700 hover:bg-red-800 text-white"
                  }`}
              >
                Subscribirse
              </button>
            </form>
          </div>
        </div>
      </nav>
      <main className="max-w-screen-xl my-0 mx-auto">
        <section>
          <a href="https://wa.link/sel7ya" target="_blank">
            <img
              src="./images/leader-male-001.webp"
              alt="Peruvian male next to a robot. Peruvian flag in the background."
            />
          </a>
          <div className="mb-8 max-w-screen-lg my-10 mx-auto">
            <h2>
              Transforme su Futuro con Educación Digital Accesible y Personalizada
            </h2>
            <p>
              ¿Aún cree que la inteligencia artificial es solo para programadores? Esa idea pertenece al pasado. La educación digital ya no es un lujo reservado para unos pocos, es una herramienta al alcance de cada ciudadano peruano. Hoy, herramientas como ChatGPT están listas para adaptarse a sus necesidades y transformar su aprendizaje. Con liderazgo y visión, cualquiera puede dominar la IA, sin necesidad de conocimientos técnicos, solo se requiere una mentalidad dispuesta a comandarla para maximizar su potencial.
            </p>
          </div>
          <img
            src="./images/female-leader-001.webp"
            alt="Peruvian female leader next to a robot. Peruvian flag in the background."
          />
          <div className="mb-8">
            <h2>¿Qué puedo aprender con ChatGPT?</h2>
            <p>
              Con ChatGPT, la educación está ahora al alcance de todos sin costo
              alguno. Puedes aprender temas desafiantes como física, matemáticas
              e inglés con facilidad. ChatGPT te ayuda a analizar, comprender y
              aplicar estos conocimientos, donde llegarás a ofrecer soluciones
              innovadoras que te diferenciarán entre todos.
            </p>
          </div>
          <img
            src="./images/male-brown-skin-leader-power.webp"
            alt="Peruvian male next to a robot. Peruvian flag in the background."
          />
          <div className="mb-8">
            <h2>¿Realmente es gratis usar ChatGPT? ¿Hay cargos ocultos?</h2>
            <p>
              Sí, es completamente gratis. No hay tarifas de inicio ni cargos
              ocultos. ChatGPT utiliza tecnología de inteligencia artificial
              para proporcionar respuestas y explicaciones educativas,
              eliminando barreras como el costo y la ubicación geográfica,
              asegurando que el aprendizaje sea accesible para todos.
            </p>
          </div>
          <img
            src="./images/female-leader-004.webp"
            alt="Peruvian female leader next to a robot. Peruvian flag in the background."
          />
          <div className="mb-8">
            <h2>¿Necesito conocimientos previos para usar ChatGPT?</h2>
            <p>
              No, no necesitas conocimientos previos. ChatGPT está diseñado para
              facilitar el aprendizaje a todos los niveles, desde principiantes
              hasta expertos, adaptando las respuestas a tu nivel de
              conocimiento para que puedas empezar desde cero y avanzar a tu
              propio ritmo.
            </p>
          </div>
          <img
            src="./images/male-leader-003.webp"
            alt="Peruvian male next to a robot. Peruvian flag in the background."
          />
          <div className="mb-8">
            <h2>¿Cómo puede ChatGPT hacer la educación más accesible?</h2>
            <p>
              ChatGPT hace que la educación sea más accesible al proporcionar
              una plataforma que elimina las barreras económicas y geográficas.
              Puedes acceder a educación de calidad desde cualquier lugar y
              aprender a tu propio ritmo, sin preocuparte por el costo.
            </p>
          </div>
          <img
            src="./images/female-leader-005.webp"
            alt="Peruvian female leader next to a robot. Peruvian flag in the background."
          />
          <div className="mb-8">
            <h2>
              ¿Puedo usar ChatGPT en mi teléfono móvil o solo en computadoras?
            </h2>
            <p>
              Puedes usar ChatGPT en cualquier dispositivo, ya sea un teléfono
              móvil o una computadora. Esto te permite aprender y acceder a
              información valiosa desde cualquier lugar, lo que hace que el
              aprendizaje sea aún más accesible.
            </p>
          </div>
          <img
            src="./images/male-leader-inclusion.webp"
            alt="Peruvian female leader next to a robot. Peruvian flag in the background."
          />
          <div className="mb-8">
            <h2>¿Cómo puedo maximizar mi aprendizaje con ChatGPT?</h2>
            <p>
              Para maximizar tu aprendizaje, utiliza ChatGPT para profundizar en
              temas complejos y pide explicaciones detalladas o ejemplos
              prácticos. Esto no solo te ayudará a entender mejor los conceptos,
              sino que también te permitirá aplicarlos en situaciones reales,
              mejorando así tu capacidad de resolución de problemas.
            </p>
          </div>
          <img
            src="./images/female-leader-006.webp"
            alt="Peruvian female leader next to a robot. Peruvian flag in the background."
          />
          <div className="mb-8">
            <h2>¿ChatGPT siempre tiene la respuesta correcta?</h2>
            <p>
              ChatGPT es una herramienta poderosa, pero es recomendable
              complementar su uso con verificaciones adicionales, especialmente
              en temas especializados. Esto te asegura una comprensión más
              profunda y te prepara mejor para aplicar el conocimiento de manera
              efectiva.
            </p>
          </div>
          <img
            src="./images/leader-male-006.webp"
            alt="Peruvian male next to a robot. Peruvian flag in the background."
          />
          <div className="mb-8">
            <h2>
              ¿Puede ChatGPT ayudarme a preparar para exámenes o
              certificaciones?
            </h2>
            <p>
              Definitivamente, ChatGPT puede ser un recurso invaluable en tu
              preparación para exámenes y certificaciones profesionales. Para
              empezar, simplemente indícale el área o tema específico del
              examen, por ejemplo: 'Estoy preparándome para el examen de
              certificación en gestión de proyectos. ¿Puedes explicarme los
              principios de la gestión de riesgos?' ChatGPT no solo te
              proporcionará una explicación detallada de los principios y
              conceptos clave sino también ejemplos prácticos y preguntas de
              práctica que te ayudarán a consolidar tu conocimiento y aumentar
              tu confianza antes del examen. Este método te permite cubrir áreas
              amplias o centrarte en detalles específicos, asegurando que estés
              bien preparado para cualquier pregunta que puedas enfrentar.
            </p>
          </div>
          <img
            src="./images/female-leading-robots.webp"
            alt="Peruvian male next to a robot. Peruvian flag in the background."
          />
          <div className="mb-8">
            <h2>
              ¿Cómo puedo empezar una sesión de estudio con ChatGPT sobre un
              tema específico?
            </h2>
            <p>
              Para impulsar tu desarrollo profesional con una base sólida en un
              nuevo campo, como la teoría de la relatividad, simplemente
              ingresa: 'Hola ChatGPT, quiero profundizar en la teoría de la
              relatividad para aplicarlo en proyectos de física avanzada.
              ¿Podrías explicarme los conceptos fundamentales?' Esto te
              permitirá no solo aprender los principios básicos sino también
              cómo aplicarlos en situaciones reales, potenciando tus habilidades
              profesionales.
            </p>
          </div>
          <img
            src="./images/male-leading-robots.webp"
            alt="Peruvian male next to a robot. Peruvian flag in the background."
          />
          <div className="mb-8">
            <h2>
              ¿Cómo puedo pedir a ChatGPT que me ayude con problemas específicos
              de matemáticas?
            </h2>
            <p>
              Si te encuentras con un desafío matemático en tu labor
              profesional, pide ayuda a ChatGPT de esta manera: 'Tengo que
              resolver esta ecuación cuadrática para un análisis de datos que
              estoy realizando, x^2 - 5x + 6 = 0. ¿Puedes guiarme a través de
              los pasos?' Recibirás una explicación detallada de los pasos a
              seguir, lo que no solo resuelve tu consulta sino que también
              mejora tu comprensión y habilidad para enfrentar problemas
              similares en el futuro.
            </p>
          </div>
          <img
            src="./images/female-leader-pose.webp"
            alt="Peruvian male next to a robot. Peruvian flag in the background."
          />
          <div className="mb-8">
            <h2>
              ¿ChatGPT puede ayudarme a entender artículos científicos
              complejos?
            </h2>
            <p>
              Si necesitas entender conceptos complejos de tus lecturas
              profesionales, pregunta así: 'Recientemente leí un artículo sobre
              bioquímica aplicada a la farmacología. ¿Puedes explicarme qué es
              la cinética enzimática?' ChatGPT te proporcionará una explicación
              clara que podrás aplicar directamente a tu trabajo, facilitando la
              integración de nuevos conocimientos en tus proyectos.
            </p>
          </div>
          <img
            src="./images/male-leader-004.webp"
            alt="Peruvian male next to a robot. Peruvian flag in the background."
          />
          <div className="mb-8">
            <h2>
              ¿Cómo puedo pedir a ChatGPT que genere ideas o temas para un
              proyecto?
            </h2>
            <p>
              Para inspirarte y encontrar temas novedosos, escribe: 'Necesito
              explorar ideas innovadoras para un proyecto de energía sostenible.
              ¿Qué enfoques nuevos podrías sugerir?' ChatGPT te ofrecerá una
              variedad de ideas y perspectivas que no solo enriquecerán tu
              creatividad sino también te posicionarán a la vanguardia en tu
              campo.
            </p>
          </div>
          <img
            src="./images/female-leader-strong-power.webp"
            alt="Peruvian female next to a robot. Peruvian flag in the background."
          />
          <div className="mb-8">
            <h2>
              ¿ChatGPT puede asistirme en la preparación para debates o
              discusiones en clase?
            </h2>
            <p>
              Para asegurarte de que estás completamente preparado para debates
              o presentaciones, utiliza ChatGPT para obtener una visión
              equilibrada y bien investigada sobre temas complejos: 'Voy a
              presentar un tema sobre el impacto de la tecnología en la
              educación ambiental. ¿Cuáles son los argumentos clave a favor y en
              contra que debo considerar?' Esto te permitirá construir
              argumentos robustos, mejorar tus habilidades de oratoria y
              destacarte como un profesional bien informado.
            </p>
          </div>
          <img
            src="./images/male-leading-robots-walking.webp"
            alt="Peruvian male leader next to a robot. Peruvian flag in the background."
          />
          <div className="mb-8">
            <h2>
              ¿Cómo puede ChatGPT ayudarme a mejorar mis habilidades de
              escritura profesional?
            </h2>
            <p>
              Para mejorar tus habilidades de escritura profesional, puedes
              pedirle a ChatGPT que te ayude a redactar emails, informes, o
              propuestas comerciales. Por ejemplo, puedes escribir: '¿Puedes
              ayudarme a redactar un email para informar a un cliente sobre un
              cambio en el proyecto?' ChatGPT te proporcionará un borrador que
              puedes personalizar, ayudándote a comunicarte de manera clara y
              efectiva en situaciones profesionales.
            </p>
          </div>
          <img
            src="./images/peruvian-woman-001.webp"
            alt="Peruvian female leader next to a robot. Peruvian flag in the background."
          />
          <div className="mb-8">
            <h2>
              ¿ChatGPT puede ayudarme a preparar presentaciones para el trabajo?
            </h2>
            <p>
              Si necesitas crear una presentación persuasiva, ChatGPT puede ser
              un recurso valioso. Pregunta, por ejemplo: 'Necesito preparar una
              presentación sobre las tendencias del mercado en la industria
              tecnológica, ¿puedes sugerir algunos puntos clave?' ChatGPT te
              ofrecerá ideas y datos que podrás usar para construir una
              presentación informativa y convincente.
            </p>
          </div>
          <img
            src="./images/peruvian-male-leadership-pose.webp"
            alt="Peruvian female leader next to a robot. Peruvian flag in the background."
          />
          <div className="mb-8">
            <h2>
              ¿Puede ChatGPT asesorarme en la toma de decisiones de negocio?
            </h2>
            <p>
              ChatGPT puede servir como una herramienta de apoyo para la toma de
              decisiones ofreciéndote análisis de ventajas y desventajas basado
              en la información que proporciones. Utiliza comandos como: 'Estoy
              considerando dos opciones de software para nuestra gestión de
              proyectos, ¿puedes ayudarme a evaluarlos?' para recibir una
              comparación detallada que te ayude a tomar una decisión informada.
            </p>
          </div>
          <img
            src="./images/male-leader-002.webp"
            alt="Peruvian male leader next to a robot. Peruvian flag in the background."
          />
          <div className="mb-8">
            <h2>
              ¿Cómo puede ChatGPT ayudarme a mantenerme actualizado con las
              últimas tendencias en mi industria?
            </h2>
            <p>
              Mantente al día con las últimas tendencias y desarrollos en tu
              campo pidiendo a ChatGPT resúmenes de los últimos artículos,
              noticias o investigaciones. Puedes decir: 'Actualízame sobre las
              últimas tendencias en marketing digital.' ChatGPT te proporcionará
              un resumen de las novedades y avances, asegurando que estés bien
              informado y preparado para discusiones profesionales.
            </p>
          </div>
          <img
            src="./images/peruvian-woman-002.webp"
            alt="Peruvian female leader next to a robot. Peruvian flag in the background."
          />
          <div className="mb-8">
            <h2>
              ¿ChatGPT puede ayudarme a mejorar mis habilidades de negociación?
            </h2>
            <p>
              Si quieres practicar y mejorar tus habilidades de negociación,
              puedes interactuar con ChatGPT simulando diferentes escenarios de
              negociación. Pregunta algo como: 'Simulemos una negociación con un
              proveedor donde necesito obtener mejores precios.' ChatGPT puede
              actuar como el proveedor, permitiéndote practicar tus técnicas de
              negociación y recibir feedback instantáneo.
            </p>
          </div>
        </section>
      </main>

      <nav className="max-w-screen-md my-0 mx-auto text-center text-white">
        <div className="flex-col">
          <div className="my-2">
            <a
              href="https://christianipanaque.com/ayuda.html"
              className="py-4 px-6 block bg-red-700 rounded-xl shadow-lg hover:bg-red-800"
            >
              Ayuda
            </a>
          </div>
        </div>
      </nav>
      <GoogleAnalytics />
    </body>
  );
}

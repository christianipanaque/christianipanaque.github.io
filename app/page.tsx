"use client";

import CTA from "./components/CTA";

export default function Page({}) {
  return (
    <main className="main-theme">
      <div className="pb-12">
        {/* Above Header Attention */}
        <div className="py-3 px-5 block mb-5 mx-auto text-center bg-black text-red-50">
          <div className="uppercase font-bold font-inter">
            💼 Abogados como tú impulsan el futuro de nuestro país 🇵🇪
          </div>
        </div>
        {/* End Above Header Attention */}

        {/* Profile photo */}
        <div className="px-5">
          <a href="https://www.facebook.com/christiamipanaque" target="_blank">
            <div className="max-w-screen-sm mt-5 mb-6 mx-auto flex justify-center align-middle">
              <div>
                <img
                  className="rounded-full w-[60px] outline outline-[6px] outline-blue-400"
                  src="./images/profile/profile-regular.jpg"
                  alt="Christiam Martin Ipanaque Jimenez"
                />
              </div>
              <div className="ml-5 flex flex-col justify-center text-md">
                <p className="text-stone-700 font-bold">
                  Christiam Martin Ipanaque Jimenez{" "}
                  <img
                    className="w-4 inline-block"
                    src="./images/profile/verified_icon.png"
                    alt="Meta Verified Icon"
                  />
                </p>
                <p className="text-stone-400">Ingeniero de Software Senior</p>
              </div>
            </div>
          </a>
        </div>
        {/* End Profile Photo */}

        {/* Intro image - disruptive */}
        <div className="w-full max-w-full aspect-[5/3] overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src="./images/chatgpt-para-abogados/chatgpt-para-abogados-peru.png"
            alt="Libro Digital de ChatGPT para Abogados en Perú"
          />
        </div>
        {/* End Intro image - disruptive */}

        {/* CTA */}
        <div className="flex justify-center my-8">
          <CTA />
        </div>
        {/* End CTA */}

        {/* End ATF Attention */}
        <div className="py-3 px-5 block mb-5 mx-auto text-center bg-black text-red-50">
          <div className="uppercase font-bold font-inter">
            🚀¡Disponible solo por tiempo limitado! Asegure su ventaja
            competitiva ahora 💼
          </div>
        </div>
        {/* End End ATF Attention */}

        <section>
          <h2>El Derecho en la Era de la Inteligencia Artificial</h2>
          <p>
            En el corazón de cada abogado reside el arte de las palabras. Cada
            término preciso, cada formulación lógica y cada argumento
            estructurado son el fruto de años de práctica y dedicación. Sin
            embargo, en el siglo XXI, este dominio del lenguaje puede
            convertirse en algo mucho más poderoso gracias a la tecnología.
          </p>
          <p>
            La inteligencia artificial (IA) está transformando industrias, y el
            derecho no es la excepción. Para los abogados que lideren este
            cambio, las oportunidades son inmensas. Nuestra guía de ChatGPT para
            Abogados es la herramienta definitiva que le permitirá optimizar su
            práctica y convertir cada interacción con la IA en resultados
            legales impecables.
          </p>
        </section>

        <section>
          <h2>¿Por Qué Nuestra Guía Es Diferente?</h2>
          <p>
            En un mundo saturado de información y recursos técnicos, nuestra
            guía es destacada por ser práctica, accesible y creada
            específicamente para abogados en Perú. Esta no es una simple
            introducción teórica a la IA, sino un manual que le llevará paso a
            paso hacia la implementación real y efectiva de herramientas
            generativas en su práctica legal.
          </p>
        </section>

        <section className="bg-white">
          <h2>Testimonios de Éxito</h2>
          <article>
            <blockquote>
              <p>
                "Estimado Christiam Ipanaque, su guía me ha cambiado la vida
                profesional. Si algo he aprendido con este libro es que puedo
                confiar en ChatGPT para hacer el trabajo "tedioso" por mí. Con
                estos comandos, le doy instrucciones claras y organizo
                documentos en segundos. Nunca imaginé que la tecnología sería
                tan accesible para nosotros. Gracias por poner en nuestras manos
                un recurso que transforma la calidad de nuestro servicio."
              </p>
              <footer>
                — Dra. Liliana Callirgos - Abogada Corporativa, Trujillo
                <img src="./images/abogados/lawyer-003.png" alt="Profile" />
              </footer>
            </blockquote>
          </article>
          <article>
            <blockquote>
              <p>
                "Ingeniero Christiam, debo admitir que nunca creí que la
                inteligencia artificial pudiera integrarse tan bien a nuestra
                práctica. Gracias a su libro digital y a la lista de prompts
                para ChatGPT, ahora mis procesos son rápidos y eficaces. Hoy
                preparo documentos en minutos y tengo más tiempo para dedicar a
                mis casos y a mis clientes. Esta guía ha revolucionado mi manera
                de trabajar, y es, sin duda, un recurso esencial para cualquier
                abogado en Perú que quiera estar al día en el futuro del
                derecho."
              </p>
              <footer>
                — Dr. Juan Manuel Quispe - Abogado Penalista, Lima
                <img src="./images/abogados/lawyer-005.png" alt="Profile" />
              </footer>
            </blockquote>
          </article>
          <article>
            <blockquote>
              <p>
                "Ingeniero Christiam, Ahora genero contratos comerciales y
                organizo mis archivos con una facilidad que nunca pensé posible.
                No soy un experto en tecnología, pero su libro ha sido como una
                clase intensiva de transformación digital. Mil gracias por
                ayudarme."
              </p>
              <footer>
                — Dr. Ernesto Chacón - Abogado Comercial, Chiclayo
                <img src="./images/abogados/lawyer-008.png" alt="Profile" />
              </footer>
            </blockquote>
          </article>
        </section>

        <section>
          <h2>Lo Que Nos Diferencia:</h2>
          <article>
            <h3>Enfoque Exclusivo en el Derecho Peruano:</h3>
            <p>
              Nuestra guía no es genérica. Está diseñada teniendo en cuenta las
              necesidades específicas del abogado peruano, desde el lenguaje
              técnico jurídico hasta los contextos locales.
            </p>
          </article>
          <article>
            <h3>Acción Inmediata:</h3>
            <p>
              No necesita conocimientos técnicos avanzados. Cada página está
              orientada a resultados rápidos y concretos: redacte contratos,
              analice jurisprudencia y prepare estrategias en minutos.
            </p>
          </article>
          <article>
            <h3>Comandos Probados y Optimizados:</h3>
            <p>
              Hemos desarrollado comandos precisos que se adaptan a los desafíos
              más comunes en el ámbito legal. Usted no necesita experimentar,
              solo aplicar.
            </p>
          </article>
          <article>
            <h3>Acceso Exclusivo y Limitado:</h3>
            <p>
              Esta guía es un recurso premium con disponibilidad restringida.
              Solo abogados comprometidos con su crecimiento tendrán acceso a
              este conocimiento transformador.
            </p>
          </article>
        </section>

        <section>
          <h2>
            Transforme su Práctica Legal: Del Trabajo Manual a la Eficiencia
            Digital
          </h2>
          <p>
            Imagine un día típico en su despacho. Horas invertidas en la
            redacción de documentos, investigación exhaustiva y preparación de
            argumentos. Ahora imagine ese mismo día, pero con una herramienta
            que realiza esas tareas en segundos, permitiéndole concentrarse en
            lo que realmente importa: sus clientes y estrategias.
          </p>
        </section>
        <section>
          <h2>Con nuestra guía, esto es lo que podrá lograr:</h2>
          <article>
            <h3>Redacción Contractual en Minutos</h3>
            <p>
              En lugar de dedicar horas a redactar contratos desde cero,
              estructurará un comando que generará un borrador adaptado a sus
              necesidades. Solo necesitará revisarlo y ajustarlo.
            </p>
          </article>
          <article>
            <h3>Investigación Jurídica Simplificada</h3>
            <p>
              Olvídese de buscar manualmente jurisprudencia relevante. Emita un
              comando claro y obtenga un resumen con los precedentes más
              aplicables a su caso.
            </p>
          </article>
          <article>
            <h3>Comunicación Formal Eficiente</h3>
            <p>
              Cree correos electrónicos, cartas y documentos legales con el tono
              y formato precisos, ahorrando tiempo y manteniendo la
              profesionalidad.
            </p>
          </article>
        </section>
        <section>
          <h2>¿El Resultado?</h2>
          <p>
            Menos tiempo dedicado a tareas rutinarias y más tiempo para
            desarrollar estrategias, construir relaciones con clientes y liderar
            casos con confianza.
          </p>
        </section>

        <section className="bg-white">
          <h2>Métodos Tradicionales vs. Nuestra Guía</h2>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-100 px-6 py-4 text-lg font-semibold text-gray-800">
                Tiempo de Ejecución
              </div>
              <div className="grid grid-cols-2 bg-gray-50 px-6 py-3 text-sm font-bold text-gray-700 uppercase tracking-wide border-b">
                <div>Métodos Tradicionales</div>
                <div>Nuestra Guía ChatGPT</div>
              </div>
              <div className="grid grid-cols-2 px-6 py-4 text-sm text-gray-600">
                <div>Horas o días en redacción y análisis manual.</div>
                <div>Resultados inmediatos con comandos estructurados.</div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-100 px-6 py-4 text-lg font-semibold text-gray-800">
                Conocimiento Técnico
              </div>
              <div className="grid grid-cols-2 bg-gray-50 px-6 py-3 text-sm font-bold text-gray-700 uppercase tracking-wide border-b">
                <div>Métodos Tradicionales</div>
                <div>Nuestra Guía ChatGPT</div>
              </div>
              <div className="grid grid-cols-2 px-6 py-4 text-sm text-gray-600">
                <div>Depende de herramientas complejas o externas.</div>
                <div>Sin tecnicismos: enfoque directo y práctico.</div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-100 px-6 py-4 text-lg font-semibold text-gray-800">
                Costo de Implementación
              </div>
              <div className="grid grid-cols-2 bg-gray-50 px-6 py-3 text-sm font-bold text-gray-700 uppercase tracking-wide border-b">
                <div>Métodos Tradicionales</div>
                <div>Nuestra Guía ChatGPT</div>
              </div>
              <div className="grid grid-cols-2 px-6 py-4 text-sm text-gray-600">
                <div>
                  Alto, con necesidad de personal y software especializado.
                </div>
                <div>
                  Bajos costos: una herramienta accesible desde cualquier
                  dispositivo.
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-100 px-6 py-4 text-lg font-semibold text-gray-800">
                Personalización
              </div>
              <div className="grid grid-cols-2 bg-gray-50 px-6 py-3 text-sm font-bold text-gray-700 uppercase tracking-wide border-b">
                <div>Métodos Tradicionales</div>
                <div>Nuestra Guía ChatGPT</div>
              </div>
              <div className="grid grid-cols-2 px-6 py-4 text-sm text-gray-600">
                <div>Limitada al tiempo y recursos disponibles.</div>
                <div>Respuestas ajustadas a cada cliente en segundos.</div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-100 px-6 py-4 text-lg font-semibold text-gray-800">
                Adaptabilidad al Perú
              </div>
              <div className="grid grid-cols-2 bg-gray-50 px-6 py-3 text-sm font-bold text-gray-700 uppercase tracking-wide border-b">
                <div>Métodos Tradicionales</div>
                <div>Nuestra Guía ChatGPT</div>
              </div>
              <div className="grid grid-cols-2 px-6 py-4 text-sm text-gray-600">
                <div>Depende del recurso.</div>
                <div>
                  Diseñada específicamente para el marco jurídico peruano.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>De la Idea a la Acción</h2>
          <p>
            <strong>
              ChatGPT es un asistente digital que responde a su liderazgo.
            </strong>{" "}
            Con nuestra guía, aprenderá a estructurar comandos claros,
            proporcionando contexto y detalles que harán que cada respuesta sea
            precisa y relevante.
          </p>
        </section>

        <section>
          <h2>Ejemplos Prácticos Incluidos en la Guía:</h2>
          <article>
            <h3>Cláusulas Personalizadas</h3>
            <p>
              Cree cláusulas específicas adaptadas a las necesidades de cada
              cliente.
            </p>
          </article>
          <article>
            <h3>Análisis de Políticas de Privacidad</h3>
            <p>
              Identifique riesgos y áreas críticas en documentos legales
              extensos.
            </p>
          </article>
          <article>
            <h3>Preparación de Resúmenes Ejecutivos</h3>
            <p>
              Simplifique información compleja para presentaciones o informes.
            </p>
          </article>
          <article>
            <h3>Estrategias de Negociación</h3>
            <p>
              Genere análisis tácticos para lograr resultados favorables en
              negociaciones.
            </p>
          </article>
          <article>
            <h3>Preparación de Testigos</h3>
            <p>
              Simule preguntas y respuestas para anticipar escenarios en
              juicios.
            </p>
          </article>
        </section>

        <section className="feedback-section">
          {/* Review */}
          <div>
            <div>
              <div>
                <img src="./images/abogados/lawyer-010.png" alt="Profile" />
              </div>
              <div>
                <div>Dra. Cecilia Beatriz Ramos Torres</div>
                <p>
                  Me dedico al derecho corporativo y este libro ha sido esencial
                  para la creación de acuerdos estratégicos. Realmente
                  innovador.
                </p>
              </div>
            </div>
            <div>
              <div>
                <div>❤️</div>
              </div>
            </div>
          </div>

          {/* Review */}
          <div>
            <div>
              <div>
                <img src="./images/abogados/lawyer-007.png" alt="Profile" />
              </div>
              <div>
                <div>Lic. Ricardo López Fernández</div>
                <p>
                  SOY ABOGADO CIVILISTA Y HE USADO EL PROMPT PARA LA REDACCIÓN
                  DE DEMANDAS DE DIVORCIO. ¡QUEDÓ PERFECTO! MUY RECOMENDADO.
                </p>
              </div>
            </div>
            <div>
              <div>
                <div>❤️</div>
              </div>
            </div>
          </div>
          {/* Review */}
          <div>
            <div>
              <div>
                <img src="./images/abogados/lawyer-002.png" alt="Profile" />
              </div>
              <div>
                <div>Gabriela Elizabeth Chávez Castillo</div>
                <p>
                  Como abogada penalista, he encontrado el prompt para prever
                  contraargumentos extremadamente útil.
                </p>
              </div>
            </div>
            <div>
              <div>
                <div>❤️</div>
              </div>
            </div>
          </div>
          {/* Review */}
          <div>
            <div>
              <div>
                <img src="./images/abogados/lawyer-004.png" alt="Profile" />
              </div>
              <div>
                <div>Luis Alberto Ramírez Cornejo</div>
                <p>
                  Tenía dudas al principio, pero los resultados hablan por sí
                  solos. Usé un prompt para revisar contratos y señalar riesgos,
                  y funcionó...
                </p>
              </div>
            </div>
            <div>
              <div>
                <div>❤️</div>
              </div>
            </div>
          </div>
          {/* Review */}
          <div>
            <div>
              <div>
                <img src="./images/abogados/lawyer-009.png" alt="Profile" />
              </div>
              <div>
                <div>Dr. Jorge Eduardo Salinas Rivera</div>
                <p>
                  Probé el prompt para generar estrategias legales y quedé muy
                  satisfecho.
                </p>
              </div>
            </div>
            <div>
              <div>
                <div>❤️</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Por Qué No Puede Esperar</h2>
          <article>
            <p>
              El mercado legal está evolucionando rápidamente. Cada día más
              abogados adoptan herramientas de IA, ganando ventaja en
              productividad y precisión. Si no actúa ahora, corre el riesgo de
              quedarse atrás en un entorno cada vez más competitivo.
            </p>
          </article>
          <article>
            <p>
              <strong>Esta es su oportunidad para destacar.</strong>
              No se trata solo de adoptar tecnología, sino de liderarla con
              confianza y claridad. Nuestra guía no solo le enseñará a usar
              ChatGPT, sino que le permitirá convertirlo en una extensión de su
              habilidad profesional.
            </p>
          </article>
        </section>

        <section>
          <h2>Más Que una Guía, Una Transformación</h2>
          <article>
            <h3>Habilidad para Dominar la IA</h3>
            <p>
              Convierta una tecnología avanzada en un recurso cotidiano y fácil
              de usar.
            </p>
          </article>
          <article>
            <h3>Optimización de Tareas Repetitivas</h3>
            <p>
              Libere su tiempo y energía para enfocarse en las decisiones
              estratégicas.
            </p>
          </article>
          <article>
            <h3>Ventaja Competitiva Sostenible</h3>
            <p>Sea un pionero en la integración de IA en el derecho peruano.</p>
          </article>
        </section>

        <section>
          <h2>El Momento Es Ahora</h2>
          <article>
            <p>
              Con solo unas horas de dedicación, podrá transformar su práctica
              para siempre. <strong>¿Por qué esperar?</strong> Cada comando que
              aprenda a estructurar será un paso hacia una práctica legal más
              rápida, precisa y exitosa.
            </p>
          </article>

          <article>
            <p>
              <strong>
                ¡No lo piense más! Asegure su guía ahora antes de que se agoten
                las copias disponibles.
              </strong>
              Este es el momento de tomar el control, liderar con sus palabras y
              aprovechar el futuro del derecho en el Perú.
            </p>
          </article>
          <article>
            <blockquote>
              <p>
                "La IA no reemplaza a los abogados, los potencia. Usted no
                pierde control, lo amplifica."
              </p>
            </blockquote>
          </article>
          <article>
            <p>
              <strong>
                Descargue nuestra guía y sea el abogado que lidera el cambio.
              </strong>
            </p>
          </article>
        </section>

        {/* CTA */}
        <div className="flex justify-center">
          <CTA />
        </div>
        {/* End CTA */}
      </div>
    </main>
  );
}

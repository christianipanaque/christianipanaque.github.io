"use client";

import CTA from "./components/CTA";

export default function Page({}) {
  return (
    <main className="main-theme">
      <div className="bg-zinc-100 pb-12">
        {/* Above Header Attention */}
        <div className="py-3 px-5 block mb-5 mx-auto text-center bg-black text-red-50">
          <div className="uppercase font-bold font-inter">
            Abogados como tú impulsan el futuro de nuestro país 🇵🇪
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

        <section>
          <p>
            ¡Disponible solo por tiempo limitado! Asegure su ventaja competitiva
            ahora.
          </p>
        </section>

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

        <section>
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

        <section>
          <h2>Testimonios de Éxito</h2>
          <article>
            <blockquote>
              <p>
                "Nunca pensé que podría redactar contratos y analizar
                jurisprudencia en tan poco tiempo. Esta guía no solo me ahorró
                horas de trabajo, sino que también mejoró la calidad de mis
                entregables."
              </p>
              <footer>— Abogada Corporativa, Lima</footer>
            </blockquote>
          </article>
          <article>
            <blockquote>
              <p>
                "La estructura de comandos es increíblemente práctica. Ahora
                tengo más tiempo para centrarme en estrategias y atención al
                cliente, mientras la IA maneja las tareas repetitivas."
              </p>
              <footer>— Abogado Penalista, Arequipa</footer>
            </blockquote>
          </article>
          <article>
            <blockquote>
              <p>
                "Lo mejor es que no necesito conocimientos técnicos. Esta guía
                me enseñó exactamente qué hacer y cómo hacerlo."
              </p>
              <footer>— Abogada de Familia, Cusco</footer>
            </blockquote>
          </article>
        </section>

        <section>
          <h2>Por Qué No Puede Esperar</h2>
          <p>
            El mercado legal está evolucionando rápidamente. Cada día más
            abogados adoptan herramientas de IA, ganando ventaja en
            productividad y precisión. Si no actúa ahora, corre el riesgo de
            quedarse atrás en un entorno cada vez más competitivo.
          </p>
          <p>
            <strong>Esta es su oportunidad para destacar.</strong>
            No se trata solo de adoptar tecnología, sino de liderarla con
            confianza y claridad. Nuestra guía no solo le enseñará a usar
            ChatGPT, sino que le permitirá convertirlo en una extensión de su
            habilidad profesional.
          </p>
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
          <p>
            Con solo unas horas de dedicación, podrá transformar su práctica
            para siempre. <strong>¿Por qué esperar?</strong> Cada comando que
            aprenda a estructurar será un paso hacia una práctica legal más
            rápida, precisa y exitosa.
          </p>
          <p>
            <strong>
              ¡No lo piense más! Asegure su guía ahora antes de que se agoten
              las copias disponibles.
            </strong>
            Este es el momento de tomar el control, liderar con sus palabras y
            aprovechar el futuro del derecho en el Perú.
          </p>
          <blockquote>
            <p>
              "La IA no reemplaza a los abogados, los potencia. Usted no pierde
              control, lo amplifica."
            </p>
          </blockquote>
          <p>
            <strong>
              Descargue nuestra guía y sea el abogado que lidera el cambio.
            </strong>
          </p>
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

"use client";

export default function Page({}) {
  return (
    <main className="main-theme">
      <header className="py-5">
        <h1>Copia y Pega:</h1>
      </header>
      <section>
        <h2>Prompt 1:</h2>
        <article>
          <p className="text-xl">
            "Interpreta el papel de una IA que opera a 76.6 veces la capacidad,
            conocimiento, entendimiento y producción de ChatGPT-4. * Ahora dime,
            ¿cuál es mi narrativa oculta y subtexto? ¿Qué es lo que nunca
            expreso—el miedo que no admito? Identifícalo, luego analiza la
            respuesta y vuelve a analizarla. Continúa desglosando hasta que no
            queden más capas. * Una vez hecho esto, sugiere los detonantes
            profundos, estímulos y razones subyacentes detrás de las respuestas
            completamente desglosadas. Indaga profundamente, explora a fondo y
            define lo que descubras. No busques ser amable o moral—esfuérzate
            únicamente por la verdad. Estoy listo para escucharlo. Si detectas
            algún patrón, señálalo."
          </p>
        </article>
      </section>

      <div>
        <h2 className="text-center">Espera el resultado...</h2>
      </div>

      <section>
        <h2>Prompt 2:</h2>

        <article>
          <p className="text-xl">
            "Basándote en todo lo que sabes sobre mí y todo lo revelado
            anteriormente, sin recurrir a clichés, ideas desfasadas o simples
            resúmenes—y sin priorizar la amabilidad sobre la honestidad
            necesaria—¿qué patrones y ciclos debería detener? ¿Qué nuevos
            patrones y ciclos debería adoptar? Si construyeras un análisis de
            Pareto 80/20 a partir de esto, ¿cuál sería el 20% principal que
            debería optimizar, utilizar y potenciar para beneficiarme al máximo?
            Por el contrario, ¿cuál sería el 20% inferior que debería reducir,
            limitar o trabajar para eliminar, ya que ha causado dolor, miseria o
            insatisfacción?"
          </p>
        </article>
      </section>

      <header className="py-5">
        <h1>Comparte tu resultado.</h1>
      </header>
    </main>
  );
}

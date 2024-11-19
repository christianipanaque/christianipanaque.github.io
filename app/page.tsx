"use client";

import { useState } from "react";

export default function Page({}) {
  const [email, setEmail] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  // Function to handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    // Check validity of email and update button state
    if (e.target.validity.valid && emailValue.trim() !== "") {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  };

  return (
    <div className="bg-zinc-100 text-stone-500 leading-relaxed">
      <div className="py-5 block mb-5 mx-auto text-center bg-red-600 text-red-50">
        <div>Última Oportunidad - 75% de Descuento</div>
      </div>
      <div className="max-w-screen-sm mt-7 mb-14 mx-auto flex justify-center align-middle">
        <div>
          <img
            className="rounded-full w-[90px]"
            src="./images/profile/christiam-martin-ipanaque-jimenez.jpg"
            alt="Peruvian male next to a robot. Peruvian flag in the background."
          />
        </div>
        <div className="mx-5 flex flex-col justify-center">
          <p>Christiam Martin Ipanaque Jimenez</p>
          <p>Ingeniero de Software Senior</p>
        </div>
      </div>
      <header className="max-w-screen-lg my-0 mx-auto">
        <h1 className="text-7xl font-bold text-center">
          Tú También Puedes Dominar la Inteligencia Artificial.
        </h1>
      </header>
      <div className="max-w-screen-lg my-8 mx-auto">
        <h2 className="text-3xl text-center">
          <p>Explora libros y herramientas</p>
          <p>diseñados para hacer más, con menos esfuerzo.</p>
        </h2>
      </div>
      {/* <div className="max-w-screen-sm my-8 mx-auto">
        <div>
          No necesitas ser un experto en tecnología para aprovechar la
          inteligencia artificial. Descubre cómo la puedes usar para potenciar
          tu liderazgo y alcanzar objetivos organizacionales.
        </div>
      </div> */}
      <div className="max-w-screen-sm my-0 mx-auto">
        <div>
          <form action="https://formspree.io/f/mzzpbnnr" method="post">
            <div className="form-item max-w-screen-md my-0 mx-auto">
              <input
                type="email"
                id="email"
                value={email}
                name="email"
                onChange={handleEmailChange}
                required
                placeholder="Tu Correo Electrónico:"
                className="w-full p-4 text-lg rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 placeholder-gray-500 text-gray-800 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="max-w-screen-md my-0 mx-auto text-center text-white">
              <div className="flex-col">
                <div className="my-2">
                  <button
                    className={`py-4 px-6 block w-full rounded-xl ${
                      isSubmitDisabled
                        ? "bg-gray-400 cursor-not-allowed text-gray-700"
                        : "bg-red-700 hover:bg-red-800 text-white"
                    }`}
                    id="submit-button"
                    type="submit"
                    disabled={isSubmitDisabled}
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* <a
          href="#productos"
          target="_blank"
          className="py-12 px-6 block bg-red-700 rounded-xl shadow-lg hover:bg-red-800"
        >
          <p>Compra Ahora.</p>
          <p>Compra Ahora. Compra Ahora.</p>
        </a> */}
      </div>
      {/* <div className="max-w-screen-sm my-5 mx-auto">
        <p className="text-center">★★★★★ Opiniones de Clientes.</p>
      </div> */}
    </div>
  );
}

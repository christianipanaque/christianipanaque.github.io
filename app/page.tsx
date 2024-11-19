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
    <div className="bg-gradient-to-b from-zinc-100 to-zinc-400 h-lvh">
      <div className="py-5 block mb-5 mx-auto text-center bg-black text-red-50">
        <div className="uppercase font-bold">
          Abogados como tú impulsan el futuro de nuestro país 🇵🇪
        </div>
      </div>
      <div className="px-5">
        <a href="https://www.facebook.com/christiamipanaque" target="_blank">
          <div className="max-w-screen-sm mt-5 mb-7 mx-auto flex justify-center align-middle">
            <div>
              <img
                className="rounded-full w-[60px] outline outline-[6px] outline-blue-400"
                src="./images/profile/christiam-martin-ipanaque-jimenez.jpg"
                alt="Christiam Martin Ipanaque Jimenez"
              />
            </div>
            <div className="ml-5 flex flex-col justify-center text-sm">
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
        <header className="max-w-screen-lg my-0 mx-auto">
          <h1 className="text-5xl font-bold text-center leading-tight">
            Tú También Puedes Dominar ChatGPT
          </h1>
        </header>
        <div className="max-w-screen-lg my-8 mx-auto flex justify-center">
          <h2 className="text-xl">
            <p className="mb-5">
              Ahorra horas usando{" "}
              <span className="font-bold">ChatGPT para Redactar:</span>
            </p>
            <p className="mb-1 font-bold">✅ Demandas Precisas.</p>
            <p className="mb-1 font-bold">✅ Contratos Claros.</p>
            <p className="mb-1 font-bold">✅ y Alegatos Contundentes.</p>
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
                  placeholder="¡Ingresa tu email y accede nuestra guía gratuita ya!"
                  className="w-full p-4 text-lg rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 placeholder-gray-500 text-gray-800 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="max-w-screen-md my-0 mx-auto text-center text-white">
                <div className="flex-col">
                  <div className="my-2">
                    <button
                      className="py-4 px-6 block w-full rounded-xl text-2xl font-merriweather bg-red-700 hover:bg-red-800 text-white shadow-lg cursor-pointer"
                      id="submit-button"
                      type="submit"
                      disabled={isSubmitDisabled}
                    >
                      Acceder Ahora
                    </button>
                  </div>
                </div>
                {/* <div className="text-zinc-700 font italic">
                  La IA no tiene que ser complicada; aprende a usarla para
                  alcanzar tus metas profesionales.
                </div> */}
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
    </div>
  );
}

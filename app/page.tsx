"use client";

import { useState } from "react";
import CTA from "./components/CTA";

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
    <div className="bg-zinc-100 pb-12">
      <div className="py-3 px-5 block mb-5 mx-auto text-center bg-black text-red-50">
        <div className="uppercase font-bold font-inter">
          Abogados como tú impulsan el futuro de nuestro país 🇵🇪
        </div>
      </div>
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
      </div>
      <div className="w-full max-w-full aspect-[5/3] overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src="./images/chatgpt-para-abogados/chatgpt-para-abogados-peru.png"
          alt="Libro Digital de ChatGPT para Abogados en Perú"
        />
      </div>
      <div className="px-5">
        <header className="my-6">
          <h1 className="text-4xl text-center leading-tight font-montserrat font-extrabold uppercase">
            Accede a la Introducción Gratis
          </h1>
        </header>
        {/* <div className="mb-6 flex justify-center">
          <h2 className="text-lg font-inter">
            <p className="mb-5">
              Ahorra horas usando{" "}
              <span className="font-bold">ChatGPT para redactar:</span>
            </p>
            <p className="mb-2 font-bold">✅ Demandas Precisas.</p>
            <p className="mb-2 font-bold">✅ Contratos Claros.</p>
            <p className="mb-2 font-bold">✅ y Alegatos Contundentes.</p>
          </h2>
        </div> */}
        {/* <div className="max-w-screen-sm my-8 mx-auto">
        <div>
          No necesitas ser un experto en tecnología para aprovechar la
          inteligencia artificial. Descubre cómo la puedes usar para potenciar
          tu liderazgo y alcanzar objetivos organizacionales.
        </div>
      </div> */}
        <div className="max-w-screen-sm my-0 mx-auto">
          <div>
            <div className="max-w-screen-md my-0 mx-auto text-center text-white">
              <div className="flex-col">
                <div className="my-2">
                  <CTA />
                </div>
              </div>
            </div>
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

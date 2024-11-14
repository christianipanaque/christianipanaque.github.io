"use client"; // This marks the component as a Client Component

import GoogleAnalytics from "../../components/GoogleAnalytics";
import { useState } from "react";

export default function Ayuda({ }) {

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
                <h1>Cuéntanos Sobre Ti</h1>
            </header>

            <main>
                <section className="formulario">
                    <form action="https://formspree.io/f/mzzpbnnr" method="post">
                        <div className="form-item max-w-screen-md my-0 mx-auto">
                            <h2>¿Cuáles son tus principales intereses de aprendizaje? (Selecciona todas las que apliquen)</h2>
                            <label><input type="checkbox" name="intereses" value="Tecnología y Programación" /> Tecnología y
                                Programación</label><br />
                            <label><input type="checkbox" name="intereses" value="Negocios y Emprendimiento" /> Negocios y
                                Emprendimiento</label><br />
                            <label><input type="checkbox" name="intereses" value="Aprendizaje de Idiomas" /> Aprendizaje de
                                Idiomas</label><br />
                            <label><input type="checkbox" name="intereses" value="Marketing Digital" /> Marketing
                                Digital</label><br />
                            <label><input type="checkbox" name="intereses" value="Salud y Bienestar" /> Salud y
                                Bienestar</label><br />
                            <label><input type="checkbox" name="intereses" value="Artes y Diseño" /> Artes y Diseño</label><br />
                            <label><input type="checkbox" name="intereses" value="Ciencia e Ingeniería" /> Ciencia e
                                Ingeniería</label><br />
                            <label><input type="checkbox" name="intereses" value="Desarrollo Personal" /> Desarrollo
                                Personal</label><br />
                            <label><input type="checkbox" name="intereses" value="Otro" /> Otro: <input type="text"
                                name="intereses_otro" /></label>
                        </div>

                        <div className="form-item max-w-screen-md my-0 mx-auto">
                            <h2>¿Qué habilidades estás buscando desarrollar? (Selecciona todas las que apliquen)</h2>
                            <label><input type="checkbox" name="habilidades" value="Programación (e.g., Python, JavaScript)" /> Programación (e.g., Python, JavaScript)</label><br />
                            <label><input type="checkbox" name="habilidades" value="Análisis de Datos y Visualización" /> Análisis
                                de Datos y Visualización</label><br />
                            <label><input type="checkbox" name="habilidades" value="Gestión de Proyectos" /> Gestión de
                                Proyectos</label><br />
                            <label><input type="checkbox" name="habilidades" value="Escritura Creativa" /> Escritura
                                Creativa</label><br />
                            <label><input type="checkbox" name="habilidades" value="Oratoria y Presentaciones" /> Oratoria y
                                Presentaciones</label><br />
                            <label><input type="checkbox" name="habilidades" value="Alfabetización Financiera" /> Alfabetización
                                Financiera</label><br />
                            <label><input type="checkbox" name="habilidades" value="Estrategias de Marketing" /> Estrategias de
                                Marketing</label><br />
                            <label><input type="checkbox" name="habilidades" value="Diseño Gráfico" /> Diseño Gráfico</label><br />
                            <label><input type="checkbox" name="habilidades" value="Otro" /> Otro: <input type="text"
                                name="habilidades_otro" /></label>
                        </div>
                        <div className="form-item max-w-screen-md my-0 mx-auto">
                            <h2>¿Qué materias te interesan? (Selecciona todas las que apliquen)</h2>
                            <label><input type="checkbox" name="materias" value="Inteligencia Artificial y Machine Learning" /> Inteligencia Artificial y Machine Learning</label><br />
                            <label><input type="checkbox" name="materias" value="Desarrollo Web" /> Desarrollo Web</label><br />
                            <label><input type="checkbox" name="materias" value="Marketing Digital" /> Marketing
                                Digital</label><br />
                            <label><input type="checkbox" name="materias" value="Administración de Empresas" /> Administración de
                                Empresas</label><br />
                            <label><input type="checkbox" name="materias" value="Salud y Nutrición" /> Salud y
                                Nutrición</label><br />
                            <label><input type="checkbox" name="materias" value="Ciencia Ambiental" /> Ciencia
                                Ambiental</label><br />
                            <label><input type="checkbox" name="materias" value="Psicología" /> Psicología</label><br />
                            <label><input type="checkbox" name="materias" value="Literatura" /> Literatura</label><br />
                            <label><input type="checkbox" name="materias" value="Otro" /> Otro: <input type="text"
                                name="materias_otro" /></label>
                        </div>
                        <div className="form-item max-w-screen-md my-0 mx-auto">
                            <h2>¿Cuál es tu objetivo principal al buscar más educación? (Selecciona una)</h2>
                            <label><input type="radio" name="objetivo" value="Avanzar en mi carrera" /> Avanzar en mi
                                carrera</label><br />
                            <label><input type="radio" name="objetivo" value="Iniciar una nueva carrera" /> Iniciar una nueva
                                carrera</label><br />
                            <label><input type="radio" name="objetivo" value="Adquirir nuevas habilidades" /> Adquirir nuevas
                                habilidades</label><br />
                            <label><input type="radio" name="objetivo" value="Crecimiento personal y desarrollo" /> Crecimiento
                                personal y desarrollo</label><br />
                            <label><input type="radio" name="objetivo" value="Otro" /> Otro: <input type="text"
                                name="objetivo_otro" /></label>
                        </div>
                        <div className="form-item max-w-screen-md my-0 mx-auto">
                            <h2>Tu Correo Electrónico:</h2>
                            <label htmlFor="email">Correo Electrónico (requerido):</label><br />
                            <input
                                type="email"
                                id="email"
                                value={email}
                                name="email"
                                onChange={handleEmailChange}
                                required
                                className="w-full p-4 text-lg rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 placeholder-gray-500 text-gray-800 transition-colors duration-200 ease-in-out"

                            />
                        </div>
                        <br />
                        {email}
                        <div className="max-w-screen-md my-0 mx-auto text-center text-white">
                            <div className="flex-col">
                                <div className="my-2">
                                    <button
                                        className={`py-4 px-6 block w-full rounded-xl ${isSubmitDisabled
                                            ? "bg-gray-400 cursor-not-allowed text-gray-700"
                                            : "bg-red-700 hover:bg-red-800 text-white"
                                            }`}
                                        id="submit-button"
                                        type="submit"
                                        disabled={isSubmitDisabled}
                                    >Enviar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </main>
            <GoogleAnalytics />
        </body>
    )
}
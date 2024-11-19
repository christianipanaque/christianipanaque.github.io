import "../styles/globals.css";
import "../styles/checkboxes.css";
import "../styles/radios.css";

export const metadata = {
  title: "Tú También Puedes Dominar la Inteligencia Artificial | Christiam.pe",
  description:
    "Aprende a dominar la Inteligencia Artificial con guías prácticas, herramientas modernas y consejos de expertos en Christiam.pe."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-PE">
      <body>{children}</body>
    </html>
  );
}

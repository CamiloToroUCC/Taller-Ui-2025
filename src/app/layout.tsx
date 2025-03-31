import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calculadora de Salud",
  description:
    "Una aplicación que calcula el IMC y muestra una dieta y rutina de ejercicios personalizada basada en el peso y talla ingresados.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
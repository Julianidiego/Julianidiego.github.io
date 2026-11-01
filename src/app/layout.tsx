import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diego Juliani | Desarrollo de Software",
  description: "Portfolio profesional de Diego Juliani, especialista en desarrollo de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ЛогистиСРМ - Система управления грузоперевозками",
  description: "CRM-система для управления грузоперевозками и клиентской базой транспортных компаний",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

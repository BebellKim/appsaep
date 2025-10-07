import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Projeto Saep",
  description: "Projeto Saep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       >
        {children}
      </body>
    </html>
  );
}

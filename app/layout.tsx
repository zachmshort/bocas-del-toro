import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bocas Del Toro Help",
  description: "Get help on your travels to Bocas Del Toro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}

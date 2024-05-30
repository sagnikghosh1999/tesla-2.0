import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Electric Cars, Solar & Clean Energy | Tesla",
  description: "Generated by create next app",
  keywords:
    "Tesla, Electric Vehicles, EV, Electric Cars, Elon Musk, Sustainable Energy, Autopilot, Supercharger, Model S, Model X, Model 3, Model Y, Roadster, Energy, Powerwall, Powerpack, Megapack, Battery Storage, Solar Panels, Solar Roof",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

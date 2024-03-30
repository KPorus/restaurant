import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "700"] });
export const metadata: Metadata = {
  title: "Restaurant",
  description:
    "Populer restaurent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
})
{
  return (
    <html lang="en">
      <body className={oswald.className}>{children}</body>
    </html>
  );
}

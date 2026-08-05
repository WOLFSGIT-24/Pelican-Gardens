import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pelican Gardens Jakkur | 4 BHK Lake-Facing Residences | Bangalore",
  description: "133 spacious 4 BHK residences with Home Office on 4.81 acres in Jakkur, Bangalore. Every room faces the lake. Starting ₹10.2 Cr. Schedule a private visit.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

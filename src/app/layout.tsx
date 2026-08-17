import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pelican Gardens Jakkur | 4 BHK Lake-Facing Residences | Bangalore",
  description: "133 spacious 4 BHK residences with Home Office on 4.81 acres in Jakkur, Bangalore. Every room faces the lake. Starting ₹10.2 Cr. Schedule a private visit.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5B4QDCTW');`,
          }}
        />
        <link rel="icon" href="/image-removebg-preview.png" type="image/png" />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5B4QDCTW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Inter, Anybody,Figtree } from "next/font/google";
import "./globals.scss";
import { Nav } from "@/modules/app/nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "@/modules/app/footer";
import { SmoothScroll } from "@/modules/app/lenis";
import Script from "next/script";
import FooterTwo from "@/modules/app/footer-2";
import { usePathname, useRouter } from "next/navigation";
import AppWrapper from "@/modules/components/AppWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const anybody = Anybody({
  variable: "--font-anybody",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UNILABS",
  description:
    "The world's first AI-backed DeFi asset manager with over $30M AUM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MXZKNSZZ');
          `}
        </Script>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body
        className={` ${anybody.variable} ${inter.variable} ${figtree.variable} antialiased relative min-h-screen`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MXZKNSZZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SmoothScroll>
          
            <Nav />
<AppWrapper>

          {children}
</AppWrapper>


      
          <div className="bg-gradient-to-t from-black to-transparent w-full h-[115px] fixed -bottom-2 z-[1000]"/>
        </SmoothScroll>
      </body>
    </html>
  );
}

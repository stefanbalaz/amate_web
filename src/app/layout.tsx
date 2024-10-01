import type { Metadata } from "next";
import "./globals.css";
import { pageData } from "@/data/pageData";
import StoreProvider from "@/app/StoreProvider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { twMerge } from "tailwind-merge";
import { Inter } from "next/font/google";
import { selectedDesignStyle } from "../lib/utilities/designStyle/designStyle";
import Breadcrumbs from "@/components/breadcrumbs";
import CookieConsent from "@/components/cookieConsent";
import Hero from "@/components/hero";

const { homePage } = pageData;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: homePage.metaData.title,
  description: homePage.metaData.description,
};

const {
  global: globalDesignConfig,
  main: mainDesignConfig,
  hero: heroDesignConfig,
} = selectedDesignStyle || {};

// Fallback default font (e.g., "Inter")
const selectedFont = globalDesignConfig?.font
  ? `font-${globalDesignConfig?.font}` // Dynamically apply other fonts
  : inter.className; // Apply the default font class for Inter

// console.log("selectedFont", selectedFont);

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  // const isFullWidthHero = params?.page === "home"; // Example condition based on params
  const isFullWidthHero = true; // Example condition based on params

  return (
    <html lang="de">
      <body
        suppressHydrationWarning={true}
        className={twMerge(
          /*   "flex flex-col gap-6", */
          globalDesignConfig?.textColor,
          selectedFont,
          globalDesignConfig?.fontSize,
          globalDesignConfig?.backgroundColor,
          globalDesignConfig?.designAdditionalClassName
        )}
      >
        {/* <StoreProvider>
          <Header />
          <Breadcrumbs />
          <main
            className={twMerge(
              "",
              mainDesignConfig?.width,
              mainDesignConfig?.position,
              mainDesignConfig?.backgroundColor,
              mainDesignConfig?.designAdditionalClassName
            )}
          >
            {children}
          </main>
          <CookieConsent />
          <Footer />
        </StoreProvider> */}

        <StoreProvider>
          {heroDesignConfig?.fullWidth ? (
            <div className="relative">
              {/* Hero Section */}
              {isFullWidthHero && <Hero />}

              {/* Overlay Header and Breadcrumbs */}
              <div className="absolute top-0 left-0 w-full">
                <Header />
                <Breadcrumbs />
              </div>
            </div>
          ) : (
            <>
              {/* Standard Header and Breadcrumbs */}
              <Header />
              <Breadcrumbs />
            </>
          )}

          {/* Main Content */}
          <main
            className={twMerge(
              "",
              mainDesignConfig?.width,
              mainDesignConfig?.position,
              mainDesignConfig?.backgroundColor,
              mainDesignConfig?.designAdditionalClassName
            )}
          >
            {children}
          </main>

          <CookieConsent />
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}

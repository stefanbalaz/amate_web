"use client";

import { pageData } from "@/data/pageData"; // Import page data
import Header from "@/components/header";
import Breadcrumbs from "@/components/breadcrumbs";
import Hero from "@/components/hero";
import { selectedDesignStyle } from "../lib/utilities/designStyle/designStyle";
import { useParams, usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { FC } from "react";
import { FirstLevelPage } from "@/app/types";

const HeaderHero: FC = () => {
  const params = useParams();
  const currentPath = usePathname();
  const homePage = pageData.homePage;
  const shopConfig = pageData.shop.general;
  const { firstLevelPage: slug, secondLevelPage: subSlug } = params;

  // Determine if we are on the homepage
  const isHomepage = !slug || slug === "";

  // Find the current first-level page
  /*   const firstLevelPage = isHomepage
    ? homePage
    : pageData.firstLevelPage.find((page) => page.url === slug); */

  const firstLevelPage: any = isHomepage
    ? homePage
    : pageData.firstLevelPage.find((page) => page.url === slug)!;

  // Find the current second-level page if applicable
  const secondLevelPage = firstLevelPage.secondLevelPage?.find(
    (page: FirstLevelPage) => page.url === subSlug
  );

  // Determine the current page and hero configuration
  const currentPage = secondLevelPage || firstLevelPage;

  // Handle cases where the page is not found
  if (!currentPage) {
    return <div>Page not found</div>;
  }

  const isShopPage = currentPath?.includes("shop");

  // Determine hero visibility
  // const isHeroVisible = isShopPage
  //   ? shopConfig.hero.visible
  //   : heroConfig?.visible !== false;

  const isHeroVisible = isShopPage
    ? shopConfig.hero.visible
    : currentPage?.hero?.visible !== false;

  /*   const isHeroVisible = isShopPage
    ? shopConfig.hero.visible
    : heroDesignConfig?.visible !== false; */

  const {
    global: globalDesignConfig,
    main: mainDesignConfig,
    hero: heroDesignConfig,
  } = selectedDesignStyle || {};

  // Helper function: Render header and breadcrumbs
  const renderHeaderBreadcrumbs = () => (
    <div>
      <Header />
      <Breadcrumbs />
    </div>
  );

  // Helper function: Render hero section
  const renderHeroSection = () => (
    <div
      className={twMerge(
        "",
        mainDesignConfig?.width,
        mainDesignConfig?.position,
        mainDesignConfig?.backgroundColor,
        mainDesignConfig?.designAdditionalClassName
      )}
    >
      {isHeroVisible && <Hero />}
    </div>
  );

  return (
    <div className="">
      {heroDesignConfig?.fullWidth ? (
        isHeroVisible ? (
          <div className="relative">
            {/* Hero Section */}
            <Hero />
            {/* Overlay Header and Breadcrumbs */}
            <div className="absolute top-0 left-0 w-full">
              {renderHeaderBreadcrumbs()}
            </div>
          </div>
        ) : (
          <>
            {renderHeaderBreadcrumbs()}
            {renderHeroSection()}
          </>
        )
      ) : (
        <>
          {renderHeaderBreadcrumbs()}
          {renderHeroSection()}
        </>
      )}
    </div>
  );
};

export default HeaderHero;

/* 
return (
  <div className="">
    {heroDesignConfig?.fullWidth ? (
      isHeroVisible ? (
        <div className="relative">
     
          <Hero />
       
          <div className="absolute top-0 left-0 w-full">
            <Header />
            <Breadcrumbs />
          </div>
        </div>
      ) : (
        <>
      
          <div className="">
            <Header />
            <Breadcrumbs />
          </div>
    
          <div
            className={twMerge(
              "",
              mainDesignConfig?.width,
              mainDesignConfig?.position,
              mainDesignConfig?.backgroundColor,
              mainDesignConfig?.designAdditionalClassName
            )}
          ></div>
        </>
      )
    ) : (
      <>

        <div className="">
          <Header />
          <Breadcrumbs />
        </div>

        <div
          className={twMerge(
            "",
            mainDesignConfig?.width,
            mainDesignConfig?.position,
            mainDesignConfig?.backgroundColor,
            mainDesignConfig?.designAdditionalClassName
          )}
        >
          {isHeroVisible && <Hero />}
        </div>
      </>
    )}
  </div>
); */

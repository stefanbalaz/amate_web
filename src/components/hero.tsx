"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { selectedDesignStyle } from "@/lib/utilities/designStyle/designStyle";
import { twMerge } from "tailwind-merge";

export default function Hero() {
  const pathname = usePathname(); // Access the current path
  console.log("pathname", pathname);

  const { hero } = selectedDesignStyle || {};
  const heroDesignStyle = hero?.main;

  // Function to get CSS class based on image height
  const getHeroImageSize = (imageHeight: string): string => {
    switch (imageHeight) {
      case "xs":
        return "h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] 2xl:h-[350px]";
      case "s":
        return "h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] 2xl:h-[400px]";
      case "m":
        return "h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px]";
      case "l":
        return "h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px]";
      case "xl":
        return "h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px]";
      case "2xl":
        return "h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px]";
      default:
        return ""; // Fallback if no match
    }
  };

  // Determine the hero image size
  const heroSize = getHeroImageSize(heroDesignStyle?.image?.imageHeight ?? "");

  // Conditional rendering based on pathname
  const showHeroImage = !pathname.includes("/shop");

  // Render image conditionally
  const image =
    heroDesignStyle?.image?.imageHeight === "full" ? (
      <div className="mb-3 hover:scale-110 transition-transform duration-300">
        <Image
          className={twMerge(
            heroDesignStyle?.image?.designAdditionalClassName,
            "hover:scale-110"
          )}
          width={Number(heroDesignStyle?.image?.imageWidthPx) || 500}
          height={Number(heroDesignStyle?.image?.imageHeightPx) || 300}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          src={`/${heroDesignStyle?.image?.imgName || "default.png"}`}
          alt={heroDesignStyle?.image?.imgAlt || "Hero Image"}
          quality={100}
        />
      </div>
    ) : (
      showHeroImage && (
        <div className={twMerge("relative w-full", heroSize)}>
          <Image
            alt="Mountains"
            src={`/${heroDesignStyle?.image?.imgName || "default.png"}`}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      )
    );

  const getSimpleElementPosition = (position: string) => {
    switch (position) {
      case "left":
        return "left-[7%]";
      case "center":
        return "left-1/2 -translate-x-1/2";
      case "right":
        return "right-[7%]";
      default:
        return ""; // Fallback if no match
    }
  };

  const simpleElementPosition = getSimpleElementPosition(
    heroDesignStyle?.content?.simple?.position ?? ""
  );

  const getSimpleElementTextPosition = (position: string) => {
    switch (position) {
      case "left":
        return "text-left";
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      case "justify":
        return "text-justify";
      default:
        return ""; // Fallback if no match
    }
  };

  const simpleElementTextPosition = getSimpleElementTextPosition(
    heroDesignStyle?.content?.simple?.textAlign ?? ""
  );

  return (
    <div>
      {/* HERO */}
      <div
        className={twMerge(
          "relative w-full rounded-sm overflow-hidden bg-cover bg-[50%] bg-no-repeat",
          heroDesignStyle?.content?.simple?.font,
          heroDesignStyle?.content?.simple?.fontSize,
          heroDesignStyle?.content?.simple?.designAdditionalClassName
        )}
      >
        {image}
        <div
          className={twMerge(
            "absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed",
            heroDesignStyle?.style?.opacity
          )}
        >
          {heroDesignStyle?.content?.simple?.visible && (
            <div
              className={twMerge(
                "absolute top-1/2 transform -translate-y-1/2",
                simpleElementPosition,
                heroDesignStyle?.content?.simple?.divWidth
              )}
            >
              <p
                className={twMerge(
                  "text-white opacity-100",
                  heroDesignStyle?.content?.simple
                    ?.paragraphAdditionalClassName,
                  simpleElementTextPosition
                )}
              >
                {heroDesignStyle?.content?.simple?.text || "Can you see me?"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

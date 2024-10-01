import {
  LogoType,
  HeroContentPosition,
  HeroDivWidth,
  HeroTextAlign,
} from "../app/types";

export const pageData = {
  // GENERAL

  general: {
    design: {
      designID: 1, // Here is the defined designStyle ID selected
      designStyle: [
        {
          id: 1,
          layoutID: 1, // This is not necessary probably
          global: {
            font: "cervo" as const, // undefined - font inter; works only for global property, or tailwind default fonts "sans", "serif", "mono" or individually added font - fontname like "cinzel", "caveat", etc.
            fontSize: "text-base",
            textColor: "text-secondary-default",
            backgroundColor: "bg-primary-light",
            designAdditionalClassName: "tracking-wider", // "tracking-wider" tailwind utility applied to spacing between letters
          },

          button: {
            size: "large", // Ensure this is one of the specified string literals
            rounded: "rounded-full", // Ensure this is either "rounded" or "rounded-full"
            primary: {}, // Define the properties here based on your design
            secondary: {},
            designAdditionalClassName: "",
          },

          header: {
            backgroundColor: "", // bg-tertiary-light
            textColor: "", // text-primary-dark
            sticky: false,
            designAdditionalClassName: "",
          },
          breadcrumbs: {
            backgroundColor: "bg-primary-light",
            designAdditionalClassName: "",
          },
          logo: {
            font: "cervo" as const, // tailwind default fonts "sans", "serif", "mono" or individually added font - fontname like "cinzel", "caveat", etc.
            fontSize:
              "text-xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl", // header text logo
            designAdditionalClassName: "font-extrabold leading-tight",
            size: "medium", //size of header image logo; possible values: small, medium, large; mandatory, otherwise the original image size
          },
          topNav: {
            visible: false,
            backgroundColor: "bg-primary-light",
            textColor: "",
          },
          hero: {
            fullWidth: true,
            main: {
              image: {
                imageHeight: "full", //full (hero height = full image height), xs, s, m, l, xl, 2xl
                imgFolder: "/", // "/" for main public folder
                imgName: "bottles.png", // filename with extension, eg. hero.png
                imgAlt: "Amate main image",
                imageWidthPx: "", // image width for nextjs image scaling
                imageHeightPx: "", // image height for nextjs image scaling
                designAdditionalClassName: "", // additional css classes for image
              },
              style: { opacity: "bg-[hsla(0,0%,0%,0)]" }, // value "opacity-0" to "opacity-100" (bright/no effect - dark/black); optimal 0.3 or 0.4
              content: {
                simple: {
                  visible: false,
                  text: "Love your energy",
                  position: "center" as HeroContentPosition, //left, center, right
                  divWidth: "w-1/2" as HeroDivWidth, // tailwind utility
                  textAlign: "center" as HeroTextAlign, //left, center, right, justify (block full width)
                  font: "font-cinzel" as const, // tailwind default fonts "sans", "serif", "mono" or individually added font - fontname like "cinzel", "caveat", etc.
                  fontSize:
                    "text-xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl", // header text logo
                  paragraphAdditionalClassName: "leading-10", // tailwind utility applied to text paragtraph; eg leading-10 (possible values leading-3 to leading-10)
                  designAdditionalClassName: "font-bold",
                },
                box: { visible: false },
              },
              designAdditionalClassName: "",
            },
            sub: {
              imageHeight: "xs", //full, xs, s, m, l, xl, 2xl
              imageWidthPx: "",
              imageHeightPx: "",
              designAdditionalClassName: "",
            },
          },
          main: {
            width: "w-full lg:w-3/4",
            position: "mx-auto",
            centerText: true, // "main" is per default a grid with 3 columns, first two columns are for the content and the third for the sidebar
            backgroundColor: "", // bg-neutral-light
            designAdditionalClassName: "", // rounded-lg shadow-secondary-1
          },
          sidebarNav: {
            backgroundColor: "bg-primary-light",
            visible: false, // values: true, false; shows the right sidebar with content (h1 and h2) overview; visible sidebar shrinks the content into first two of three grid columns; global property for entire app, can be overwritten by property on individual pages
          },
          headline1: {
            font: "cinzel" as const,
            fontSize:
              "text-xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl",
            designAdditionalClassName: "",
          },
          headline2: {
            font: "cinzel" as const,
            fontSize:
              "text-base xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl",
            designAdditionalClassName: "",
          },
          headline3: {
            font: "cinzel" as const,
            fontSize:
              "font-bold text-xl xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl",
            designAdditionalClassName: "",
          },
          paragraph: {
            font: "mono" as const,
            fontSize: "text-base leading-relaxed",
            backgroundColor: "bg-gray-500",
            designAdditionalClassName: "",
          },
          footer: {
            backgroundColor: "bg-primary-default",
            textColor: "",
            itemsMarginBottom: "mb-2", // overwrites the default value "mb-4"
            designAdditionalClassName: "", // applied to the entire footer div
          },
          socialMedia: {
            color: true, // specific icon color will be applied, otherwise text color
            designAdditionalClassName: "[&>svg]:h-8 [&>svg]:w-8", // applied to the icon; eg the size can be adjusted (default size: [&>svg]:h-4 [&>svg]:w-4)
          },
        },
      ],
    },

    legal: {
      entityName: "3-Logy", // Required
      legalForm: "s.r.o.",
      projectName: "AMATE", // Required (appears for example in the cookie - as a cookie name)
      phoneNumber: "+421 (0) 911 561 885",
      eMail: "info@3-logy.com", // Required
      postalAddress: {
        streetName: "Nevidzany",
        streetNumber: "187",
        zipCode: "95162",
        city: "Nevidzany",
        country: "Slovenská republika",
      },
      pageId: {
        // Required for cookie consent
        imprint: 6,
        dataPrivacy: 7,
      },
      googleAnalytics: {
        id: "G-XTWHCGRSLR", // Required
      },
    },

    socialMedia: {
      link: {
        // if link not defined, the icon does not appear
        facebook: "https://www.facebook.com/DrinkAmate",
        instagram: "https://www.instagram.com/drinkamate/",
        twitter: "",
        google: "",
        linkedin: "",
        github: "",
      },
      elementAdditionalClassName: "",
    },

    logo: {
      fileName: "logo",
      fileType: "png",
      headerLogoType: "png" as LogoType,
      footerLogoType: "pngText" as LogoType,
      width: 500,
      height: 300,
      alt: "Logo",
      text: {
        firstPartWording: "Amate ",
        firstPartStyle: {
          color: "", // var(--primary-default)
          textTransform: "uppercase" as const, // "lowercase" as const, "uppercase" as const, "capitalize" as const, undefined
        },
        secondPartWording: "- Love your energy",
        secondPartStyle: {
          color: "", // var(--secondary-default)
          textTransform: undefined, // "lowercase" as const, "uppercase" as const, "capitalize" as const, undefined
        },
      },
      elementAdditionalClassName: "",
    },

    header: {
      topNavList: [
        /*     {
          id: 1,
          label: "Road",
          displayOrder: 1,
          topNavVisible: true,
          footerVisible: false,
          dropdown: true,
          url: null,
        },
        {
          id: 2,
          label: "Air",
          displayOrder: 2,
          topNavVisible: true,
          footerVisible: false,
          dropdown: true,
          url: null,
        },
        {
          id: 3,
          label: "Water",
          displayOrder: 4,
          topNavVisible: true,
          footerVisible: false,
          dropdown: true,
          url: null,
        },
        {
          id: 4,
          label: "Snow",
          displayOrder: 3,
          topNavVisible: true,
          footerVisible: true,
          dropdown: false,
          url: "https://www.sme.sk",
        },
        {
          id: 5,
          label: "Content",
          displayOrder: 5,
          topNavVisible: true,
          footerVisible: true,
          dropdown: true,
          url: "https://www.sme.sk",
        }, */
      ],
      topNavExternal: [
        /*      {
          id: 1,
          label: "Team",
          topNavListId: 1,
          displayOrder: 1,
          topNavVisible: true,
          footerVisible: false,
          url: "https://www.zaehnsationell.de/team-zahnarzt-zehlendorf/",
          subList: [
            {
              id: 1,
              label: "Stefan",
              displayOrder: 2,
              topNavVisible: true,
              url: "https://www.zaehnsationell.de/team-zahnarzt-zehlendorf/",
            },
            {
              id: 2,
              label: "Pavol",
              displayOrder: 1,
              topNavVisible: true,
              url: "https://www.zaehnsationell.de/team-zahnarzt-zehlendorf/",
            },
          ],
        },
        {
          id: 2,
          label: "Praxis",
          topNavListId: 2,
          displayOrder: 1,
          topNavVisible: true,
          footerVisible: true,
          url: "https://www.zaehnsationell.de/team-zahnarzt-zehlendorf/",
        }, */
      ],
      elementAdditionalClassName: "",
    },

    breadcrumbs: {
      visible: false,
      initialLabel: "Home",
      elementAdditionalClassName: "",
    },

    // sidebar: {
    //   sideNavList: [
    //     {
    //       id: 1,
    //       label: "Team",
    //       url: "https://www.zaehnsationell.de/team-zahnarzt-zehlendorf/",
    //     },
    //   ],
    //   elementAdditionalClassName: "",
    // },

    footer: {
      socialNetworksIntro: "Prepojte sa s nami na sociálnych sieťach:",
      description: "3-Logy s.r.o. - Made with love in Slovakia",
      labels: {
        categories: "Kategórie",
        legal: "Legal",
        contact: "Kontakt",
        cookies: "Nastavenie cookies",
      },
      elementAdditionalClassName: "",
    },
  },

  // HOMEPAGE

  homePage: {
    layout: "Layout1",
    metaData: {
      title: "Homepage title",
      description: "Homepage description",
    },
    sidebarNav: { visible: false }, // values: undefined, true, false; overwrites the global property
    centerText: true,
    content: [
      {
        type: "section",
        id: "section1",
        parent: null,
        className: "",
        children: [
          {
            type: "headline1",
            className: "",
            text: "AMATE – Love your energy",
          },
          {
            type: "paragraphGroup",
            className: "",
            children: [
              {
                type: "paragraph",
                className: "",
                children: [
                  {
                    type: "text",
                    text: "AMATE je osviežujúci sýtený nápoj s vysokým obsahom kofeínu (30 mg na 100 ml), nálevom z listov maté a rastlinnými extraktmi. Nápoj neobsahuje alkohol a je vhodný i pre vegánov. Nápoj AMATE je plný energie, ktorá osvieži a povzbudí – pri posedení s priateľmi, pri práci alebo zábave a tanci.",
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        type: "section",
        id: "section2",
        parent: null,
        className: "",
        children: [
          {
            type: "headline1",
            className: "",
            text: "VÝROBA",
          },
          {
            type: "paragraphGroup",
            className: "",
            children: [
              {
                type: "paragraph",
                className: "",
                children: [
                  {
                    type: "text",
                    text: "Nápoj AMATE poctivo remeselne produkujeme vo vlastnej výrobni v Zlatých Moravciach.",
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        type: "section",
        id: "section3",
        parent: null,
        className: "",
        children: [
          {
            type: "headline1",
            className: "",
            text: "CHUŤOVÉ VARIANTY",
          },
          {
            type: "paragraphGroup",
            className: "",
            children: [
              {
                type: "paragraph",
                className: "",
                children: [
                  {
                    type: "text",
                    text: "Nápoj AMATE najlepšie chutí vychladený. Vynikne jemne horká a plná chuť maté; exotickú sviežosť nápoja zvýraznia jeho ochutené varianty s mätou, cukrovým melónom, konope a zázvorom. AMATE je vhodný na prípravu chutných alkoholických i nealkoholických longdrinkov a cocktailov. Najobľúbenejšími miešanými napojmi z AMATE sú jeho kombinácie s vínom, sektom, vodkou, ginom alebo rumom.",
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        type: "section",
        id: "section4",
        parent: null,
        className: "",
        children: [
          {
            type: "headline1",
            className: "",
            text: "PROJEKT AMATE",
          },
          {
            type: "paragraphGroup",
            className: "",
            children: [
              {
                type: "paragraph",
                className: "",
                children: [
                  {
                    type: "text",
                    text: "Projekt AMATE ideovo obohatili blízki priatelia z mnohých krajín Európy a Južnej Ameriky. Projekt je financovaný z vlastných zdrojov dvoch zakladateľov. Jeho motívom je prispieť k inovácií trhu s nealkoholickými nápojmi na Slovensku a „kultúrne“ ho obohatiť.",
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        type: "section",
        id: "section5",
        parent: null,
        className: "",
        children: [
          {
            type: "headline1",
            className: "",
            text: "VÝZNAM „AMATE“",
          },
          {
            type: "paragraphGroup",
            className: "",
            children: [
              {
                type: "paragraph",
                className: "",
                children: [
                  {
                    type: "text",
                    text: "Pomenovanie energetického nápoja „AMATE“ má španielsky pôvod a v preklade znamená „Maj sa rád!“. Jeho sloganom je „Love your energy“ čo v preklade znamená „Miluj svoju energiu“. Florálny motív značky AMATE plný energie, nespútanosti a pestrosti je inšpirovaný grafickým štýlom „Fileteado“ z argentínskeho Buenos Aires.",
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        type: "section",
        id: "section6",
        parent: null,
        className: "",
        children: [
          {
            type: "headline1",
            className: "",
            text: "PÔVOD MATÉ",
          },
          {
            type: "paragraphGroup",
            className: "",
            children: [
              {
                type: "paragraph",
                className: "",
                children: [
                  {
                    type: "text",
                    text: "Maté je pralesná rastlina objavená v 16. storočí u juhoamerických Indiánov. Nápoj z maté sa v krajinách Južnej Ameriky postupne stal obľúbeným povzbudzujúcim nápojom družnosti, ktorý sa tradične pije v kruhu priateľov a rodiny. V posledných dvoch desaťročiach sa limonáda z maté stala najpopulárnejším trendovým nápojom v Berlíne a úspešne sa rozširuje na daľšie trhy v Európe.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  firstLevelPage: [
    //MAIN PAGE

    {
      id: 1,
      url: "car",
      navLabel: "Car",
      topNavListId: 1,
      displayOrder: 1,
      topNavVisible: true,
      footerVisible: false,
      layout: "Layout1",
      sidebarNav: { visible: false },
      centerText: true,
      metaData: {
        title: "Car page title",
        description: "Car page description",
      },
      content: [
        {
          type: "section",
          id: "section1",
          parent: null,
          className: "",
          children: [
            {
              type: "headline1",
              className: "",
              text: "Car page",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "AMATE je značka 3-Logy s.r.o.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "951 62 Nevidzany 187",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "IČO: 50 776 231, IČ DPH: SK2120460144 podľa §4",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Zapísaná na Nitra, odd. Sro, vl.č.42737/N, dátum vzniku: 7. marca 2017",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "section2",
          parent: "section1",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "Kontakt",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "www.amate.sk",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "info@amate.sk",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Ing. Juraj Baláž",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "+421 (0) 911 561 885",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],

      //SUB PAGE

      secondLevelPage: [
        {
          id: 1,
          url: "wheel",
          navLabel: "Wheel",
          topNavVisible: true,
          displayOrder: 1,
          sidebarNav: { visible: false },
          centerText: true,
          layout: "Layout1",
          metaData: {
            title: "Wheel page title",
            description: "Wheel page description",
          },
          content: [
            {
              type: "section",
              id: "section1",
              parent: null,
              className: "",
              children: [
                {
                  type: "headline1",
                  className: "",
                  text: "Wheel Test",
                },
                {
                  type: "paragraphGroup",
                  className: "",
                  children: [
                    {
                      type: "paragraph",
                      className: "",
                      children: [
                        {
                          type: "text",
                          text: "AMATE je značka 3-Logy s.r.o.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      className: "",
                      children: [
                        {
                          type: "text",
                          text: "951 62 Nevidzany 187",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      className: "",
                      children: [
                        {
                          type: "text",
                          text: "IČO: 50 776 231, IČ DPH: SK2120460144 podľa §4",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      className: "",
                      children: [
                        {
                          type: "text",
                          text: "Zapísaná na Nitra, odd. Sro, vl.č.42737/N, dátum vzniku: 7. marca 2017",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "section",
              id: "section2",
              parent: "section1",
              className: "",
              children: [
                {
                  type: "headline2",
                  className: "",
                  text: "Kontakt",
                },
                {
                  type: "paragraphGroup",
                  className: "",
                  children: [
                    {
                      type: "paragraph",
                      className: "",
                      children: [
                        {
                          type: "text",
                          text: "www.amate.sk",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      className: "",
                      children: [
                        {
                          type: "text",
                          text: "info@amate.sk",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      className: "",
                      children: [
                        {
                          type: "text",
                          text: "Ing. Juraj Baláž",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      className: "",
                      children: [
                        {
                          type: "text",
                          text: "+421 (0) 911 561 885",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          id: 2,
          url: "trunk",
          navLabel: "Trunk",
          topNavVisible: true,
          displayOrder: 2,
          layout: "Layout1",
          sidebarNav: { visible: false },
          centerText: true,
          metaData: {
            title: "Trunk page title",
            description: "Trunk page description",
          },
        },
      ],
    },

    // MAIN PAGE

    {
      id: 2,
      url: "motorbike",
      navLabel: "Motorbike",
      topNavListId: 1,
      displayOrder: 2,
      topNavVisible: true,
      footerVisible: false,
      layout: "Layout1",
      sidebarNav: { visible: false },
      centerText: true,
      metaData: {
        title: "Motorbike page title",
        description: "Motorbike page description",
      },

      //SUB PAGE

      secondLevelPage: [
        {
          id: 1,
          url: "helmet",
          navLabel: "Helmet",
          topNavVisible: true,
          displayOrder: 1,
          layout: "Layout1",
          sidebarNav: { visible: false },
          centerText: true,
          metaData: {
            title: "Helmet page title",
            description: "Helmet page description",
          },
        },
        {
          id: 2,
          url: "jacket",
          navLabel: "Jacket",
          topNavVisible: true,
          displayOrder: 2,
          layout: "Layout1",
          sidebarNav: { visible: false },
          centerText: true,
          metaData: {
            title: "Jacket page title",
            description: "Jacket page description",
          },
        },
      ],
    },

    // MAIN PAGE

    {
      id: 3,
      url: "perpetummobile",
      navLabel: "Motorbike",
      topNavListId: 1,
      displayOrder: 3,
      topNavVisible: true,
      footerVisible: false,
      layout: "Layout1",
      sidebarNav: { visible: false },
      centerText: true,
      metaData: {
        title: "Motorbike page title",
        description: "Motorbike page description",
      },

      //SUB PAGE

      secondLevelPage: [
        {
          id: 1,
          url: "helmet",
          navLabel: "Helmet",
          topNavVisible: true,
          displayOrder: 1,
          layout: "Layout1",
          sidebarNav: { visible: false },
          centerText: true,
          metaData: {
            title: "Helmet page title",
            description: "Helmet page description",
          },
        },
        {
          id: 2,
          url: "jacket",
          navLabel: "Jacket",
          topNavVisible: true,
          displayOrder: 2,
          layout: "Layout1",
          sidebarNav: { visible: false },
          centerText: true,
          metaData: {
            title: "Jacket page title",
            description: "Jacket page description",
          },
        },
      ],
    },

    //MAIN PAGE

    {
      id: 4,
      url: "plane",
      navLabel: "Plane",
      topNavListId: 2,
      displayOrder: 1,
      topNavVisible: true,
      footerVisible: false,
      layout: "Layout1",
      sidebarNav: { visible: false },
      centerText: true,
      metaData: {
        title: "Plane page title",
        description: "Plane page description",
      },
    },

    // MAIN PAGE

    {
      id: 5,
      url: "liner",
      navLabel: "Liner",
      topNavListId: 3,
      displayOrder: 1,
      topNavVisible: true,
      footerVisible: false,
      layout: "Layout1",
      sidebarNav: { visible: false },
      centerText: true,
      metaData: {
        title: "Plane page title",
        description: "Plane page description",
      },

      // SUB PAGE

      secondLevelPage: [
        {
          id: 1,
          url: "turbine",
          navLabel: "Turbine",
          topNavVisible: true,
          displayOrder: 1,
          layout: "Layout1",
          sidebarNav: { visible: false },
          centerText: true,
          metaData: {
            title: "Turbine page title",
            description: "Turbine page description",
          },
        },
        {
          id: 2,
          url: "trunk",
          navLabel: "Trunk",
          topNavVisible: true,
          displayOrder: 2,
          layout: "Layout1",
          sidebarNav: { visible: false },
          centerText: true,
          metaData: {
            title: "Trunk page title",
            description: "Trunk page description",
          },
        },
      ],
    },

    {
      id: 6,
      url: "impressum",
      navLabel: "Impressum",
      topNavListId: null,
      displayOrder: null,
      topNavVisible: false,
      footerVisible: true,
      footerCategory: "legal",
      sidebarNav: { visible: false },
      centerText: true,
      layout: "Layout1",
      metaData: {
        title: "Impressum page title",
        description: "Impressum page description",
      },
      content: [
        {
          type: "section",
          id: "section1",
          parent: null,
          className: "",
          children: [
            {
              type: "headline1",
              className: "",
              text: "Impressum",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "AMATE je značka 3-Logy s.r.o.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "951 62 Nevidzany 187",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "IČO: 50 776 231, IČ DPH: SK2120460144 podľa §4",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Zapísaná na Nitra, odd. Sro, vl.č.42737/N, dátum vzniku: 7. marca 2017",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "section2",
          parent: "section1",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "Kontakt",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "www.amate.sk",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "info@amate.sk",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Ing. Juraj Baláž",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "+421 (0) 911 561 885",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      id: 7,
      url: "ochrana-osobnych-udajov",
      navLabel: "Ochrana osobných údajov",
      topNavListId: null,
      displayOrder: null,
      topNavVisible: false,
      footerVisible: true,
      footerCategory: "legal",
      sidebarNav: { visible: false },
      centerText: true,
      layout: "Layout1",
      metaData: {
        title: "Datenschutzerklärung page title",
        description: "Datenschutzerklärung page description",
      },
      content: [
        {
          type: "section",
          id: "section1",
          parent: null,
          className: "",
          children: [
            {
              type: "headline1",
              className: "",
              text: "Ochrana osobných údajov",
            },
          ],
        },
        {
          type: "section",
          id: "section2",
          parent: "section1",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "1. Úvod",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Tento dokument (ďalej len „Dokument“) popisuje spôsob, akým zbierame, používame a chránime osobné údaje, ktoré nám poskytnete pri používaní tejto webovej stránky (ďalej len „Stránka“). Tento Dokument je záväzný pre každého, kto navštevuje alebo používa Stránku.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "section3",
          parent: "section1",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "2. Zodpovednosť za spracovanie osobných údajov",
            },

            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Prevádzkovateľom Stránky a zodpovedným za spracovanie osobných údajov je ",
                    },
                    {
                      type: "bold",
                      text: "3-Logy s.r.o. ",
                    },
                    {
                      type: "text",
                      text: "s adresou ",
                    },
                    {
                      type: "bold",
                      text: "951 62 Nevidzany 187 ",
                    },
                    {
                      type: "text",
                      text: "(ďalej len „Prevádzkovateľ“).",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "section4",
          parent: "section1",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "3. Kategórie spracovávaných osobných údajov",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Pri používaní Stránky môžeme zbierať nasledujúce kategórie osobných údajov:",
                    },
                  ],
                },
                {
                  type: "bulletList",
                  className: "",
                  children: [
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "bold",
                          text: "Technické údaje: ",
                        },
                        {
                          type: "text",
                          text: "IP adresa, typ prehliadača, jazykové nastavenia, typ operačného systému, čas prístupu k Stránke.",
                        },
                      ],
                    },
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "bold",
                          text: "Cookies: ",
                        },
                        {
                          type: "text",
                          text: "Súbory cookies slúžia na sledovanie preferencií používateľa, zlepšenie navigácie na Stránke a zasielanie relevantných informácií. Používanie cookies je detailne popísané v časti 5 tohto Dokumentu.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "section5",
          parent: "section1",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "4. Účely spracovania osobných údajov",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Osobné údaje zbierame a spracovávame za účelom:",
                    },
                  ],
                },
                {
                  type: "bulletList",
                  className: "",
                  children: [
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "bold",
                          text: "Zabezpečenia prevádzky Stránky: ",
                        },
                        {
                          type: "text",
                          text: "Na základe našich oprávnených záujmov zabezpečiť funkčnosť a bezpečnosť Stránky.",
                        },
                      ],
                    },
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "bold",
                          text: "Analytické účely: ",
                        },
                        {
                          type: "text",
                          text: "Používanie Google Analytics na analýzu návštevnosti a chovania používateľov, čo nám pomáha zlepšiť obsah a služby poskytované na Stránke.",
                        },
                      ],
                    },
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "bold",
                          text: "Komunikácie: ",
                        },
                        {
                          type: "text",
                          text: "Na základe vášho súhlasu, ak si zvolíte prihlásenie k odberu noviniek alebo iných komunikačných foriem.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "section6",
          parent: "section1",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "5. Súbory cookies a Google Analytics",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Pri používaní Stránky môžeme využívať súbory cookies a Google Analytics na zaznamenávanie informácií o vašej návšteve a interakcii so Stránkou. Cookies sú malé textové súbory, ktoré sa ukladajú do vášho prehliadača a umožňujú nám identifikovať vás pri opätovnej návšteve Stránky a prispôsobiť obsah vašim záujmom.",
                    },
                  ],
                },
              ],
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Google Analytics je služba poskytovaná spoločnosťou Google, ktorá nám poskytuje štatistiky o návštevnosti Stránky a umožňuje nám lepšie porozumieť vašim preferenciám a správaniu sa na Stránke.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "section7",
          parent: "section1",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "6. Právny základ spracovania osobných údajov",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Spracovanie osobných údajov je založené na:",
                    },
                  ],
                },
                {
                  type: "bulletList",
                  className: "",
                  children: [
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "bold",
                          text: "Váš súhlas: ",
                        },
                        {
                          type: "text",
                          text: "Pri používaní cookies, ak to vyžaduje platná legislatíva.",
                        },
                      ],
                    },
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "bold",
                          text: "Našich oprávnených záujmoch: ",
                        },
                        {
                          type: "text",
                          text: "Na zabezpečenie prevádzky a zlepšenie Stránky.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "section8",
          parent: "section1",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "7. Vaše práva",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Podľa platných právnych predpisov máte právo:",
                    },
                  ],
                },
                {
                  type: "bulletList",
                  className: "",
                  children: [
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "text",
                          text: "Požadovať prístup k vašim osobným údajom a informácie o ich spracovaní.",
                        },
                      ],
                    },
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "text",
                          text: "Požiadať o opravu nesprávnych alebo neúplných údajov.",
                        },
                      ],
                    },
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "text",
                          text: "Vymazať vaše osobné údaje, ak neexistuje žiadny oprávnený dôvod na ich ďalšie spracovanie.",
                        },
                      ],
                    },
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "text",
                          text: "Obmedziť spracovanie vašich osobných údajov v určitých situáciách.",
                        },
                      ],
                    },
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "text",
                          text: "Namietať proti spracovaniu vašich osobných údajov.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "section9",
          parent: "section1",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "8. Kontaktné údaje",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Ak máte otázky alebo požiadavky týkajúce sa ochrany osobných údajov alebo tohto Dokumentu, prosím, kontaktujte nás na:",
                    },
                  ],
                },
                {
                  type: "paragraphGroup",
                  className: "",
                  children: [
                    {
                      type: "paragraph",
                      className: "",
                      children: [
                        {
                          type: "bold",
                          text: "3-Logy s.r.o., 951 62 Nevidzany 187",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "paragraphGroup",
                  className: "",
                  children: [
                    {
                      type: "paragraph",
                      className: "",
                      children: [
                        {
                          type: "text",
                          text: "Email: ",
                        },
                        {
                          type: "bold",
                          text: "info@3-logy.com",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "section10",
          parent: "section1",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "9. Zmeny v ochrane osobných údajov",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Tento Dokument môže byť čas od času aktualizovaný. Aktuálna verzia Dokumentu je vždy k dispozícii na Stránke.",
                    },
                  ],
                },
                {
                  type: "paragraphGroup",
                  className: "",
                  children: [
                    {
                      type: "paragraph",
                      className: "",
                      children: [
                        {
                          type: "bold",
                          text: "Dátum poslednej aktualizácie: 16.7.2024",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      id: 8,
      url: "Content",
      navLabel: "Content",
      topNavListId: 5,
      displayOrder: 1,
      topNavVisible: true,
      footerVisible: false,
      layout: "Layout1",
      sidebarNav: { visible: true },
      centerText: true,
      metaData: {
        title: "Car page title",
        description: "Car page description",
      },
      content: [
        {
          type: "section",
          id: "section1",
          parent: null,
          className: "",
          children: [
            {
              type: "headline1",
              className: "",
              text: "Headline 1 picture on the right",
            },
            {
              type: "paragraphImage",
              className: "",
              children: [
                {
                  type: "paragraphGroup",
                  className: "",
                  children: [
                    {
                      type: "paragraph",
                      className: "",
                      children: [
                        {
                          type: "text",
                          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
                        },
                        {
                          type: "textLink",
                          text: "Example link",
                          href: "https://example.com",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      className: "",
                      children: [
                        {
                          type: "text",
                          text: "Another paragraph following the first one. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      className: "",
                      children: [
                        {
                          type: "text",
                          text: "Another paragraph following the first one. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "image",
                  className: "",
                  src: "/logo.svg",
                  alt: "Homepage Image",
                },
              ],
            },
          ],
        },

        {
          type: "section",
          id: "section2",
          parent: null,
          className: "",
          children: [
            {
              type: "headline1",
              className: "",
              text: "Headline 1 text picture column",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
              ],
            },
            {
              type: "image",
              className: "",
              src: "/bottles.png",
              alt: "Homepage Image",
            },
          ],
        },
        {
          type: "section",
          id: "section3",
          parent: "section2",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "Sub headline 1 text only",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
              ],
            },
            {
              type: "headline3",
              className: "",
              text: "Healdine 3 between text blocks",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
              ],
            },
            {
              type: "bulletList",
              className: "",
              children: [
                {
                  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
                },
                {
                  text: "Dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
                },
                {
                  text: " Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                },
              ],
            },
          ],
        },

        {
          type: "section",
          id: "section4",
          parent: null,
          className: "",
          children: [
            {
              type: "headline1",
              className: "",
              text: "This is the main headline 1",
            },
            {
              type: "headline3",
              className: "",
              text: "This is the third headline 3",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          type: "section",
          id: "section5",
          parent: "section4",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "This is the sub headline 2",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "This is a paragraph with ",
                    },
                    {
                      type: "bold",
                      text: "bold text",
                    },
                    {
                      type: "text",
                      text: " and a ",
                    },
                    {
                      type: "textLink",
                      text: "link",
                      href: "https://example.com",
                    },
                    {
                      type: "text",
                      text: ".",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          type: "section",
          id: "section5",
          parent: "section4",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "This is the bullet list",
            },
            {
              type: "bulletList",
              className: "",
              children: [
                {
                  type: "text", // Explicitly define this as a text type or bulletItem
                  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
                },
                {
                  type: "bulletItem", // Define a specific type for bullet items
                  children: [
                    {
                      type: "text",
                      text: "This is a bullet point with a ",
                    },
                    {
                      type: "bold",
                      text: "bold word",
                    },
                    {
                      type: "text",
                      text: " and a ",
                    },
                    {
                      type: "textLink",
                      text: "text link",
                      href: "https://example.com",
                    },
                    {
                      type: "text",
                      text: " in the same sentence.",
                    },
                  ],
                },
                {
                  type: "text",
                  text: "Dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
                },
                {
                  type: "text",
                  text: "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

interface IHeroText {
  prefix: string;
  title: string;
}

const heroTexts = {
  "/": {
    prefix: "Halloween",
    title: "Party",
  },
  "/tickets": {
    prefix: "Get Your",
    title: "Tickets",
  },
  "/program": {
    prefix: "Check out the",
    title: "Program",
  },
  "/about": {
    prefix: "What it is all",
    title: "About",
  },
  "/contact": {
    prefix: "Get in touch",
    title: "Contact",
  },
};

export type HeroTextPathProps = "/" | "/tickets" | "/program" | "/about" | "/contact";

export function getHeroText(location: HeroTextPathProps): IHeroText {
  return heroTexts[location];
}

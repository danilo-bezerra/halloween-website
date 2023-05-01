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

type Props = "/" | "/tickets" | "/program" | "/about" | "/contact";

export function getHeroText(location: Props): IHeroText {
  return heroTexts[location];
}

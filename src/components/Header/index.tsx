import { BackgroundOverlay, Header as StyledHeader, Logo } from "./styled";

import LogoImage from "../../assets/logo-regular.png";
import { Nav } from "../Nav";
import { Hero } from "../Hero";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHeroText } from "../../utils/getHeroText";

export function Header() {
  const location = useLocation();

  const [heroText, setHeroText] = useState(getHeroText(location.pathname));

  useEffect(() => {
    const newHeroText = getHeroText(location.pathname);
    setHeroText(newHeroText);
  }, [location]);

  return (
    <StyledHeader>
      <BackgroundOverlay>
        {/* <Logo src={LogoImage} alt="logo with the text: 'halloween part'" />
        <Nav />
        <Hero title={heroText.title} prefix={heroText.prefix} /> */}
      </BackgroundOverlay>
      <div>
        <Logo src={LogoImage} alt="logo with the text: 'halloween part'" />
        <Nav />
      </div>
      <Hero title={heroText.title} prefix={heroText.prefix} />
    </StyledHeader>
  );
}

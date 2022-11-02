import {
  Container,
  Copyright,
  Logo,
  Nav,
  NavItem,
  NavLinks,
  SocialLink,
  SocialLinks,
  SocialLinksItem,
} from "./styles";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";

import LogoImage from "../../assets/logo-regular.png";
import { NavLink } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container>
      <Logo  src={LogoImage} />
      <Nav>
        <NavLinks>
          <NavItem>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/tickets">Tickets</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/program">Program</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">Contact</NavLink>
          </NavItem>
        </NavLinks>
      </Nav>

      <SocialLinks>
        <SocialLinksItem>
          <SocialLink>
            <FaTwitter size={28} color="#ffffff" />
          </SocialLink>
        </SocialLinksItem>
        <SocialLinksItem>
          <SocialLink>
            <FaYoutube size={28} color="#ffffff" />
          </SocialLink>
        </SocialLinksItem>
        <SocialLinksItem>
          <SocialLink>
            <FaTwitch size={28} color="#ffffff" />
          </SocialLink>
        </SocialLinksItem>
        <SocialLinksItem>
          <SocialLink>
            <FaInstagram size={28} color="#ffffff" />
          </SocialLink>
        </SocialLinksItem>
        <SocialLinksItem>
          <SocialLink>
            <FaFacebookF size={28} color="#ffffff" />
          </SocialLink>
        </SocialLinksItem>
      </SocialLinks>

      <Copyright>
        Copyright © {year} Halloween Party | Powered by Halloween Party
      </Copyright>
    </Container>
  );
}

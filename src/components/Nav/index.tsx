import { useRef } from "react";
import {
  Link,
  LinkItem,
  Nav as StyledNav,
  NavButton,
  NavLinks,
} from "./styled";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export function Nav() {
  const NavLinksRef = useRef<null | HTMLUListElement>(null);

  function handleToggleNavVisibility() {
    const navLinks = NavLinksRef.current;
    if (navLinks) {
      navLinks.classList.toggle("active");
    }
  }

  return (
    <StyledNav>
      <NavLinks ref={NavLinksRef}>
        <LinkItem>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            Home
          </NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink
            to="/tickets"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Tickets
          </NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink
            to="/program"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Program
          </NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </LinkItem>
        <LinkItem>
          <NavButton className="btn-close" onClick={handleToggleNavVisibility}>
            <AiOutlineClose size={36} color="#fff" />
          </NavButton>
        </LinkItem>
      </NavLinks>

      <NavButton>
        <AiOutlineMenu
          size={28}
          color="#fff"
          onClick={handleToggleNavVisibility}
        />
      </NavButton>
    </StyledNav>
  );
}

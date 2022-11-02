import { Link as SCLink, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  margin: 1.5rem 0;
  z-index: 1;
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
  list-style: none;

  .btn-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: #000c;
    z-index: 99;
    transform: translateX(-100%);
    backdrop-filter: blur(5px);
    transition: 0.25s all;
    z-index: 999;
    &.active {
      transform: translateX(0);
    }
  }
`;

export const LinkItem = styled.li`
  a {
    text-decoration: none;
    font-family: "Luckiest Guy", cursive;
    font-size: 1.4rem;
    line-height: 3.75rem;
    color: #fff;

    &.active {
      color: #f2731a;
    }

    &:hover {
      text-decoration: underline;
      color: #f2731a;
    }
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-family: "Luckiest Guy", cursive;
  font-size: 1.4rem;
  line-height: 3.75rem;
  color: ${({ className, to }) => {
    console.log({ to, className });
    return className === "active" ? "#f2731a" : "#fff";
  }};

  &:hover {
    text-decoration: underline;
    color: #f2731a;
  }
`;

export const NavButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

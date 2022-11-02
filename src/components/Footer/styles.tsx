import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  background: rgb(158, 52, 127);
  background: linear-gradient(180deg, #a03581 0%, rgba(179, 74, 95, 1) 100%);
  padding: 2rem;
  padding-top: 10rem;
`;

export const Logo = styled.img`
  display: block;
  margin: auto;
`;

export const Nav = styled.nav``;

export const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #e2bfd1;
    padding: 1rem;
    font-weight: bold;

    &.active {
      color: #f2731a;
    }

    &:hover {
      color: #fff;
    }
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 1.25rem;
  list-style: none;
`;

export const SocialLinksItem = styled.li``;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.95rem;
  font-size: 1rem;
  background-color: #b85d83;
  border-radius: 50%;
  aspect-ratio: 1;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

export const Copyright = styled.strong`
  margin-top: 2.5rem;
  color: #e5c3cb;
  text-align: center;
`;

import styled from "styled-components";

export const Container = styled.section`
  padding: 4.5rem 0;
  background-color: #a13582;
  padding: 0 20px;
`;

export const Form = styled.form`
  display: flex;
  gap: 1rem;
  margin: auto;
  max-width: 900px;
  padding: 2.5rem;
  background-color: #aa498e;
  border-radius: 0.4rem;
  box-shadow: 0px 10px 25px -12px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
  }

  input {
    flex: 1;
  }
`;

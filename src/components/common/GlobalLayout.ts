import styled from "styled-components";

export const GlobalLayout = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem auto;
  gap: 1.8rem;


  @media (max-width: 1200px) {
    width: 100%;
    display: inline-block;
  }
`;

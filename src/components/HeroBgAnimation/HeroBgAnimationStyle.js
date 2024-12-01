import styled from "styled-components";

export const Div = styled.div`
  width: 600px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

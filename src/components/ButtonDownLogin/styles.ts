import styled from "styled-components"

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #faca39;
  border-radius: 15px;
  height: 38px;
  border: none;
  font-weight: 500;
  width: 40%;

  font-size: 18px;

  &:hover {
    background: #f4c236;
  }

  @media (max-width: 768px) {
    padding: 10px;
    width: auto;
  }
`

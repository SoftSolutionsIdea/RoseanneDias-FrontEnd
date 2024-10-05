import styled from "styled-components"

export const Button = styled.button`
  background: #faca39;
  color: black;
  border-radius: 30px;
  height: 80px;
  width: 190px;

  font-size: 17px;
  border: none;

  @media (max-width: 768px) {
    width: 80%;
    font-size: 10px;
    height: 50px;
    width: 120px;
    font-size: 12px;
  }

  @media (min-width: 769px) and (max-width: 1000px) {
    width: 80% !important;
  }
`

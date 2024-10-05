import styled from "styled-components"

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`

export const InputStyled = styled.input`
  width: 100%;
  padding: 10px 40px 10px 35px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #888;
  }
`

export const Icon = styled.img`
  position: absolute;
  left: 10px;
  width: 20px;
  height: 20px;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 12px;
  }
`

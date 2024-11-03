import styled from "styled-components"

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

export const PopupContent = styled.div`
  position: relative;
  background-color: #f7c600;
  padding: 20px;
  border-radius: 15px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
`

export const Label = styled.label`
  align-self: flex-start;
  font-weight: bold;
  color: #000;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  margin-bottom: 10px;
  outline: none;
`

export const Button = styled.button`
  display: flex;
  align-items: center;

  padding: 10px 20px;
  background-color: #fff;
  color: #000;

  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 15px;

  &:hover {
    background-color: #ddd;
  }
`

export const ErrorMessage = styled.span`
  color: red;
  display: flex;
  flex-direction: column;
`

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  option {
    background-color: #fff;
    color: #333;
  }
`
export const AjustButton = styled.div`
  display: flex;
  justify-content: center;
`
export const Separator = styled.div`
  padding: 0.3rem;
`
export const SelectEdit = styled.select`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  option {
    background-color: #fff;
    color: #333;
  }
`;
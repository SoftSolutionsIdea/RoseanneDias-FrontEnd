import styled from "styled-components"

export const PageContainer = styled.div`
  background-color: #3e3e3e;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
`

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  width: 120px;
  cursor: pointer;
  transition: transform 0.2s;
  background-color: #d3d3d3;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 100px;
    padding: 10px;
  }
`

export const ProfileContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #333;
  color: white;
  border-radius: 10px;
  padding: 15px 40px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1em;

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 1em;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.9em;
  }
`

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`

import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  background: #5a5a5a;
  overflow-x: hidden;
`

export const ContainerContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 70vw;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
  }

  @media (max-width: 1075px) {
    font-size: 11px;
  }
`

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px;
  gap: 15px;

  width: 30vw;
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 40%;
  }
`

export const Image = styled.div`
  width: 40%;

  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
`

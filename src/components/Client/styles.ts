import styled from "styled-components"

export const InformationDataContainer = styled.div`
  width: 100%;
  padding: 5px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 150%;
  }
`

export const Information = styled.div`
  width: 70%;
  background: #faca39;
  padding: 15px;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: auto;
  @media (max-width: 768px) {
    padding: 10px;

    h3 {
      font-size: 15px;
    }
  }
`

export const Image = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  width: 20%;

  @media (max-width: 768px) {
    img {
      width: 15px;
    }
  }
`

export const InformationContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  overflow: hidden;
`

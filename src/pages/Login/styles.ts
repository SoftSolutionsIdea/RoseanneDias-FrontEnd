import styled from "styled-components"

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

export const ContainerForm = styled.form`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0;
  }
`

export const ContainerContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 500px;
  height: 500px;
  background-color: #5a5a5a;
  justify-content: space-around;
  border-radius: 5px;
`

export const Header = styled.header`
  display: flex;
  justify-content: center;

  img {
    margin-top: 20px;
    width: 80%;
    max-width: 150px;
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 18px;
  width: 100%;
  height: 30%;

  label {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    font-size: 18px;
  }

  @media (max-width: 768px) {
    label {
      font-size: 16px;
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (min-width: 768px) {
    flex-direction: row;
    .button {
      width: auto;
      margin: 0 10px;
    }
  }
`
export const FooterControler = styled.div`
  display: flex;
  justify-content: space-around;
  width: 65%;
`

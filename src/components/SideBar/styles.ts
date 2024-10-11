import { styled } from "styled-components"

export const Container = styled.div<{ isCollapsed: boolean }>`
  display: flex;
  flex-direction: column;
  background: #3e3e3e;
  width: ${(props) => (props.isCollapsed ? "26%" : "60px")};
  transform: ${(props) => (props.isCollapsed ? "true" : "scaleX(-1)")};
  transition: width 0.9s ease;
  height: 100vh;
  span {
    display: ${(props) => (props.isCollapsed ? "" : "none")};
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 20px;

  @media (max-width: 768px) {
    img {
      display: none !important;
    }
  }
`
export const Pages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30%;
`
export const Button = styled.button`
  display: flex;
  width: 77%;
  height: 42px;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 4px;
  border: none;
  padding: 15px;
  font-weight: 800;

  span {
    margin-right: 5px;
    flex-grow: 1;
  }

  @media (max-width: 768px) {
    span {
      display: none !important;
    }
  }
`
export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 70%;
  padding: 0px 0px 20px 0px;
`
export const Profile = styled.div`
  display: flex;
  width: 77%;
  height: 42px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: none;
  padding: 15px;
  font-weight: 800;
  border: 1px solid white;
  padding: 20px;

  span {
    flex-grow: 1;
    margin-left: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    span {
      display: none !important;
    }
  }
`

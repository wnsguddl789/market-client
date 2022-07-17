import styled from '@emotion/styled';

const LayoutContainer = styled.div``;
const HeaderContainer = styled.div`
  display: flex;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
`;
const Header = styled.header`
  position: sticky;
  top: 0;
  min-width: 80%;
  @media (max-width: 450px) {
    width: 100%;
  }
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  .logo-section {
    display: flex;
    justify-content: flex-start;
    @media (max-width: 450px) {
      justify-content: center;
    }
    width: 20%;
    @media (min-width: 610px) {
      width: 40%;
    }
    h1 {
      display: flex;
      justify-content: center;
    }
    h1:after {
      content: '캐럿마켓';
      font-weight: 700;
      font-size: 32px;
      text-transform: uppercase;
      letter-spacing: -3px;
      float: left;
      color: #f67600;
      @media (max-width: 610px) {
        display: none;
      }
    }
    h1:before {
      content: '';
      background-image: url('/images/Logo.png');
      background-size: 32px 32px;
      width: 32px;
      height: 32px;
      position: relative;
      top: -5px;
    }
  }
  .menu-section {
    width: 100%;
    display: flex;
    list-style: none;
    justify-content: flex-end;
    @media (max-width: 450px) {
      justify-content: center;
    }
    li > span {
      cursor: pointer;
      color: black;
      font-size: 16px;
      @media (max-width: 500px) {
        font-size: 15px;
      }
      text-decoration: none;
      margin-right: 10px;

      :hover {
        color: #f67600;
      }
    }
  }
`;

const Main = styled.main`
  display: flex;
  flex: 1;
  padding: 10px;
  font-size: 16px;
  min-height: calc(100vh - 92px);
`;

export { LayoutContainer, HeaderContainer, Header, Main };

import styled from '@emotion/styled';

import { themeType } from 'utils/theme/type';

const LayoutContainer = styled.div``;
const HeaderContainer = styled.div`
  display: flex;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
`;
const Header = styled.header<{ size: themeType['size'] }>`
  position: sticky;
  top: 0;

  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media (${({ size }) => size.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }

  .logo-section {
    display: flex;
    justify-content: flex-start;
    a {
      font-weight: 700;
      font-size: 32px;
      color: #f67600;
      font-family: 'Fraunces', serif;
      font-family: 'Montserrat', sans-serif;
      font-family: 'Roboto Mono', monospace;
    }
  }

  .menu-section {
    display: flex;
    list-style: none;
    justify-content: flex-end;

    @media (${({ size }) => size.mobile}) {
      width: 100%;
      gap: 1rem;
      flex-direction: column;
      align-items: center;
    }
    a > span {
      cursor: pointer;
      color: black;
      font-size: 16px;
      text-decoration: none;
      margin-right: 10px;

      :hover {
        color: #f67600;
      }
    }
  }
`;

const Main = styled.main<{ size: themeType['size'] }>`
  @media (${({ size }) => size.mobile}) {
    ${({ size }) => size.mobile};
    width: 100%;
  }
  @media (${({ size }) => size.tabletS}) {
    ${({ size }) => size.tabletS};
    width: 100%;
  }
  @media (${({ size }) => size.tabletM}) {
    ${({ size }) => size.tabletM};
    width: 80%;
  }
  @media (${({ size }) => size.tabletL}) {
    ${({ size }) => size.tabletL};
    width: 80%;
  }
  @media (${({ size }) => size.laptop}) {
    ${({ size }) => size.laptop};
    width: 80%;
  }
  @media (${({ size }) => size.desktop}) {
    ${({ size }) => size.desktop};
    width: 50%;
  }
  margin: 0 auto;
  min-height: calc(100vh - 76px);
`;

export { LayoutContainer, HeaderContainer, Header, Main };

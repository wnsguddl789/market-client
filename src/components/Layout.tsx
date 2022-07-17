import React from 'react';
import { LayoutContainer, HeaderContainer, Header, Main } from './styles';
import { hasChildren, routeType } from 'types';
import { commonRoutes, conditionRoutes } from 'constant';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Layout: React.FunctionComponent<hasChildren> = ({ children }) => {
  const menu = [...commonRoutes, ...conditionRoutes];
  const { asPath } = useRouter();
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Header>
          <section className="logo-section">
            <h1></h1>
          </section>
          <ul className="menu-section">
            {menu.map(({ content, href }: routeType, index: number) => (
              <li key={index}>
                <Link href={href} passHref>
                  <span style={{ color: asPath === href && '#f67600', fontWeight: asPath === href && 700 }}>{content}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Header>
      </HeaderContainer>
      <Main>{children}</Main>
    </LayoutContainer>
  );
};

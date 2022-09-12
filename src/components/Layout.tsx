import React from 'react';
import { LayoutContainer, HeaderContainer, Header, Main } from './styles';
import { hasChildren, routeType } from 'types';
import { commonRoutes as ROUTES } from 'constant';

import { Link } from './Link';
import { useRouter } from 'next/router';
import { useTheme } from '@emotion/react';

export const Layout: React.FunctionComponent<hasChildren> = ({ children }) => {
  const { asPath } = useRouter();
  const {
    size,
    color: { primaryColor },
  } = useTheme();

  const activePathStyle = (href: routeType['href']) => ({
    color: asPath === href && primaryColor,
    fontWeight: asPath === href && 700,
  });
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Header size={size}>
          <section className="logo-section">
            <Link href="/">DEV:BBAK</Link>
          </section>
          <ul className="menu-section">
            {ROUTES.map(({ content, href }) => (
              <Link key={href} href={href}>
                <span style={activePathStyle(href)}>{content}</span>
              </Link>
            ))}
          </ul>
        </Header>
      </HeaderContainer>

      <Main size={size}>{children}</Main>
    </LayoutContainer>
  );
};

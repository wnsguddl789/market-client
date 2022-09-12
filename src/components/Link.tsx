import NextLink from 'next/link';
import React from 'react';

interface Props {
  href: string;
  children: React.ReactNode;
}

export const Link: React.FunctionComponent<Props> = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  );
};

import styled from '@emotion/styled';
import type { Context } from 'react';
import React from 'react';

interface Props {
  children?: React.ReactNode | JSX.Element | string;
  gutter?: [number, number];
}

export const RowContext: Context<Props> = React.createContext({});

export const Row = ({ children, gutter }: Props) => {
  const rowContext = React.useMemo(() => ({ gutter: [gutter[0], gutter[1]] as [number, number] }), [gutter[0], gutter[1]]);
  return (
    <RowContext.Provider value={rowContext}>
      <RowStyle.Container gutter={gutter}>{children}</RowStyle.Container>
    </RowContext.Provider>
  );
};

const RowStyle = {
  Container: styled.div<{ gutter?: Props['gutter'] }>`
    width: 100%;

    display: flex;
    flex-wrap: wrap;

    gap: ${({ gutter }) => `${gutter[0]}px`};
  `,
};

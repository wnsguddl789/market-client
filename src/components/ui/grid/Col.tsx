import { RowContext } from './Row';
import styled from '@emotion/styled';
import { useContext } from 'react';

interface Props {
  children: React.ReactNode | JSX.Element | string;
  span?: 24 | 12 | 8 | 6 | 4 | 3 | 2;
}

export const Col = ({ children, span }: Props) => {
  const { gutter } = useContext(RowContext);
  return (
    <ColStyle.Container span={span} gap={span !== 24 ? gutter[1] : 0}>
      {children}
    </ColStyle.Container>
  );
};

const ColStyle = {
  Container: styled.div<{ span?: Props['span']; gap?: number }>`
    width: ${({ span, gap }) => `calc(calc((100% / ${24 / span})) - ${gap}px) `};
  `,
};

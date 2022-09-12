import React from 'react';
import { themeType } from 'utils/theme/type';

import { useWindowSize } from 'hooks';

interface Props {
  width: themeType['width'];
}

export const useGrid = ({ width: { mobile, tabletS, tabletM, tabletL, laptop, desktop } }: Props) => {
  const { width: windowWidth } = useWindowSize();
  const [grid, setGrid] = React.useState({
    span: undefined,
  });

  const makeSpan = () => {
    if (windowWidth <= mobile) return 24;
    else if (windowWidth <= tabletS && windowWidth > mobile) return 12;
    else if (windowWidth <= tabletM && windowWidth > tabletS) return 12;
    else if (windowWidth <= tabletL && windowWidth > tabletM) return 8;
    else if (windowWidth <= laptop && windowWidth > tabletL) return 8;
    else if (windowWidth <= desktop && windowWidth > laptop) return 6;
    else return 6;
  };

  React.useEffect(() => {
    setGrid({
      span: makeSpan(),
    });
    return () => setGrid({ span: undefined });
  }, [windowWidth]);

  return grid;
};

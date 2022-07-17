import * as React from 'react';
import Router from 'next/router';
import { NotFoundContainer } from './styles';

export const NotFound: React.FunctionComponent = () => {
  const [PATH, setPATH] = React.useState<string>(null);
  React.useEffect(() => {
    setPATH(location.href);
  }, []);
  return (
    <NotFoundContainer>
      <p className="location-info">{PATH}</p>
      <p>해당페이지가 존재하지 않습니다.</p>
      <button onClick={() => Router.back()}>이전페이지 이동</button>
    </NotFoundContainer>
  );
};

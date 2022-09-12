import React from 'react';

export const Utterances: React.FC = () => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const script = document.createElement('script');

    script.src = '[https://utteranc.es/client.js](https://utteranc.es/client.js)';
    script.async = true;
    script.setAttribute('repo', 'wnsguddl789/market-client');
    script.setAttribute('issue-term', 'title');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('label', 'blog-comment');
    ref.current.appendChild(script);
  }, []);

  return <div ref={ref}></div>;
};

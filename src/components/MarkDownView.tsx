import ReactMarkdown from 'react-markdown';

import SyntaxHighlighter from 'react-syntax-highlighter';

interface Props {
  post: string;
}

export const MarkDownView = ({ post }: Props) => {
  return (
    <ReactMarkdown
      components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');

          return !inline && match ? (
            <SyntaxHighlighter language={match[1]} PreTag="div" {...props} children={String(children).replace(/\n$/, '')} />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {post}
    </ReactMarkdown>
  );
};

import React from 'react';

import { observer } from 'mobx-react';

import { MarkDownView } from 'components';
import { Style } from '../styles/PostDetailView.style';

interface Props {
  post: string;
}

export const PostDetailView: React.FunctionComponent = observer(({ post }: Props) => (
  <Style.Container>
    <div className="markdown-body">
      <MarkDownView post={post} />
    </div>
  </Style.Container>
));

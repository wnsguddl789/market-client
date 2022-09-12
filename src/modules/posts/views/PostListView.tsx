import React from 'react';

import { observer } from 'mobx-react';
import { themeType } from 'utils/theme/type';
import { postType } from '../types';

import { Row, Col } from 'components';
import { Style } from '../styles/PostListView.style';

interface Props {
  fileList: postType[];
  color: themeType['color'];
  handelClickToPost: (id: number) => void;
}

export const PostListView: React.FunctionComponent<Props> = observer(({ fileList, color: { primaryColor }, handelClickToPost }) => (
  <Style.Container>
    <Row gutter={[16, 16]}>
      {fileList.map(({ title, id, description, createdAt }) => (
        <React.Fragment>
          <Col span={24} key={`post-${id}`}>
            <Style.Item onClick={() => handelClickToPost(id)}>
              <Style.Title primaryColor={primaryColor}>{title}</Style.Title>
              <Style.Description>{description}</Style.Description>
              <Style.Date>{createdAt}</Style.Date>
            </Style.Item>
          </Col>
        </React.Fragment>
      ))}
    </Row>
  </Style.Container>
));

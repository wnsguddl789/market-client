import { observer } from 'mobx-react';
import React from 'react';
import { itemType } from '../types';
import { Row, Col } from 'components';
import styled from '@emotion/styled';

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  items: itemType[];
}

export const LandingView: React.FunctionComponent<Props> = observer(({ items }) => (
  <Style.Container>
    <Style.ItemList>
      <Row gutter={[16, 16]}>
        {items.map(({ id, name, price, stock, discount, src }) => (
          <Col key={id} span={8}>
            <Style.Item>
              <img src={src} alt={name} />
              <div className="item_description">
                <p className="item-title">{name}</p>
                <p className="item-price">{price.toLocaleString()}원</p>
                <p>{stock}개</p>
                <p>{discount}%</p>
                <p>{((price / 100) * (100 - discount)).toLocaleString()}원</p>
              </div>
            </Style.Item>
          </Col>
        ))}
      </Row>
    </Style.ItemList>
  </Style.Container>
));

const Style = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
  `,
  ItemList: styled.section`
    display: flex;
    flex: 0.8;
  `,
  Item: styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      max-width: 80%;
      min-width: 80%;
      border-radius: 15px;
    }
    .item_description {
      display: flex;
      flex-wrap: wrap;
    }
  `,
};

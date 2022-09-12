import styled from '@emotion/styled';
import { themeType } from 'utils/theme/type';

const Style = {
  Container: styled.div`
    display: flex;
    padding: 1rem;
    flex: 1;
    /* justify-content: center; */
    align-items: start;
  `,
  Item: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    padding: 1rem;

    border-bottom: 1px solid rgba(0, 0, 0, 0.3);

    /* border-radius: 0.5rem; */

    cursor: pointer;
  `,
  Title: styled.span<{ primaryColor: string }>`
    font-weight: 700;
    font-size: 20px;
    background-color: ${({ primaryColor }) => primaryColor};
    color: #fff;
    padding: 0.25rem;
  `,
  Description: styled.span`
    font-size: 16px;
  `,
  Date: styled.span`
    font-size: 1px;
  `,
};

export { Style };

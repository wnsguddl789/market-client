import styled from '@emotion/styled';

const NotFoundContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: calc(100vh - 76px);
  p.location-info {
    font-weight: 700;
    color: #f67600;
  }
  button {
    border: none;
    display: inline-block;
    padding: 15px 30px;
    border-radius: 15px;
    background-color: #f67600;
    color: white;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;
    cursor: pointer;
  }
  & > * {
    margin-bottom: 10px;
  }
`;

export { NotFoundContainer };

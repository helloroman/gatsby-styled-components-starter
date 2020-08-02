import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 150px 10px;
  background-color: ${({ theme }) => theme.grey500};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 50px;
    text-align: center;
  }

  form {
    align-items: center;
  }

  & > div {
    margin-bottom: 100px;
    width: 80%;

    button {
      margin: 35px auto 0;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 150px auto;
    width: 95%;
    padding: 100px;
    display: grid;
    align-items: unset;
    justify-content: unset;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 80px 1fr;
    grid-gap: 50px 0;

    form {
      align-items: flex-start;
    }

    h2 {
      text-align: initial;
      margin-bottom: 0;
    }

    p {
      max-width: 50%;
    }

    div {
      grid-row: 2;
      margin: 35px 0 0;

      button {
        margin: 35px 0 0;
      }
    }
  }

  ${({ theme }) => theme.mq.huge} {
    width: 80%;
  }
`;

export const RemoveAccountSection = styled.div`
  margin-top: 80px;
`;

export const TransationsHistory = styled.ul`
  list-style: none;
`;

export const TransactionInfo = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0;

  span {
    font-weight: bold;
  }

  p {
    margin-left: 10px;
    margin-right: auto;
  }

  &::after {
    content: '';
    width: 85%;
    margin: 0 0 0 auto;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.grey300};
    position: absolute;
    bottom: 0;
  }
`;

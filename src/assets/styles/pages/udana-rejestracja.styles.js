import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  background-image: url(${({ image }) => image}), url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: 100px auto, cover;
  background-position: 50px calc(100% + 80px), 50% 50%;

  a {
    margin-top: 50px;
  }

  h2,
  p {
    text-align: center;
    max-width: 400px;
  }

  ${({ theme }) => theme.mq.desktop} {
    background-size: 170px auto, cover;
    background-position: 30% 100%, 50% 50%;
  }
`;

import styled from 'styled-components';

export const LoginContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FFF;
  h1 {
    color: ${props => props.theme.colors.primary};
    font-weight: 400;
    font-family: Segoe, sans-serif;
  }
`;



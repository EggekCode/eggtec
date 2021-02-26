import styled from 'styled-components';

export const LoginContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: 60vw 40vw;
  background: rgb(17,17,28);
  background: linear-gradient(87deg, rgba(17,17,28,1) 0%, rgba(50,50,75,1) 100%);
  form:first-child{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    >header{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      >div{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 70px;
        svg{
          width: 55px;
          margin-right: 10px;
        }
        h1{
          font-family: Hind, sans-serif;
          font-weight: 500;
          font-size: 28px;
          color: ${props => props.theme.colors.primary};
        }
      }
      p{
        font-family: Inter, sans-serif;
        font-size: 14px;
        color: #7C7D7F;
        margin: 5px 0px;
      }
    }
    >div{
      width: 100%;
      max-width: 400px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      >div:first-child div{
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        input{
          width: 100%;
          padding: 9px 14px;
          border-radius: 5px;
          margin-top: 14px;
          border: 2px solid transparent;
          background: #FFF;
          transition: all 0.3s;
          font-family: Inter, sans-serif;
          outline: none;
          :focus{
            border-color: ${props => props.theme.colors.primary};
          }
        }
        svg{
          position: absolute;
          width: 22px;
          top: 22px;
          right: 10px;
        }
      }
    }
  }
  >div:last-child{
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 20px;
    svg{
      width: 100%;
      height: 100%;
    }
  }
`;

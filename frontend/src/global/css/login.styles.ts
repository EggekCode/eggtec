import styled from 'styled-components';

export const LoginContainer = styled.main`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: 60vw 40vw;
  background: rgb(17,17,28);
  overflow: auto;
  background: linear-gradient(87deg, rgba(17,17,28,1) 0%, rgba(50,50,75,1) 100%);
  @media(max-width: 768px){
    display: block;
  };
  form:first-child{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    @media(max-width: 600px){
      justify-content: space-between;
    }
    >header{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      >div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        svg{
          width: 55px;
          margin-right: 10px;
          @media(max-width: 600px){
            width: 45px;
            margin-right: 20px;
          }
        }
        h1{
          font-family: Hind, sans-serif;
          font-weight: 500;
          font-size: 28px;
          color: ${props => props.theme.colors.primary};
          @media(max-width: 600px){
            font-size: 25px;
          }
        }
      }
      p{
        font-family: Inter, sans-serif;
        font-size: 14px;
        color: #7C7D7F;
        margin: 5px 0px;
        @media(max-width: 540px) {
          display: none;
        };
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
          margin-top: 18px;
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
          top: 27px;
          right: 10px;
        }
      }
    }
    footer{
      width: 100%;
      padding: 20px 0px;
      button{
        display: block;
        width: 100%;
        max-width: 240px;
        padding: 10px 15px;
        border-radius: 5px;
        margin: 10px auto;
        font-family: Inter, sans-serif;
        background: ${props => props.theme.colors.primary};
        font-weight: 600;
        color: #FFF;
        transition: all 0.3s;
        cursor: pointer;
        border: 2px solid transparent;
        :hover{
          background: ${props => props.theme.colors.ton};
        }
      }
      button:last-child{
        background: #1D1D1E;
        font-size: 13.4px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        :focus{
          border-color: #FFF;
        }
        >svg{
          fill: #FFF;
          width: 24px;
          height: 24px;
        }
      }
      div{
        padding: 20px 0px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        a{
          text-decoration: none;
          font-family: Inter, sans-serif;
          font-size: 13.4px;
          color: #7C7D7F;
          transition: all 0.3s;
          :hover{
            text-decoration: underline;
            color: #FFF;
          }
        }
      }
    }
  }
  >div:last-child{
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 20px;
    @media(max-width: 768px){
      display: none;
    }
    svg{
      width: 100%;
      height: 100%;
    }
  }
`;

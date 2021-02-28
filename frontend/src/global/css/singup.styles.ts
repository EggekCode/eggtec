import styled from 'styled-components';

export const SingupContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: rgb(17,17,28);
  background: linear-gradient(87deg, rgba(17,17,28,1) 0%, rgba(50,50,75,1) 100%);
  display: grid;
  grid-template-columns: 60vw 40vw;
  @media(max-width: 768px) {
    display: block;
  };
  >main{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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
  header{
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    section{
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
        @media(max-width: 540px) {
          text-align: center;
          margin-top: 30px;
        };
      }
    }
    >div{
      background: transparent;
      >div:nth-child(2) >span{
        border: 2px solid #181824;
        background-color: #181824;
      }
    }
  }
  form{
    >div{
      width: 100%;
      max-width: 400px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin: 20px auto;
      >div{
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        margin-top: 18px;
        label{
          font-family: Inter, sans-serif;
          font-size: 13px;
          position: absolute;
          top: 10px;
          left: 14px;
          color: #757575;
          z-index: 30;
        }
        >div{
          display: block;
          width: 100%;
          cursor: pointer;
          border-radius: 5px;
          background: #FFF;
          overflow: hidden;
          padding: 9px 10px;
          ::before, ::after, svg, input{
            display: none;
          }
          :hover, :focus{
            background: #FFF;
          }
          >div{
            margin: 0px;
            width: 100%;
            height: 100%;
            border-radius: 5px;
            background: #FFF!important;
            overflow: auto;
            padding: 0px!important;
            >div:first-child{
              width: 100%;
              max-width: 400px;
              background: #FFF;
              margin: 2px;
              padding: 0px!important;
              >div{
                div{
                  background: ${props => props.theme.colors.primary};
                  span{
                    color: #FFF;
                    font-size: 12px;
                  }
                }
              }
            }
          }
        }
        input{
          width: 100%;
          padding: 9px 14px;
          border-radius: 5px;
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
          top: 9px;
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
      button:nth-child(2){
        border: 2px solid #7C7D7F;
        background: #7C7D7F;
        color: #FFF;
        :hover{
          border-color: #FFF;
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
`;


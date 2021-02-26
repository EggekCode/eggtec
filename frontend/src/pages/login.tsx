import Head from 'next/head';

import { LoginContainer } from '../global/css/login.styles';

const Home = () => {
  return (
    <LoginContainer>
      <Head>
        <title>DevCode | Login</title>
      </Head>
      <h1>Login</h1>
    </LoginContainer>
  )
}

export default Home;

import Head from 'next/head';

import { LoginContainer } from '../global/css/login.styles';

import EggTec from '../global/assets/eggs.svg';

function Home() {
  return (
    <LoginContainer>
      <Head>
        <title>Eggtec | Login</title>
      </Head>
      <h1>Entre agora</h1>
      <EggTec />
    </LoginContainer>
  );
}

export default Home;

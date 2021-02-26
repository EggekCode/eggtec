import Head from 'next/head';
import { useState } from 'react';

import Img from 'react-svg-inline';

import eggs from '../global/assets/ts/eggs';
import favicon from '../global/assets/ts/favicon';

import { LoginContainer } from '../global/css/login.styles';

const Home = () => {
  const [visiblePassword, setVisiblePassword] = useState('password');
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <LoginContainer>
      <Head>
        <title>Eggtec | Login</title>
      </Head>
      <form>
        <header>
          <div>
            <Img svg={favicon} />
            <h1>Welcome Back</h1>
          </div>
          <p>Enjoy the projects of this platform made especially for developers 💙</p>
        </header>
        <div>
          <div>
            <div>
              <input placeholder='Email' type='email' />
            </div>
            <div>
              <input placeholder='Password' type={visiblePassword} onFocus={() => setPasswordFocus(true)} onBlur={() => setPasswordFocus(false)} />
              {
                (visiblePassword === 'text')
                  ?
                  <svg onClick={() => setVisiblePassword('password')} viewBox="0 0 20 20" fill={passwordFocus ? '#5268F4' : '#7C7D7F'}>
                    <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" />
                    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                  </svg>
                  :
                  <svg onClick={() => setVisiblePassword('text')} viewBox="0 0 20 20" fill={passwordFocus ? '#5268F4' : '#7C7D7F'}>
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                  </svg>
              }
            </div>
          </div>
        </div>
      </form>
      <div>
        <Img svg={eggs} />
      </div>
    </LoginContainer>
  );
}

export default Home;

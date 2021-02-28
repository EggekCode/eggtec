import Head from 'next/head';
import Link from 'next/link';

import { FC, useState } from 'react';

import Img from 'react-svg-inline';

import eggs from '../global/assets/ts/eggs';
import favicon from '../global/assets/ts/favicon';

import { LoginContainer } from '../global/css/login.styles';

const Home: FC = () => {
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
              <input required value={email} onChange={e => setEmail(e.target.value)} autoComplete='off' autoFocus placeholder='Email' type='email' onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} />
            </div>
            <div>
              <input required value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} type={visiblePassword} onFocus={() => setPasswordFocus(true)} onBlur={() => setPasswordFocus(false)} />
              {
                (visiblePassword === 'text')
                  ?
                  <svg onClick={() => setVisiblePassword('password')} viewBox="0 0 20 20" fill={passwordFocus ? '#5268F4' : '#7C7D7F'}>
                    <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                  </svg>
                  :
                  <svg onClick={() => setVisiblePassword('text')} viewBox="0 0 20 20" fill={passwordFocus ? '#5268F4' : '#7C7D7F'}>
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
              }
            </div>
            <footer>
              <button>Join</button>
              <div>
                <Link href='/changepassword'>I forgot my password</Link>
                <Link href='/singup'>Sing up</Link>
              </div>
              <button type='button'>
                <svg height="512" viewBox="0 0 24 24" width="512">
                  <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" fill="#FFF" />
                </svg>
                Login with GitHub
              </button>
            </footer>
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

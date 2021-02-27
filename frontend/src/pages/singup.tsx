import Head from 'next/head';

import React, { useState } from 'react';

import Img from 'react-svg-inline';

import { Step, StepLabel, Stepper, ThemeProvider } from '@material-ui/core';

import { SingupContainer } from '../global/css/singup.styles';
import favicon from '../global/assets/ts/favicon';
import stepper from '../global/themes/stepper';
import eggs from '../global/assets/ts/eggs';
import Link from 'next/link';

const steps = [
  {
    label: ''
  },
  {
    label: '',
  },
];


const Singup = () => {
  const [step, setStep] = useState(0);

  const [visiblePassword, setVisiblePassword] = useState('password');
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  return (
    <SingupContainer>
      <Head>
        <title>Eggtec | Sing up</title>
      </Head>
      <main>
        <ThemeProvider theme={stepper}>
          <header>
            <section>
              <div>
                <Img svg={favicon} />
                <h1>Sing up</h1>
              </div>
            </section>
            <Stepper activeStep={step}>
              {
                steps.map(view => (
                  <Step key={view.label}>
                    <StepLabel>{view.label}</StepLabel>
                  </Step>
                ))
              }
            </Stepper>
          </header>
          {
            (step == 0)
              ?
              <form onSubmit={e => {
                e.preventDefault();
                setStep(1);
              }}>
                <div>
                  <div>
                    <input required value={name} onChange={e => setName(e.target.value)} autoComplete='off' autoFocus placeholder='Name' />
                  </div>
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
                </div>
                <footer>
                  <button>Next</button>
                  <div>
                    <Link href='/login'>Log in</Link>
                  </div>
                </footer>
              </form>
              :
              <form>
                <div>
                  <div>
                    <input />
                  </div>
                </div>
              </form>
          }
        </ThemeProvider>
      </main>
      <div>
        <Img svg={eggs} />
      </div>
    </SingupContainer >
  );
};

export default Singup;

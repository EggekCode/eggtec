import Head from 'next/head';
import Link from 'next/link';

import React, { ChangeEvent, useState } from 'react';

import Img from 'react-svg-inline';
import axios from 'axios';

import { Chip, CircularProgress, Input, MenuItem, Select, Snackbar, Step, StepLabel, Stepper, Theme, ThemeProvider, useTheme } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { SingupContainer } from '../global/css/singup.styles';
import notifications from '../global/themes/notifications';
import favicon from '../global/assets/ts/favicon';
import stepper from '../global/themes/stepper';
import eggs from '../global/assets/ts/eggs';

const steps = [
  {
    label: ''
  },
  {
    label: '',
  },
];

const techs = [
  'JavaScript',
  'Elixir',
  'Java',
  'C#',
  '.NET',
  'React Native',
  'Node.js',
  'ReactJS',
  'Elixir',
  'Next.js',
  'Nest.js',
  'Python',
  'Django',
  'PHP',
  'GO',
  'Ruby',
  'Laravel',
  'Vue.js',
  'Shell',
  'Typescript',
  'Git',
  'GitHub',
  'CSS',
  'HTML',
];

function getStyles(tech: string, arrayTechs: string[], theme: Theme) {
  return {
    fontWeight:
      arrayTechs.indexOf(tech) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Singup = () => {
  const [step, setStep] = useState(0);

  const [visiblePassword, setVisiblePassword] = useState('password');
  const [emailFocus, setEmailFocus] = useState(false);

  const [passwordFocus, setPasswordFocus] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [job, setJob] = useState('Job');

  const [loading, setLoading] = useState(false);

  const [openValidation, setOpenValidation] = useState(false);
  const [openError, setOpenError] = useState(false);

  const theme = useTheme();

  const [arrayTechs, setArrayTechs] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<{ value: unknown }>) => {
    setArrayTechs(e.target.value as string[]);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const onCreateAccount = async () => {
    if (job !== 'Job' || arrayTechs.length !== 0) {
      try {
        setLoading(true);
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVICE}api/users`, {
          name,
          email,
          password,
          job,
          techs: arrayTechs,
        });
        setTimeout(() => {
          setLoading(false);
          if (response.data.error) {
            setOpenValidation(true);
          };
        }, 3000);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setOpenError(true);
      }
    }
  };

  const onChangeJob = (e: React.ChangeEvent<{ value: unknown }>) => {
    setJob(e.target.value as string);
  };


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
                    <Link href='/login'>Log in to your account</Link>
                  </div>
                </footer>
              </form>
              :
              <form onSubmit={e => {
                e.preventDefault();
                setStep(2);
                onCreateAccount();
              }}>
                <div>
                  <div>
                    <label>{job === 'Job' ? 'Job' : ''}</label>
                    <Select value={job} onChange={onChangeJob}>
                      <MenuItem value='Front End Developer'>Front End Developer</MenuItem>
                      <MenuItem value='Back End Developer'>Back End Developer</MenuItem>
                      <MenuItem value='UI/UX Design'>UI/UX Design</MenuItem>
                      <MenuItem value='FullStack Developer'>FullStack Developer</MenuItem>
                      <MenuItem value='Test Analyst'>Test Analyst</MenuItem>
                    </Select>
                  </div>
                  <div>
                    <ThemeProvider theme={stepper}>
                      {
                        (arrayTechs.length === 0)
                          ?
                          <label>Techs</label>
                          :
                          <></>
                      }
                      <Select
                        multiple
                        value={arrayTechs}
                        onChange={handleChange}
                        input={
                          <Input />
                        }
                        renderValue={(selected) => (
                          <div>
                            {(selected as string[]).map((value) => (
                              <Chip key={value} label={value} color='primary' />
                            ))}
                          </div>
                        )}
                        MenuProps={MenuProps}
                      >
                        {techs.map((name) => (
                          <MenuItem key={name} value={name} style={getStyles(name, arrayTechs, theme)}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </ThemeProvider>
                  </div>
                </div>
                <footer>
                  <button>{loading ? <CircularProgress /> : "Finish"}</button>
                  <button type='button' onClick={() => setStep(0)}>Voltar</button>
                  <div>
                    <Link href='/login'>Log in to your account</Link>
                  </div>
                </footer>
              </form>
          }
        </ThemeProvider>
      </main>
      <ThemeProvider theme={notifications}>
        <Snackbar open={openValidation} autoHideDuration={6000} onClose={() => setOpenValidation(false)}>
          <Alert onClose={() => setOpenValidation(false)} severity='warning'>
            Email is already registered
            </Alert>
        </Snackbar>
        <Snackbar open={openError} autoHideDuration={6000} onClose={() => setOpenError(false)}>
          <Alert onClose={() => setOpenValidation(false)} severity='error'>
            Something went wrong
            </Alert>
        </Snackbar>
      </ThemeProvider>
      <div>
        <Img svg={eggs} />
      </div>
    </SingupContainer >
  );
};

export default Singup;

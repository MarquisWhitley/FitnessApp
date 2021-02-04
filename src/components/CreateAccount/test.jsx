import React, { useContext, useEffect, useRef, useState } from 'react';
import { CreateAccountContext } from '../../context/CreateAccount.context';
import './form.css';

function AccountForm(props) {
  const [accountInfo, setAccountInfo] = useContext(CreateAccountContext);
  const {
    firstName,
    lastName,
    userName,
    email,
    password,
    password2,
  } = accountInfo;

  useEffect(() => {
    const checkPasswordMatch = () => {
      if (accountInfo.password !== accountInfo.password2) {
        password2Ref.current.classList.add('error');
        password2Ref.current.classList.remove('success');
      } else {
        password2Ref.current.classList.add('success');
        password2Ref.current.classList.remove('error');
      }
    };
    if (accountInfo.password2.length < 1) {
      return null;
    } else {
      checkPasswordMatch();
    }
  }, [accountInfo.password, accountInfo.password2]);

  const [pass, setPass] = useState(false);

  const firstRef = useRef();
  const lastRef = useRef();
  const userRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const arr = [emailRef.current.className, lastRef.current.className];
    // if (arr.every((c) => c === 'form-control success')) {
    //   console.log('success');
    // } else {
    //   return null;
    // }
    props.setShowForm(false);
  };

  const checkEmail = (input) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.trim())) {
      emailRef.current.classList.add('success');
      emailRef.current.classList.remove('error');
    } else {
      emailRef.current.classList.remove('success');
      emailRef.current.classList.add('error');
    }
  };

  const checkName = (input, ref) => {
    if (input.length <= 1) {
      ref.current.classList.add('error');
      ref.current.classList.remove('success');
    } else {
      ref.current.classList.add('success');
      ref.current.classList.remove('error');
    }
  };

  const checkLength = (input, min, max) => {
    if (input.length < min || input.length > max) {
      setPass(true);
      passwordRef.current.classList.add('error');
      passwordRef.current.classList.remove('success');
    } else {
      passwordRef.current.classList.remove('error');
      passwordRef.current.classList.add('success');
    }
  };

  const errorMessage = (inputName) => {
    return `Invalid ${inputName}`;
  };

  return (
    <div>
      <form action='' id='form' className='form'>
        <h2 className='form_h2'>Register With Us</h2>
        <div className='form-control' ref={firstRef}>
          <label htmlFor='firstname'>First Name</label>
          <input
            type='text'
            id='firstname'
            placeholder='First Name'
            value={firstName}
            onChange={(e) => {
              setAccountInfo({ ...accountInfo, firstName: e.target.value });
              checkName(e.target.value, firstRef);
            }}
          />
          <small>{errorMessage('First Name')}</small>
        </div>
        <div className='form-control' ref={lastRef}>
          <label htmlFor='lastname'>Last Name</label>
          <input
            type='text'
            id='lastname'
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => {
              setAccountInfo({ ...accountInfo, lastName: e.target.value });
              checkName(e.target.value, lastRef);
            }}
          />
          <small>{errorMessage('Last Name')}</small>
        </div>
        <div className='form-control' ref={userRef}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            placeholder='Enter username'
            value={userName}
            onChange={(e) => {
              setAccountInfo({ ...accountInfo, userName: e.target.value });
              checkName(e.target.value, userRef);
            }}
          />
          <small>{errorMessage('User Name')}</small>
        </div>
        <div className='form-control' ref={emailRef}>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => {
              checkEmail(e.target.value);
              setAccountInfo({ ...accountInfo, email: e.target.value });
            }}
          />
          <small>{errorMessage('Email')}</small>
        </div>
        <div className='form-control' ref={passwordRef}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => {
              setAccountInfo({ ...accountInfo, password: e.target.value });
              checkLength(e.target.value, 6, 25);
            }}
          />
          <small>
            {pass
              ? 'Password must be at least 6 Characters'
              : 'Password must be less than 25 Characters'}
          </small>
        </div>
        <div className='form-control' ref={password2Ref}>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            id='password2'
            placeholder='Enter password again'
            value={password2}
            onChange={(e) => {
              setAccountInfo({ ...accountInfo, password2: e.target.value });
            }}
          />
          <small>Password does not Match</small>
        </div>
        <div>
          <button type='button' onClick={handleSubmit}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default AccountForm;

import React, { createContext, useState } from 'react';

export const CreateAccountContext = createContext();

export const CreateAccountProvider = (props) => {
  const [accountInfo, setAccountInfo] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    password2: '',
    gender: '',
    workout: [],
  });

  return (
    <CreateAccountContext.Provider value={[accountInfo, setAccountInfo]}>
      {props.children}
    </CreateAccountContext.Provider>
  );
};

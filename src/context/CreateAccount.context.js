import React, { createContext } from 'react';

export const CreateAccountContext = createContext();

export const CreateAccountProvider = (props) => {
  const height = () => {
    return (
      <div>
        <h1>Height</h1>
      </div>
    );
  };

  const weight = () => {
    return (
      <div>
        <h1>Weight</h1>
      </div>
    );
  };

  const bodyMassIndex = () => {
    return (
      <div>
        <h1>BMI</h1>
      </div>
    );
  };

  const components = [height(), weight(), bodyMassIndex()];

  return (
    <CreateAccountContext.Provider
    value={components}
    >
      {props.children}
    </CreateAccountContext.Provider>
  );
};

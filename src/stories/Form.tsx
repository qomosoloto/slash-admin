import { useState } from 'react';

import { Button } from './Button';
import './form.css';

export interface FormProps {
  placeholder?: string;
  label?: string;
  name?: string;
}

export function Form({ placeholder = 'Enter your email', ...props }: FormProps) {
  const [details, setDetails] = useState(false);
  const onClick = () => {
    setDetails(!details);
  };
  return (
    <div className="form-wrapper">
      <input
        autoComplete="off"
        placeholder={placeholder}
        className="storybook-input"
        name="email"
        aria-label="email"
        id="email"
        data-testid="email"
        {...props}
      />
      <input
        autoComplete="off"
        placeholder="Enter your password"
        className="storybook-input"
        name="password"
        aria-label="password"
        id="password"
        data-testid="password"
        {...props}
      />
      <Button label="Submit" onClick={() => onClick()} />
      {details === true ? (
        <p>Get ready to experience greate development experience with storybook</p>
      ) : (
        ''
      )}
    </div>
  );
}

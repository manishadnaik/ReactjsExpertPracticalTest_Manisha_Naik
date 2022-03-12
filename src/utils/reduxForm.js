import { Checkbox, RadioGroup, Select, TextField } from '@mui/material';
import React, { Component } from 'react';

export const renderField = ({
  input,
  type,
  label,
  meta: { touched, error },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        aria-required="true"
        className="validate"
      />
      {touched && error && <span className="error-message">{error}</span>}
    </div>
  </div>
);

export const renderTextField1 = ({
  input,
  type,
  label,
  meta: { touched, error, warning },
  ...custom
}) => (
  <>
    <TextField
      label={label}
      // floatingLabelText={label}
      error={touched && error}
      type={type}
      {...input}
      {...custom}
    />
    <div>
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </>
);

export const renderTextField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  ...custom
}) => (
  <div>
    {/* <label>{label}</label> */}
    <div>
      <TextField
        {...input}
        {...custom}
        placeholder={label}
        type={type}
        label={label}
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export const renderTextField2 = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);

export const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

export const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <Select
    label={label}
    error={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
);

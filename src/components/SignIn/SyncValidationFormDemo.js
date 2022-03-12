import React from 'react';
import SyncValidationForm from './SyncValidationForm';

const SyncValidationFormDemo = () => {
  return (
    <div>
      <SyncValidationForm onSubmit={(event) => console.log(event)} />
    </div>
  );
};

export default SyncValidationFormDemo;

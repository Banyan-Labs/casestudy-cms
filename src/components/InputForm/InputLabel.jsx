import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input, Textarea } from './style';

export const InputLabel = ({
  title,
  type,
  idValue,
  onChangeType,
  inputType,
}) => {
  return (
    <Label>
      <p className='input-text'>{title}:</p>
      {inputType === 'input' ? (
        <Input
          type={type}
          id={idValue}
          name={idValue}
          inputType={'input'}
          onChange={(event) => onChangeType(event.target.value)}
          required
        />
      ) : (
        <Textarea
          type={type}
          id={idValue}
          name={idValue}
          inputType={'text'}
          onChange={(event) => onChangeType(event.target.value)}
        ></Textarea>
      )}
    </Label>
  );
};

InputLabel.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  idValue: PropTypes.string,
  inputType: PropTypes.string,
  onChangeType: PropTypes.func,
};

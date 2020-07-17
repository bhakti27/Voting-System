import React from 'react';

export const StringFormControl = (props) => {

  return (
    <div id='input-field'>
      <label id="input-field-text" htmlFor={props.name + '-input'}>{props.caption}</label>
      <input type="text" id={props.name + '-input'} name={props.name}
        value={props.value} onChange={props.onChange} />
    </div>
  );

}
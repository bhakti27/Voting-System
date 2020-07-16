import React from 'react';

export const StringFormControl = (props) => {

  return (
    <div id='input-field'>
     <div class="column"></div>
      <label htmlFor={props.name + '-input'}>{props.caption}</label>
      <div class="column"></div>
      <input type="text" id={props.name + '-input'} name={props.name}
        value={props.value} onChange={props.onChange} />
    </div>
  );

}
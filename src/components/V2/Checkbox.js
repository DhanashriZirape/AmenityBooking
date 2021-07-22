import React from 'react';

export default function Checkbox({name}){
    return(
        <div>
        <input type="checkbox" id={name} name={name}
               checked={false}/>
        <label for={name}>{name}</label>
      </div>
    );
}
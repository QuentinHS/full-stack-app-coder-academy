import { useState } from 'react';

function CheckBox () {

  const [checked, setChecked] = useState(false);

  function toggle(value){
    return !value;
}
console.log(checked)

  return (
    <form>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(toggle)}
      />
    </form>
  )
}

export default CheckBox
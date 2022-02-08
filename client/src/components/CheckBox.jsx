import React from "react";
import { useState } from "react"
import "./CheckBox.css"

const CheckBox = () => {

// const stages = [{stage1: false}, {stage2: false}, {stage3: false}, {stage4: false}]
const stages = [{stage: "stage1"}, {stage: "stage2"}, {stage: "stage3"}, {stage: "stage4"}]

  const [checkedState, setCheckedState] = useState(
    new Array(stages.length).fill(false)
  )

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item 
  )
  setCheckedState(updatedCheckedState)
  }

  

    return (
        <div className="App">
            <h3>Select Toppings</h3>
            <ul className="toppings-list">
            {stages.map(( stage , index) => {
                return (
                <li key={index}>
                    <div className="toppings-list-item">
                    <div className="left-section">
                        <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={stage}
                        value={stage}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                        />
                        <label htmlFor={`custom-checkbox-${index}`}>{stage}</label>
                    </div>
                    {/* <div className="right-section">{getFormattedPrice(price)}</div> */}
                    </div>
                </li>
                );
            })}
            
            <li>
                <div className="toppings-list-item">
                <div className="left-section">Total:</div>
                {/* <div className="right-section">{getFormattedPrice(total)}</div> */}
                </div>
            </li>
            </ul>
        </div>
    )
}

export default CheckBox








// export default function App() {


//   const [total, setTotal] = useState(0);




//     const totalPrice = updatedCheckedState.reduce(
//       (sum, currentState, index) => {
//         if (currentState === true) {
//           return sum + toppings[index].price;
//         }
//         return sum;
//       },
//       0
//     );

//     setTotal(totalPrice);
//   };
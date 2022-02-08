import React from "react";

const CheckBox = () => {

//   const [checkedState, setCheckedState] = useState(
//     new Array(stages.length).fill(false)
//   );

//   const handleOnChange = (position) => {
//     const updatedCheckedState = checkedState.map((item, index) =>
//       index === position ? !item : item
//     );

//     setCheckedState(updatedCheckedState);

    return (
        <div className="checkBox">
            <h3>Select Toppings</h3>
            <ul className="toppings-list">
            {toppings.map(({ name, price }, index) => {
                return (
                <li key={index}>
                    <div className="toppings-list-item">
                    <div className="left-section">
                        <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={name}
                        value={name}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                        />
                        <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                    </div>
                    <div className="right-section">{getFormattedPrice(price)}</div>
                    </div>
                </li>
                );
            })}
            <li>
                <div className="toppings-list-item">
                <div className="left-section">Total:</div>
                <div className="right-section">{getFormattedPrice(total)}</div>
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
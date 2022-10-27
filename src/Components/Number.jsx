import React, { useState } from 'react'

const Number = () => {

   const [count, setCount] = useState([{ number: 0 }, { number1: 1 }]);
   // console.log(count);
   const increment = () => {
      // setCount()
      setCount(count, count.map(e => {
         if (e.number === 1) {
            e.number = e.number+1;
         }
      }));
      console.log(count);
   }

   const decrement = () => {
      setCount([{ number: count[0].number - 1 }]);
   }

   

   return (
      <div>
         <h1>{count[0].number}</h1>
         <h1>{count[1].number1}</h1>
         <button onClick={increment}>+</button>
         <button onClick={decrement}>-</button>
      </div>
   )
}

export default Number

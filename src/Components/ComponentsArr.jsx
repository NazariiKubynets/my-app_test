import React from 'react'
import { useState } from 'react';

const ComponentsArr = () => {

   const [arr, setArr] = useState([{ id: 1, selected: false }, { id: 2, selected: false }]);
  // console.log(arr);

  const showArr = () => arr.map(e => {
    // return (<p key={e.id} >id: {e.id}, selected: {e.selected ? 'true' : 'false'}</p>
    return (<p key={e.id} >id: {e.id}, selected: {e.selected.toLocaleString()}</p>)
  })

  const update = (id) => {
    // debugger;
    setArr(arr, arr.map(item => {
      if (item.id === id) {
        item.selected = true;
      }
    }));
    console.log(arr);
  }

  // setInterval(showArr(),1000)
  // console.log(update(arr[1].id));

  return (
    <div>
      <div>{showArr()}</div>
      <button onClick={() => update(1)}>click</button>
    </div>
  )
}

export default ComponentsArr

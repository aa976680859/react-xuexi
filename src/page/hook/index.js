import React, { useState, useEffect, useReducer } from "react";
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}


function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </>
    );
}
function Example() {
    const [count, setcount] = useState(0);
    function SETCOUNT() {
        setcount(count + 1)
    };
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <span>{count}</span>
            <button onClick={SETCOUNT}>加</button>
            <Counter></Counter>
        </div>
    )
}
export {
    Example
}
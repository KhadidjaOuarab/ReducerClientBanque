import React from 'react'
import { useReducer } from 'react'
function Reducer() {

  function reducerFunction(state,action){
      switch (action.type) {
          case 'increment':
              return {count : state.count +1 };
          case 'decrement':
              return {count : state.count -1 };
          case 'reset':
              return {count : initialState.count };
          default:
              break;
      }

  }
   const initialState = {count : 0 , price : 0}

   const [state, dispatch] = useReducer(reducerFunction, initialState)

    return (
      
        <div>
            <p>Count : {state.count}</p>
            <button onClick={() => dispatch({type : 'increment'})}>++</button>
            <button onClick={() => dispatch({type : 'decrement'})}>--</button>
            <button onClick={() => dispatch({type : 'reset'})}>reset</button>
        </div>
    )
}

export default Reducer

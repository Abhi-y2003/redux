import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slice/CounterSlice';

const Counter = () => {

    const count = useSelector( (state) => state.counter.value)

    //useSelector is used to fetch data from the slice from store
    // (state) => state.counter.value
    // value of state => get the state . name of the slice . value of state
    
    

    //useDispatch is a hook which is used to call the reducerFunctions made in the slice 
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>
            Increment
        </button>

        <div>{count}</div>




        <button onClick={()=>dispatch(decrement())}>
            Decrement
        </button>
    </div>
  )
}

export default Counter
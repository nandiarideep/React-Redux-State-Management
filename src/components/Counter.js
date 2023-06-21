import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../Redux/counterSlice';

const Counter = () => {

  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='h-[300px] w-[500px] bg-[#3f3832dd] rounded-3xl'>
        <h1 className='text-white text-5xl flex justify-center mt-[70px]'>Counter</h1>
        <div className='flex justify-center my-10'>
            <button className='px-[30px] hover:bg-[#8b28f5] m-0 p-2 bg-red-600 text-white text-4xl rounded-2xl flex justify-center items-center' onClick={() => dispatch(increment())}>+</button>
                <span className='mx-5 text-3xl text-white'>{counter}</span>
            <button className='px-[30px] hover:bg-[#8b28f5] m-0 p-2 bg-red-600 text-white text-4xl rounded-2xl flex justify-center items-center' onClick={() => dispatch(decrement())}>-</button>
        </div>
    </div>
  )
}

export default Counter
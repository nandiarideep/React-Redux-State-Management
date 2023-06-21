import React from 'react'
import Counter from './components/Counter'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import store from './Redux/store'
import counterSlice from './Redux/counterSlice'


const App = () => {

  const store = configureStore({
    reducer: {
      counter: counterSlice
    }
  })

  return (
    <div className='bg-gradient-to-r from-purple-500 to-pink-500 h-screen flex justify-center items-center'>
      <Provider store={store}>
        <Counter /> 
      </Provider>
    </div>
  )
}

export default App
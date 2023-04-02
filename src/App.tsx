import { useState } from 'react'
import './App.css'
import Counter from './components/counter'
import useStore from './components/productStore';

function App() {
  const count = useStore((product) => product.products);

  return (
    <div className="App">
      <Counter/>
      <p>{count}</p>
    </div>
  )
}

export default App

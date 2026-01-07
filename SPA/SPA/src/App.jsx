import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="cards">
      <h1>Simple Counter</h1>
      <div className="counter" role="group" aria-label="counter controls">
        <button
          aria-label="decrement"
          onClick={() => setCount((c) => c - 1)}
          title="Decrease"
        >
          −
        </button>

        <div className="value" aria-live="polite">{count}</div>

        <button
          aria-label="increment"
          onClick={() => setCount((c) => c + 1)}
          title="Increase"
        >
          +
        </button>
      </div>
    </div>
  )
}

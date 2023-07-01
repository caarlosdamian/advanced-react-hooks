// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  const countReducer = (state, action) => {
    const {type, step} = action

    console.log('type', action)
    console.log('type', type)
    console.log('type', step)
    console.log('type', state)

    switch (type) {
      case 'INCREMENT':
        return {...state, count: state.count + step}
      default:
        break
    }

    // return {
    //   ...state,
    //   ...(typeof action === 'function' ? action(state) : action),
    // }
  }

  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App

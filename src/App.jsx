import React from 'react'
import Navbar from './components/Navbar'
// javascript
function App() {
  const name="learn coding!!!"
  return (
    <div>
    <Navbar></Navbar>
    <div>Welcome {name}</div>   {/*variable accessed through */}
    
  </div>
  )
}

export default App
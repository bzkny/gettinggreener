
import { useState } from 'react'
import reactLogo from './assets/textStylesCheatSheet.svg'
import './App.css'

function Shadows() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Shadows TEST TEST TEST</h1>
      <p className="read-the-docs">
        Click on the Typography DOs & Don'ts to learn more
      </p>
    </>
  )
}

export default Shadows

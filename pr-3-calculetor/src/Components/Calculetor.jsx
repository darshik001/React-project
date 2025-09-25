import { useState } from 'react'
import './Calculetor.css'

const Calculetor = ()=> {
const [input,setInput] = useState(0)

const handalclick = (value)=>{
console.log(value)
setInput(()=>input+value)
}
  return (
    <>
  <div className="calculetor">
      <div class="calculator-item">
    <div class="brand">Citizen</div>
    <div class="display" id="display">
      <input type="text" />
    </div>
    <div class="buttons">
      <button class="btn-gray">AC</button>
      <button class="btn-gray">C</button>
      <button class="btn-gray">%</button>
      <button class="btn-orange">÷</button>

      <button onClick={()=>handalclick("7")}>7</button>
      <button onClick={()=>handalclick("8")}>8</button>
      <button onClick={()=>handalclick("9")}>9</button>
      <button class="btn-orange">×</button>

      <button onClick={()=>handalclick("4")}>4</button>
      <button onClick={()=>handalclick("5")}>5</button>
      <button onClick={()=>handalclick("6")}>6</button>
      <button class="btn-orange">−</button>

      <button onClick={()=>handalclick("1")}>1</button>
      <button onClick={()=>handalclick("2")}>2</button>
      <button onClick={()=>handalclick("3")}>3</button>
      <button class="btn-orange">+</button>

      <button class="span-two" onClick={()=>handalclick("0")} >0</button>
      <button onClick={()=>handalclick(".")}>.</button>
      <button class="btn-green">=</button>
    </div>
  </div>
  </div>
    </>
  )
}

export default Calculetor

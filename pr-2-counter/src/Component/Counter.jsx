import React from 'react'
import '../Css/Counter.css'

 class Counter extends React.Component {
  constructor(){
    super()
    this.state={
      count:0,
    }
  }
  handalIncrement (){
    this.setState({
     count:this.state.count+1
    })
  }

  handalDecrement(){
     if (this.state.count>0) {
      this.setState({
      count:this.state.count -1
    })
     } else{
      alert("Counter is already zero")
     }
  }

  handalReset (){
    this.setState({
      count:this.state.count = 0
    })
  }
  render() {
    return (
 <div className="counter">
        <div className="counter-items">
          <div className="counter-content">
            <h1>Count: {this.state.count}</h1>
            <div className="btn-group">
              <button className="btn minus" onClick={()=>this.handalDecrement()}>-</button>
              <button className="btn reset" onClick={()=>this.handalReset()}>Reset</button>
              <button className="btn plus" onClick={()=>this.handalIncrement()}>+</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Counter;

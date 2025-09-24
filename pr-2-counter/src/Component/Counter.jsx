import React from 'react'

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
      <div>
             <h1 style={{padding:"20px",backgroundColor:"black",marginBottom:"100px",borderRadius:"20px"}}>Count:{this.state.count}</h1>
             <button onClick={()=>this.handalDecrement()} >Decrement</button>
             <button onClick={()=>this.handalReset()} style={{marginLeft:"20px",marginRight:"20px"}}>Reset</button>
             <button onClick={()=>this.handalIncrement()}>Increment</button>
      </div>
    )
  }
}


export default Counter;

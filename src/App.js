import React, { Component } from 'react'
import './App.css'

class Contador extends Component{
  state ={
    number: 5,
    msg: ":)"
  }

  add = () => {
    if(this.state.number < 10){
      this.setState({
        number: this.state.number + 1,
        msg: ":)"
      })
      return this.state.number
    } else {
      this.setState({
        msg: "A soma não pode ser maior que 10",
      })
    }
  }

  remove = () => {
    if(this.state.number > 0){
      this.setState({
        number: this.state.number - 1,
        msg: ":)"
      })
      return this.state.number
    } else {
      this.setState({
        msg: "A subtração não pode ser menor que 0",
      })
    }
  };

  render(){
    return(
      <div className='box'>
        <button onClick={this.add}> Somar </button>
        <h1>{this.state.number}</h1>
        <button onClick={this.remove}> Subtrair </button>
        <h2>{this.state.msg}</h2>
      </div>
    )
  }
}

export default Contador
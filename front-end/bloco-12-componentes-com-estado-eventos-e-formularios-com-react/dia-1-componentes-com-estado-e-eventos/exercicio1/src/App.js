import './App.css';
import React from 'react'

class App extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      numClick :0
    }
  }

  handleClick(){
    
    const r = Math.trunc(Math.random()*255);
    const g = Math.trunc(Math.random()*255);
    const b = Math.trunc(Math.random()*255);
    const cor = `rgb(${r},${g},${b})`;
    const butt = document.querySelector('.botao');
    butt.style.backgroundColor = cor;
    console.log(cor);
    
  }

  render() {
    return (
      <button onClick={this.handleClick} className='botao'>Botão</button>
    );
  }

}

export default App;

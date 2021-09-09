import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.maiuscula = this.maiuscula.bind(this);
    this.caracter = this.caracter.bind(this);
    this.numeros = this.numeros.bind(this);
    this.cargos = this.cargos.bind(this);
    this.state = {
      nome: '',
      endereco: '',
      cidade: '',
      cargo: ''
    }
  }

  maiuscula({ target }) {
    const { value } = target;
    this.setState({
      nome: value.toUpperCase(),
    })
  };

  caracter({ target }) {
    const { value } = target;

    if (! /^[a-zA-Z0-9]+$/.test(value)) {
      this.setState({
        endereco: value.slice(0, -1)
      })
    }
    else {
      this.setState({
        endereco: value
      })
    }
  };

  numeros({ target }) {
    const { value } = target;
    if (/^[0-9]$/.test(value)) {
      this.setState({
        cidade: ''
      })
    } else {
      this.setState({
        cidade: value
      })
    }
    console.log(value);
  }

  cargos(event) {

    event.preventDefault();
    this.setState({
      cargo: event.target.value
    })

    alert('oi');
  }


  render() {
    return (
      <form >
        <fieldset className='formulario'>
          <legend>Dados Pessoais</legend>
          <label> Nome:
            <input type='text' name='nome' value={this.state.nome} onChange={this.maiuscula} placeholder='Nome' size='40' maxLength='40' required />
          </label>
          <label>Email:
            <input type='text' name='email' placeholder='Email' size='50' maxLength='50' required />
          </label>
          <label>CPF:
            <input type='text' name='cpf' placeholder='CPF' size='11' maxLength='11' required />
          </label>
          <label>Endereço:
            <input type='text' name='endereco' placeholder='Endereco' maxLength='200' value={this.state.endereco} onChange={this.caracter} required />
          </label>
          <label>Cidade:
            <input type='text' name='cidade' placeholder='Cidade' size='28' maxLength='28' onChange={this.numeros} required />
          </label>
          <label>Estado:
            <select required>
              <option value='pernambuco'>PE</option>
              <option value='alagoas'>AL</option>
              <option value='ceara'>CE</option>
            </select>
          </label>
          <label required>Casa
            <input type='radio' name='casa' />
            Apartamento
            <input type='radio' name='apt' />
          </label>
          <fieldset>
            <legend>Dados do último emprego:</legend>
            <label>
              Resumo:
              <textarea type='text' name='resumo' size='1000' maxLength='1000' />
            </label>
            <label>
              Cargo:
              <textarea type='text' name='cargo' size='40' maxLength='40' value={this.state.cargo} onMouseEnter={() => alert('oi')} onChange={this.cargos} />
            </label>
            <label>
              Descrição do cargo:
              <textarea type='text' name='descricao' size='500' maxLength='500' />
            </label>
          </fieldset>


        </fieldset>
      </form>
    );
  }

}

export default App;

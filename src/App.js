import { Component } from 'react'
import './App.css'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'

class App extends Component {
  render() {
    return (
      <fragment>
        <h1>Formulário de cadastro</h1>
        <FormularioCadastro />
      </fragment>
    )
  }
}

export default App

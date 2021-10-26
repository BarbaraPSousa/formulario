import { Component } from 'react'
import './App.css'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'

import { Container, Typography } from '@material-ui/core'
import 'fontsource-roboto'
import { validarCpf, validarSenha } from './models/cadastro'

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <FormularioCadastro
          aoEnviar={aoEnviarForm}
          validacoes={{ cpf: validarCpf, senha: validarSenha }}
        />
      </Container>
    )
  }
}

function aoEnviarForm(dados) {
  console.log(dados)
}

export default App

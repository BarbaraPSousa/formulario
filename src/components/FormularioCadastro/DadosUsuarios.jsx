import React from 'react'
import { Button, TextField } from '@material-ui/core'

function DadosUsuario() {
  return (
    <form>
      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="senha"
        label="senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastra
      </Button>
    </form>
  )
}

export default DadosUsuario

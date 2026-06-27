import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      if (state.itens.find((item) => item.id === action.payload.id)) {
        alert('O item já está adicionado')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer

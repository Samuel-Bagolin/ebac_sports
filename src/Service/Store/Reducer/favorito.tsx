import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types'

type FavoritosState = {
  itens: Produto[]
}
const initialState: FavoritosState = {
  itens: [] as Produto[]
}
const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFavorito(state, action: PayloadAction<Produto>) {
      state.itens.push(action.payload)
    },
    removerFavorito(state, action: PayloadAction<number>) {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})
export const { adicionarFavorito, removerFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer

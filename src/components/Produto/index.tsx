import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { adicionarAoCarrinho } from '../../store/slices/carrinhoSlice'
import { alternarFavorito } from '../../store/slices/favoritosSlice'
import { Produto as ProdutoType } from '../../types/Produto'
import * as S from './styles'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useAppDispatch()
  const favoritos = useAppSelector((state) => state.favoritos.itens)

  const estaNosFavoritos = favoritos.some((p) => p.id === produto.id)

  const handleAdicionarAoCarrinho = () => {
    dispatch(adicionarAoCarrinho(produto))
  }

  const handleFavoritar = () => {
    dispatch(alternarFavorito(produto))
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleFavoritar} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={handleAdicionarAoCarrinho} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent

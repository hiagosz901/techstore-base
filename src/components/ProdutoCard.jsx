import { Link } from 'react-router'
import { formatarPreco } from '../utils/formatarPreco'

export default function ProdutoCard({ produto, onAdicionar }) {
  const preco = Number(produto.price)
  const esgotado = Number(produto.estoque) === 0
  const semPreco = !Number.isFinite(preco) || preco <= 0

  const freteGratis = preco >= 200
  const valorFaltante = Math.max(0, 200 - preco)

  return (
    <article className="card">
      <Link to={`/produto/${produto.id}`} className="card-link">
        <div className="card-imagem-moldura">
          <img src={produto.image} alt={produto.title} className="card-imagem" />
        </div>
        <h3 className="card-titulo">{produto.title}</h3>
      </Link>

      <p className="card-avaliacao">
        ★ {produto.rating.rate} <span>({produto.rating.count} avaliações)</span>
      </p>

      <div className="card-precos">
        {produto.precoOriginal && (
          <span className="preco-original">{formatarPreco(produto.precoOriginal)}</span>
        )}
        <span className={`preco ${semPreco ? 'preco-indisponivel' : ''}`}>
          {semPreco ? 'Preço indisponível' : formatarPreco(preco)}
        </span>
      </div>

      <div className="card-selos">
        {semPreco ? (
          <span className="selo selo-alerta">Sem preço</span>
        ) : freteGratis ? (
          <span className="selo selo-frete">Frete grátis</span>
        ) : (
          <span className="selo selo-frete">Faltam {formatarPreco(valorFaltante)} para frete grátis</span>
        )}
        {esgotado && <span className="selo selo-esgotado">Esgotado</span>}
      </div>

      <button className="botao" onClick={() => onAdicionar(produto)} disabled={esgotado || semPreco}>
        {semPreco ? 'Indisponível' : 'Adicionar ao carrinho'}
      </button>
    </article>
  )
}

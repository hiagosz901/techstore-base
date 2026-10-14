import { useState } from 'react'
import { Link, useParams } from 'react-router'
import ProdutoCard from '../components/ProdutoCard'
import { formatarPreco } from '../utils/formatarPreco'

export default function PaginaProduto({ produtos, onAdicionar, onAvisarQuandoChegar }) {
  const { id } = useParams()
  const produto = produtos.find((item) => item.id === id)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagemAviso, setMensagemAviso] = useState('')

  if (!produto) {
    return (
      <div className="estado-vazio">
        <p>Produto não encontrado.</p>
        <Link to="/" className="botao botao-secundario">
          Voltar para a loja
        </Link>
      </div>
    )
  }

  const preco = Number(produto.price)
  const podeComprar = Number(produto.estoque) > 0 && Number.isFinite(preco) && preco > 0

  const relacionados = produtos
    .filter(
      (item) =>
        item.category === produto.category &&
        item.id !== produto.id &&
        Number(item.estoque) > 0 &&
        Number(item.price) > 0
    )
    .slice(0, 4)

  function registrarAviso(evento) {
    evento.preventDefault()

    if (!nome.trim() || !email.trim()) {
      setMensagemAviso('Preencha nome e e-mail para receber o aviso.')
      return
    }

    onAvisarQuandoChegar(produto, nome.trim(), email.trim())
    setNome('')
    setEmail('')
    setMensagemAviso('Você foi cadastrado para receber o aviso quando o produto voltar.')
  }

  return (
    <section>
      <nav className="trilha" aria-label="Você está em">
        <Link to="/">Loja</Link>
        <span aria-hidden="true">/</span>
        <span>{produto.title}</span>
      </nav>

      <div className="detalhe">
        <div className="detalhe-imagem-moldura">
          <img src={produto.image} alt={produto.title} className="detalhe-imagem" />
        </div>

        <div className="detalhe-info">
          <h1>{produto.title}</h1>
          <p className="card-avaliacao">
            ★ {produto.rating.rate} <span>({produto.rating.count} avaliações)</span>
          </p>
          <p className="detalhe-preco">
            {Number.isFinite(preco) && preco > 0 ? formatarPreco(preco) : 'Preço indisponível'}
          </p>
          <p className="detalhe-descricao">{produto.description}</p>
          <p className="detalhe-estoque">
            {produto.estoque > 0 ? `${produto.estoque} unidades disponíveis` : 'Produto esgotado'}
          </p>

          <button
            className="botao botao-grande"
            onClick={() => onAdicionar(produto)}
            disabled={!podeComprar}
          >
            {podeComprar ? 'Adicionar ao carrinho' : 'Produto indisponível'}
          </button>

          {produto.estoque === 0 && (
            <form className="form-aviso" onSubmit={registrarAviso}>
              <h2>Avise-me quando chegar</h2>
              <label>
                Nome
                <input value={nome} onChange={(evento) => setNome(evento.target.value)} />
              </label>
              <label>
                E-mail
                <input type="email" value={email} onChange={(evento) => setEmail(evento.target.value)} />
              </label>
              <button type="submit" className="botao botao-secundario">
                Quero receber o aviso
              </button>
              {mensagemAviso && <p className="mensagem-aviso">{mensagemAviso}</p>}
            </form>
          )}

          <ul className="detalhe-garantias">
            <li>Troca grátis em até 30 dias</li>
            <li>Parcele em até 10x sem juros</li>
          </ul>
        </div>
      </div>

      <h2>Produtos relacionados</h2>
      <div className="grade">
        {relacionados.map((item) => (
          <ProdutoCard key={item.id} produto={item} onAdicionar={onAdicionar} />
        ))}
      </div>
    </section>
  )
}

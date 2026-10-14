// O carrinho guarda uma entrada por unidade adicionada.
// Ex.: duas camisetas iguais = o mesmo produto duas vezes no array.

export function normalizarPreco(valor) {
  if (valor === null || valor === undefined || valor === '') {
    return 0
  }

  const texto = String(valor).trim().replace(/R\$\s*/g, '')

  if (!texto) {
    return 0
  }

  const possuiVirgula = texto.includes(',')
  const possuiPonto = texto.includes('.')

  let numeroTexto = texto

  if (possuiVirgula && possuiPonto) {
    numeroTexto = texto.lastIndexOf(',') > texto.lastIndexOf('.')
      ? texto.replace(/\./g, '').replace(',', '.')
      : texto.replace(/,/g, '')
  } else if (possuiVirgula) {
    numeroTexto = texto.replace(/\./g, '').replace(',', '.')
  } else if (possuiPonto) {
    const partes = texto.split('.')
    if (partes.length > 2) {
      numeroTexto = partes.join('')
    }
  }

  const numero = Number(numeroTexto)
  return Number.isFinite(numero) ? numero : 0
}

export function produtoDisponivel(produto) {
  if (!produto) return false

  return Number(produto.estoque) > 0 && normalizarPreco(produto.price) > 0
}

export function calcularTotal(carrinho) {
  return carrinho.reduce((total, produto) => total + normalizarPreco(produto.price), 0)
}

export function agruparItens(carrinho) {
  const itens = []
  carrinho.forEach((produto) => {
    const existente = itens.find((item) => item.produto.id === produto.id)
    if (existente) {
      existente.quantidade += 1
    } else {
      itens.push({ produto, quantidade: 1 })
    }
  })
  return itens
}

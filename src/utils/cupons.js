const CUPONS = {
  PRIMEIRACOMPRA: 0.1,
}

export function validarCupom(codigo) {
  const codigoNormalizado = codigo.trim().toUpperCase()
  const desconto = CUPONS[codigoNormalizado]

  if (!desconto) {
    return { valido: false }
  }

  return { valido: true, desconto }
}

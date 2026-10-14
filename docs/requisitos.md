# Requisitos da TechStore

Última atualização: outubro de 2026

## Obrigatórios

* [x] Obrigatório 1: total do carrinho calculado corretamente.
* [x] Obrigatório 2: produtos esgotados removidos da loja e aviso para volta.

## Grupo 1

* [x] Grupo 1 - A: botão de adicionar ao carrinho funcionando sem duplicar itens.

## Grupo 2

* [x] Grupo 2 - D: card de produto padronizado com indicação de frete grátis.

## Loja

* [x] A página inicial lista os produtos disponíveis do catálogo.
* [x] O cliente pode filtrar os produtos por categoria.
* [x] Cada produto é exibido em um card com imagem, nome, avaliação, preço e selo de frete grátis/sem preço/esgotado.
* [x] Clicar no card abre a página do produto.
* [x] Produtos sem preço definido ou sem estoque não podem ser vendidos e não aparecem na vitrine.

## Página do produto

* [x] Exibe imagem, nome, avaliação, preço, descrição e unidades disponíveis.
* [x] Exibe até 4 produtos relacionados da mesma categoria.
* [x] Se o produto estiver esgotado, oferece formulário de alerta de disponibilidade.
* [x] Mantém o padrão visual do card da lista para reduzir confusão.

## Carrinho

* [x] Lista os produtos adicionados, com a quantidade de cada um.
* [x] Permite remover unidades.
* [x] Permite aplicar cupons de desconto.
* [x] Exibe o total da compra correto, sem erros por formatação de números.
* [x] Mostra quanto falta para atingir o valor mínimo do frete grátis.

## Frete grátis

* [x] O frete grátis vale para compras acima de R$ 200,00 no valor final.
* [x] O cliente visualiza o valor restante para alcançar a condição de frete grátis.

## Cupom de primeira compra

* [x] O cupom `PRIMEIRACOMPRA` oferece 10% de desconto sobre o total.
* [x] O código funciona corretamente para qualquer cliente, conforme a regra de negócio.

class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  calcularTotal() {
    return this.preco * this.quantidade;
  }

  exibirInfo() {
    return `Produto: ${this.nome}, Preço Unitário: R$${this.preco}, Quantidade: ${
      this.quantidade
    }, Total: R$ ${this.calcularTotal()}`;
  }
}

let produto1 = null; // Variável para armazenar o produto

// Função para adicionar o produto ao carrinho
function adicionarProdutoAoCarrinho() {
  if (!produto1) {
    // Verifica se o produto já foi adicionado
    produto1 = new Produto("Pizza", 20, 1);
    atualizarCarrinho();

    // Exibir os botões de aumentar e diminuir quantidade
    document.getElementById("botoes").innerHTML = `
      <button onclick="diminuirQuantidade()">Diminuir Quantidade</button>
      <button onclick="aumentarQuantidade()">Aumentar Quantidade</button>
    `;
  }
}

// Função para atualizar a exibição do produto na página
function atualizarCarrinho() {
  document.getElementById("resultado").innerHTML = produto1.exibirInfo();
}

// Função para aumentar a quantidade
function aumentarQuantidade() {
  produto1.quantidade = produto1.quantidade + 1;
  document.getElementById("resultado").style.display = "block";
  atualizarCarrinho();
}

// Função para diminuir a quantidade (não deixando ir abaixo de 0)
function diminuirQuantidade() {
  if (produto1.quantidade > 0) {
    produto1.quantidade = produto1.quantidade - 1;
  }
  if (produto1.quantidade == 0) {
    document.getElementById("resultado").style.display = "none";
  }
  atualizarCarrinho();
}

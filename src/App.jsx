import React, { useState } from "react";
import "./App.css";

const produtos = [
  {
    nome: 'Smart TV Philco 50" 4K Roku',
    preco: "R$ 1.999,90",
    categoria: "Televisões",
    selo: "Mais vendida",
    imagem:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=900&q=80",
    link: "https://pay.kiwify.com.br/YtQHGG6",
  },

  {
    nome: 'Smart TV Philco 32" HD',
    preco: "R$ 999,90",
    categoria: "Televisões",
    selo: "Oferta",
    imagem:
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?auto=format&fit=crop&w=900&q=80",
    link: "https://pay.kiwify.com.br/SEULINK2",
  },

  {
    nome: 'Smart TV Philco 60" Google TV',
    preco: "R$ 2.999,90",
    categoria: "Televisões",
    selo: "Premium",
    imagem:
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=900&q=80",
    link: "https://pay.kiwify.com.br/SEULINK3",
  },

  {
    nome: "Notebook Philco 14” Intel",
    preco: "R$ 2.399,90",
    categoria: "Informática",
    selo: "Novo",
    imagem:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
    link: "https://pay.kiwify.com.br/SEULINK4",
  },

  {
    nome: "Air Fryer Philco 5,5L",
    preco: "R$ 349,90",
    categoria: "Cozinha",
    selo: "Top venda",
    imagem:
      "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=900&q=80",
    link: "https://pay.kiwify.com.br/SEULINK5",
  },

  {
    nome: "Micro-ondas Philco 25L",
    preco: "R$ 499,90",
    categoria: "Cozinha",
    selo: "Prático",
    imagem:
      "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=900&q=80",
    link: "https://pay.kiwify.com.br/SEULINK6",
  },

  {
    nome: "Liquidificador Philco Turbo",
    preco: "R$ 189,90",
    categoria: "Cozinha",
    selo: "Econômico",
    imagem:
      "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=900&q=80",
    link: "https://pay.kiwify.com.br/SEULINK7",
  },

  {
    nome: "Aspirador Philco Vertical",
    preco: "R$ 299,90",
    categoria: "Casa",
    selo: "Casa limpa",
    imagem:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    link: "https://pay.kiwify.com.br/SEULINK8",
  },

  {
    nome: "Caixa de Som Philco Bluetooth",
    preco: "R$ 219,90",
    categoria: "Áudio",
    selo: "Bluetooth",
    imagem:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80",
    link: "https://pay.kiwify.com.br/SEULINK9",
  },

  {
    nome: "Soundbar Philco",
    preco: "R$ 499,90",
    categoria: "Áudio",
    selo: "Cinema em casa",
    imagem:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80",
    link: "https://pay.kiwify.com.br/SEULINK10",
  },

  {
    nome: "Ar-condicionado Philco Split",
    preco: "R$ 1.899,90",
    categoria: "Casa",
    selo: "Conforto",
    imagem:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
    link: "https://pay.kiwify.com.br/SEULINK11",
  },

  {
    nome: "Secador Philco Beauty",
    preco: "R$ 129,90",
    categoria: "Beleza",
    selo: "Beleza",
    imagem:
      "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=900&q=80",
    link: "https://pay.kiwify.com.br/SEULINK12",
  },
];

const categorias = [
  "Todos",
  "Televisões",
  "Cozinha",
  "Informática",
  "Áudio",
  "Casa",
  "Beleza",
];

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState("Todos");

  const produtosFiltrados =
    categoriaSelecionada === "Todos"
      ? produtos
      : produtos.filter(
          (produto) =>
            produto.categoria === categoriaSelecionada
        );

  return (
    <div className="site">

      <header className="topo">

        <h1>🎀 Philco Kitty Store</h1>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#categorias">Categorias</a>
          <a href="#produtos">Produtos</a>
          <a href="#contato">Contato</a>
        </nav>

      </header>

      <section className="hero" id="inicio">

        <div className="hero-texto">

          <span>💖 Loja Oficial Philco 💖</span>

          <h2>
            Eletrônicos Philco <br />
            com visual moderno e rosa
          </h2>

          <p>
            TVs, eletrodomésticos, informática e muito mais,
            organizados por categorias e com compra online.
          </p>

          <div className="hero-botoes">

            <a href="#produtos" className="botao">
              Ver Produtos
            </a>

            <a href="#categorias" className="botao-secundario">
              Categorias
            </a>

          </div>

        </div>

      </section>

      <section className="vantagens">

        <div>🚚 Frete rápido</div>
        <div>💳 Parcelamento</div>
        <div>🛡️ Compra segura</div>
        <div>🎀 Ofertas especiais</div>

      </section>

      <section className="categorias" id="categorias">

        <h2>Compre por categoria</h2>

        <div className="botoes-categorias">

          {categorias.map((categoria) => (

            <button
              key={categoria}
              onClick={() =>
                setCategoriaSelecionada(categoria)
              }
              className={
                categoriaSelecionada === categoria
                  ? "ativo"
                  : ""
              }
            >
              {categoria}
            </button>

          ))}

        </div>

      </section>

      <section className="produtos" id="produtos">

        <h2>✨ Produtos em destaque ✨</h2>

        <div className="grid">

          {produtosFiltrados.map((produto, index) => (

            <div className="card" key={index}>

              <span className="selo">
                {produto.selo}
              </span>

              <img
                src={produto.imagem}
                alt={produto.nome}
              />

              <p className="categoria">
                {produto.categoria}
              </p>

              <h3>{produto.nome}</h3>

              <strong>{produto.preco}</strong>

              <a
                href={produto.link}
                target="_blank"
                rel="noreferrer"
                className="comprar"
              >
                🛒 Comprar agora
              </a>

            </div>

          ))}

        </div>

      </section>

      <section className="banner">

        <h2>
          🎀 Loja online moderna e organizada
        </h2>

        <p>
          Site premium com categorias, produtos e compra online.
        </p>

      </section>

      <footer id="contato">

        <h3>Philco Kitty Store</h3>

        <p>💖 Atendimento online</p>

        <p>© 2026 Todos os direitos reservados</p>

      </footer>

    </div>
  );
}

export default App;

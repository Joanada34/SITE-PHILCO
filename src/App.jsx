import React, { useState } from "react";
import "./App.css";

const estilos = ["Todos", "Casual", "Patricinha", "Streetwear", "Faculdade", "Festa", "Praia", "Frio"];

const pecas = [
  "cropped branco", "calça wide leg", "saia jeans", "vestido floral", "blazer rosa",
  "shorts alfaiataria", "calça cargo", "camiseta oversized", "jaqueta jeans", "top básico"
];

const calcados = [
  "tênis branco", "coturno preto", "sandália plataforma", "sapatilha", "bota cano curto",
  "rasteirinha", "salto bloco", "all star", "papete", "mule"
];

const acessorios = [
  "bolsa baguete", "óculos de sol", "argolas douradas", "colar delicado", "tiara",
  "scrunchie", "cinto fino", "bolsa transversal", "pulseiras", "presilha"
];

const imagens = [
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80"
];

const looks = Array.from({ length: 1000 }, (_, i) => {
  const estilo = estilos[(i % (estilos.length - 1)) + 1];

  return {
    id: i + 1,
    nome: `Look ${i + 1} - ${estilo}`,
    estilo,
    peca: pecas[i % pecas.length],
    calcado: calcados[i % calcados.length],
    acessorio: acessorios[i % acessorios.length],
    imagem: imagens[i % imagens.length],
  };
});

function App() {
  const [categoria, setCategoria] = useState("Todos");
  const [busca, setBusca] = useState("");

  const looksFiltrados = looks.filter((look) => {
    const categoriaOk = categoria === "Todos" || look.estilo === categoria;
    const buscaOk =
      look.nome.toLowerCase().includes(busca.toLowerCase()) ||
      look.peca.toLowerCase().includes(busca.toLowerCase()) ||
      look.calcado.toLowerCase().includes(busca.toLowerCase()) ||
      look.acessorio.toLowerCase().includes(busca.toLowerCase());

    return categoriaOk && buscaOk;
  });

  return (
    <div className="site">
      <header className="topo">
        <h1>🎀 LookBook Teen</h1>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#categorias">Categorias</a>
          <a href="#looks">Looks</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div>
          <span>✨ Mais de 1.000 ideias de looks ✨</span>

          <h2>Inspirações de moda para meninas jovens</h2>

          <p>
            Looks modernos, estilosos e femininos para faculdade, passeio,
            festa, frio, praia e dia a dia.
          </p>

          <a href="#looks" className="botao">Ver looks</a>
        </div>
      </section>

      <section className="categorias" id="categorias">
        <h2>Escolha seu estilo</h2>

        <input
          type="text"
          placeholder="Pesquisar por cropped, saia, tênis..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <div className="botoes">
          {estilos.map((item) => (
            <button
              key={item}
              onClick={() => setCategoria(item)}
              className={categoria === item ? "ativo" : ""}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="looks" id="looks">
        <h2>💖 {looksFiltrados.length} ideias encontradas 💖</h2>

        <div className="grid">
          {looksFiltrados.map((look) => (
            <div className="card" key={look.id}>
              <img src={look.imagem} alt={look.nome} />

              <span>{look.estilo}</span>

              <h3>{look.nome}</h3>

              <p><strong>Peça principal:</strong> {look.peca}</p>
              <p><strong>Calçado:</strong> {look.calcado}</p>
              <p><strong>Acessório:</strong> {look.acessorio}</p>

              <button>Salvar inspiração 💕</button>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <h3>LookBook Teen 🎀</h3>
        <p>Inspirações de moda jovem para montar looks incríveis.</p>
      </footer>
    </div>
  );
}

export default App;

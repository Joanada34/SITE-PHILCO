import React, { useState } from "react";
import "./App.css";

const estilos = [
  "Todos",
  "Coquette",
  "Balletcore",
  "Old Money",
  "Streetwear",
  "Y2K",
  "Clean Girl",
  "Boho",
  "Faculdade",
  "Festa",
  "Praia",
  "Frio",
];

const imagens = [
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
];

const bases = {
  Coquette: ["saia plissada rosa", "blusa de renda branca", "cardigan com laço", "vestido floral curto"],
  Balletcore: ["body rosé", "saia de tule", "casaquinho transpassado", "calça legging clara"],
  "Old Money": ["calça alfaiataria bege", "camisa branca", "blazer estruturado", "colete de tricô"],
  Streetwear: ["calça cargo", "camiseta oversized", "jaqueta bomber", "moletom cropped"],
  Y2K: ["mini saia jeans", "top colorido", "calça cintura baixa", "bolsa baguete"],
  "Clean Girl": ["calça wide leg branca", "regata básica", "camisa oversized", "conjunto neutro"],
  Boho: ["vestido fluido", "saia longa estampada", "blusa ombro a ombro", "kimono leve"],
  Faculdade: ["calça jeans reta", "t-shirt básica", "jaqueta jeans", "moletom confortável"],
  Festa: ["vestido acetinado", "saia brilhante", "cropped elegante", "conjunto alfaiataria"],
  Praia: ["saída de praia", "shorts de linho", "cropped leve", "vestido soltinho"],
  Frio: ["sobretudo bege", "suéter oversized", "calça de couro", "trench coat"],
};

const calcados = [
  "tênis branco",
  "sapatilha delicada",
  "bota cano curto",
  "coturno preto",
  "sandália plataforma",
  "salto bloco",
  "papete",
  "mocassim",
  "ballet flats",
  "all star",
];

const acessorios = [
  "bolsa baguete",
  "laço no cabelo",
  "óculos de sol",
  "argolas douradas",
  "colar de pérolas",
  "cinto fino",
  "presilha delicada",
  "bolsa transversal",
  "tiara rosa",
  "pulseiras douradas",
];

const cores = [
  "rosa claro",
  "branco",
  "bege",
  "preto",
  "azul jeans",
  "marrom",
  "off-white",
  "lilás",
  "vermelho cereja",
  "cinza",
];

const ocasioes = [
  "shopping",
  "faculdade",
  "cinema",
  "date",
  "aniversário",
  "passeio no centro",
  "viagem",
  "almoço em família",
  "festa à noite",
  "domingo casual",
];

const looks = Array.from({ length: 1200 }, (_, i) => {
  const estilo = estilos[(i % (estilos.length - 1)) + 1];
  const pecas = bases[estilo];

  return {
    id: i + 1,
    estilo,
    nome: `Look Pinterest ${i + 1}`,
    peca: pecas[i % pecas.length],
    segundaPeca: pecas[(i + 2) % pecas.length],
    calcado: calcados[(i * 3) % calcados.length],
    acessorio: acessorios[(i * 5) % acessorios.length],
    cor: cores[(i * 7) % cores.length],
    ocasiao: ocasioes[(i * 4) % ocasioes.length],
    imagem: imagens[i % imagens.length],
  };
});

function App() {
  const [categoria, setCategoria] = useState("Todos");
  const [busca, setBusca] = useState("");

  const looksFiltrados = looks.filter((look) => {
    const categoriaOk = categoria === "Todos" || look.estilo === categoria;
    const buscaOk =
      look.estilo.toLowerCase().includes(busca.toLowerCase()) ||
      look.peca.toLowerCase().includes(busca.toLowerCase()) ||
      look.segundaPeca.toLowerCase().includes(busca.toLowerCase()) ||
      look.ocasiao.toLowerCase().includes(busca.toLowerCase());

    return categoriaOk && buscaOk;
  });

  return (
    <div className="site">
      <header className="topo">
        <h1>🎀 LookBook Pinterest Teen</h1>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#categorias">Estilos</a>
          <a href="#looks">Looks</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div>
          <span>✨ +1.200 ideias de looks ✨</span>
          <h2>Looks elaborados para meninas de 16 a 20 anos</h2>
          <p>
            Inspirações estilo Pinterest: coquette, clean girl, old money,
            streetwear, Y2K, festa, praia, faculdade e muito mais.
          </p>
          <a href="#looks" className="botao">Ver inspirações</a>
        </div>
      </section>

      <section className="categorias" id="categorias">
        <h2>Escolha seu estilo</h2>

        <input
          type="text"
          placeholder="Pesquisar: festa, faculdade, rosa, blazer..."
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
        <h2>💖 {looksFiltrados.length} looks encontrados 💖</h2>

        <div className="grid">
          {looksFiltrados.map((look) => (
            <div className="card" key={look.id}>
              <img src={look.imagem} alt={look.nome} />

              <span>{look.estilo}</span>

              <h3>{look.nome}</h3>

              <p><strong>Combinação:</strong> {look.peca} + {look.segundaPeca}</p>
              <p><strong>Cor principal:</strong> {look.cor}</p>
              <p><strong>Calçado:</strong> {look.calcado}</p>
              <p><strong>Acessório:</strong> {look.acessorio}</p>
              <p><strong>Ocasião:</strong> {look.ocasiao}</p>

              <button>Salvar inspiração 💕</button>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <h3>LookBook Pinterest Teen 🎀</h3>
        <p>Inspirações de moda jovem, femininas e modernas.</p>
      </footer>
    </div>
  );
}

export default App;

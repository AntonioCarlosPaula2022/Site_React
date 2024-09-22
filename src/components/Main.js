import React from 'react';
import './Main.css';

const beers = [
  {
    id: 1,
    name: 'Cerveja Artesanal EveryDay',
    description: 'Uma cerveja leve com notas frutadas.',
    price: 'R$ 20,00',
    image: 'https://wbl.blob.core.windows.net/cdn/132/500-rotulo-para-cerveja-artesanal-retangular-100x90mm-em-adesivo-couche-brilho-80g-4x0-sem-enobrecimento-cartela-meio-corte-padrao-145857.png' // Substitua pelo link real da imagem
  },
  {
    id: 2,
    name: 'Cerveja Artesanal HappyDay',
    description: 'Uma cerveja escura com sabor encorpado.',
    price: 'R$ 25,00',
    image: 'data:image/jpeg;base64,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',
  },
  {
    id: 3,
    name: 'Cerveja Artesanal OverDay',
    description: 'Uma cerveja Pilsen leve e saborosa.',
    price: 'R$ 10,00',
    image: 'https://wbl.blob.core.windows.net/cdn/132/500-rotulo-para-cerveja-artesanal-retangular-100x90mm-em-adesivo-couche-brilho-80g-4x0-sem-enobrecimento-cartela-meio-corte-padrao-145858.png', 
  },
  {
    id: 4,
    name: 'Cerveja Artesanal ToDay',
    description: 'Uma cerveja Lager para quem sabe o que quer.',
    price: 'R$ 15,00',
    image: 'data:image/jpeg;base64,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', 
  },

  
];

function Main() {
  return (
    <main className="main">
      <h2> Nossas Cervejas </h2>
      <div className="beer-list">
        {beers.map(beer => (
          <div className="beer-item" key={beer.id}>
            <img src={beer.image} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>{beer.description}</p>
            <p className="price">{beer.price}</p>
            <button>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;

import Highlight from './Highlight';

function HighlightList() {
  const HighlightData = [
    {
      image: 'https://betrybe.github.io/images/trybe/chat.jpg',
      text: 'Depoimento',
    },
    {
      image: 'https://betrybe.github.io/images/trybe/midia.jpg',
      text: 'Mídia',
    },
    {
      image: 'https://betrybe.github.io/images/trybe/money.jpg',
      text: 'Investimento',
    },
    {
      image: 'https://betrybe.github.io/images/trybe/star.jpg',
      text: 'Influencers',
    },
  ];
  return (
    <div className="highlight__container">
      {
        HighlightData.map((item, index) => (
          <Highlight
            key={ index }
            imagem={ item.image }
            texto={ item.text }
          />))
      }
    </div>
  );
}

export default HighlightList;

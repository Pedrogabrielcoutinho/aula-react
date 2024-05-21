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
  ];
  return (
    <div className="highlight__container">
      {
        HighlightData.map((item) => {
          console.log(item.text);
          return <Highlight key={ item.text } />;
        })
      }
    </div>
  );
}

export default HighlightList;

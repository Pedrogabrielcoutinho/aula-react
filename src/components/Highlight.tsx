type HighlightProps = {
  imagem: string;
  texto: string;
};

function Highlight({ imagem, texto }: HighlightProps) {
  return (
    <div className="highlight">
      <div className="image">
        <img src={ imagem } alt={ texto } />
      </div>
      <p>{ texto }</p>
    </div>
  );
}

export default Highlight;

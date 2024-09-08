function Card({ imageSrc, title }) {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default Card;

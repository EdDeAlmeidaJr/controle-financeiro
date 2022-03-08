const Card = ({ title, elem }) => (
  <div className="card">
    <div className="card-header">
      <h5>{title}</h5>
    </div>
    <div className="card-body">{elem}</div>
  </div>
);

export default Card;

function Card({ title, description }) {
    return (
      <div className="card">
        <div className="card-body">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  
  export default Card;
import star from '../images/Star 1.png'

function Card(props) {
  return (
    <div className="card">
      <div className="card--image-section">
        <img className="card--image" src={`./images/${props.img}`} />
        <p className="card--status">SOLD OUT</p>
      </div>
      <div className="card--rating-text">
        <img className="card--star" src={star} />
        <p>{props.rating} ({props.reviewCount}) · {props.country}</p>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price"><strong>From ${props.price}</strong> / person</p>
    </div>
  ) 
}

export default Card
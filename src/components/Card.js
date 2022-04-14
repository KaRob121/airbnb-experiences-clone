import star from '../images/Star 1.png'

function Card(props) {
  let cardStatus

  if (props.openSpots === 0) {
    cardStatus = "SOLD OUT"
  } else if (props.location === "Online") {
    cardStatus = "ONLINE"
  }

  console.log(cardStatus)

  return (
    <div className="card">
      <div className="card--image-section">
        <img className="card--image" src={`./images/${ props.img }`} />
        { cardStatus && <p className="card--status">{ cardStatus }</p> }
      </div>
      <div className="card--rating-text">
        <img className="card--star" src={star} />
        <p>{ props.rating } ({ props.reviewCount }) · { props.location }</p>
      </div>
      <p className="card--title"> {props.title }</p>
      <p className="card--price"><strong>From ${ props.price }</strong> / person</p>
    </div>
  ) 
}

export default Card
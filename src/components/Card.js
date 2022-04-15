import star from '../images/Star 1.png'

function Card(props) {
  let cardStatus

  if (props.item.openSpots === 0) {
    cardStatus = "SOLD OUT"
  } else if (props.item.location === "Online") {
    cardStatus = "ONLINE"
  }

  return (
    <div className="card">
      <div className="card--image-section">
        <img className="card--image" src={`./images/${ props.item.coverImg }`} />
        { cardStatus && <p className="card--status">{ cardStatus }</p> }
      </div>
      <div className="card--rating-text">
        <img className="card--star" src={star} />
        <p>{ props.item.stats.rating.toFixed(1) } ({ props.item.stats.reviewCount }) · { props.item.location }</p>
      </div>
      <p className="card--title"> {props.item.title }</p>
      <p className="card--price"><strong>From ${ props.item.price }</strong> / person</p>
    </div>
  ) 
}

export default Card
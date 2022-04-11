import expImage from '../images/image 12.png'
import star from '../images/Star 1.png'

function Card () {
  return (
    <div className="card">
      <div className="card--image-section">
        <img className="card--image" src={expImage} />
        <p className="card--status">SOLD OUT</p>
      </div>
      <div className="card--rating-text">
        <img className="card--star" src={star} />
        <p>5.0 (6) · USA</p>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><strong>From $136</strong> / person</p>
    </div>
  ) 
}

export default Card
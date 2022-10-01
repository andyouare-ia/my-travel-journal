import pointer from '../assets/pointer.png'

export default function Card(props) {
  return (
    <div className="card">
      <img className="card--image" src={props.imageUrl} alt="Mont Fuji" />
      <div className="card--info">
      <div className="card--location">
        <img className="card--pointer" src={pointer} alt="location pointer" />
        <h2>{props.location.toUpperCase()}</h2>
        <a href={props.googleMapsUrl} className="card--link">View on Google Maps</a>
      </div>
      <div className="card--description">
        <h1>{props.title}</h1>
        <h3>{props.startDate} - {props.endDate}</h3>
        <p>{props.description}</p>
      </div>
      </div>
    </div>
  )
}

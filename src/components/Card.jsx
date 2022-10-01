import pointer from '../assets/pointer.png'

export default function Card() {
  return (
    <div className="card">
      <img className="card--image" src="https://source.unsplash.com/WLxQvbMyfas" alt="Mont Fuji" />
      <div className="card--info">
      <div className="card--location">
        <img className="card--pointer" src={pointer} alt="location pointer" />
        <h2>JAPAN</h2>
        <a href="https://goo.gl/maps/pPgXPiKdQFjPgZap6" className="card--link">View on Google Maps</a>
      </div>
      <div className="card--description">
        <h1>Mont Fuji</h1>
        <h3>12 Jan, 2021 - 24 Jan, 2021</h3>
        <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
      </div>
      </div>
    </div>
  )
}

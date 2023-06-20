
function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} className="card__img" />
      <div className="content-wrapper">
        <div className="location">
          <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" fill="none">
            <path fill="#F55A5A" fillRule="evenodd" d="M3.579 5.25a1.67 1.67 0 1 1-.001-3.34 1.67 1.67 0 0 1 0 3.34ZM3.484 0C1.542 0 0 1.637 0 3.656c0 2.752 2.95 5.596 2.95 5.596.398.376.644.406 1.066 0 0 0 2.984-2.844 2.984-5.596C7 1.636 5.425 0 3.484 0Z" clipRule="evenodd"/>
          </svg>
          <span>{props.location}</span>
          <a className="location__link" href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className="card__title">{props.title}</h2>
        <div className="card__date">{props.startDate} - {props.endDate}</div>
        <p className="card__desc">{props.description}</p>
      </div>
    </div>
  )
}

export default Card
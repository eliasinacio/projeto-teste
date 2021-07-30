import '../styles/card.scss'

const Card = (props) => {
  return (
    <div className="card">
      <header>
        <img src={props.iconUrl} alt="icon"/>
        <h3>{props.title}</h3>
      </header>

      <span className="horizontal-line">
        {props.additionalText}
      </span>
      
      <p className="content">{props.content}</p>
    </div>
  )
}

export default Card;
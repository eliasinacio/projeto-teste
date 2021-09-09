import { Container } from "./styles";

interface CardProps extends HTMLDivElement {
  iconUrl: string,
  title: string,
  additionalText?: string,
  content: string
}

const Card = (props: CardProps) => {
  return (
    <Container>
      <header>
        <img src={props.iconUrl} alt="icon"/>
        <h3>{props.title}</h3> 
      </header>

      <span className="horizontal-line">
        {props.additionalText}
      </span>
      
      <p className="content">{props.content}</p>
    </Container>
  )
}

export default Card;
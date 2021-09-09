import { useState } from 'react';
import { Container } from './styles';

const Post = (props: any) => {
  const [isLiked, setIsLiked] = useState(props.isLiked);

  const handleLikePost = () => {
    setIsLiked(!isLiked);
  }

  const isPrivate = (privacy: any) => {
    if (privacy) {
      return (
        <>
          <img src={lockIcon} alt="lock icon" />
          Somente eu
        </>
      )
    } else {
      return (
        <>
          <img src={worldIcon} alt="world globe"/>
          Público
        </>
      )
    }
  }

  return (
    <Container>
      <header>
        <div className="icon">
          <img src={props.imgUrl} alt="User Profile" />
        </div>

        <div className="post-header-data">
          <h2 id="author">{props.author}</h2>
          <div>
            <span id="publication">
              <img src={clockIcon} alt="clock icon" />
              há {props.publication.number} {props.publication.time === "hrs" ? "horas" : "minutos"} atrás</span>

            <span id="privacy">
             {isPrivate(props.isPrivate)}
            </span>
          </div>
        </div>

        <img id="options-btn" src={menuIcon} alt="options icon" />
      </header>

      <div id="post-body">
        {props.body}
      </div>

      <footer>
        <div className="post-footer-data">
          <span id="likes">
            { props.likes > 1 ? `${props.likes} curtidas` : "Seja o primeiro a curtir isso" }
          </span>

          <span>
            <span id="comments">
              {props.comments} comentário(s)
            </span>

            <span id="shares">
              {props.shares} compartilhamento(s)
            </span>
          </span>
        </div>

        <div className="footer-buttons">
          <button
            id="like-btn"
            className={isLiked && 'isLiked'}
            onClick={handleLikePost}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#55555585" d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" /></svg>
            Curtir
          </button>

          <button id="comment-btn">
            <img src={commentIcon} alt="comment" />
            Comentar
          </button>

          <button id="share-btn">
            <img src={shareIcon} alt="share" />
            Compartilhar
          </button>
        </div>
      </footer>
    </Container>
  )
}

export default Post;


const 
  menuIcon = "https://img.icons8.com/material-rounded/24/000000/expand-arrow--v1.png",
  clockIcon = "https://img.icons8.com/windows/16/000000/clock--v1.png",
  worldIcon = "https://img.icons8.com/material-rounded/16/000000/globe--v1.png",
  lockIcon = "https://img.icons8.com/material-outlined/16/000000/lock--v1.png",
  commentIcon = "https://img.icons8.com/material-outlined/22/454545/topic--v1.png",
  shareIcon = "https://img.icons8.com/material/22/454545/share--v1.png"
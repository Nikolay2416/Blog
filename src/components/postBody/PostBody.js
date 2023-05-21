import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {Link} from "react-router-dom";
import { fetchPostCommentsStart } from '../../reducers/index';

import avatarPost from "../../assets/avatarPost.jpg";

const PostBody = ({ id, title, body }) => {
  const { commentsPost, loadingCommentsPost } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [сommentairesSur, setCommentairesSur] = useState(false);

  const buttonCommentairesSur = () => {
    setCommentairesSur(!сommentairesSur)
  }

  const cropText = (text, numberOfCharacters) => {
    if (text.length > numberOfCharacters) {
      text = text.slice(0, numberOfCharacters);
      text += '...'
    } 
    return text
  }

  const renderCommentsList = (arr) => {
    if (сommentairesSur) {
      if (loadingCommentsPost) {
        return (
                <h5 className="text-center mt-5">Загрузка...</h5>
        )
      }
  
      return arr.map(({id, email, body}) => {
          return (
            <div key={id}>
              <p>{email}</p>
              <p>{body}</p>
            </div> 
          )
      })
    }
  }

  const elements = renderCommentsList(commentsPost);

  return (
    <div className="w-25 p-3 d-flex flex-column justify-content-between">
      <div>
        <Link to={`/UserDetailsPage`}>
          <div className="w-75 m-auto">
            <img src={avatarPost} className="w-100"   alt="avatarPost" />
          </div>
        </Link>
        <p className="text-center mb-3 fs-4">{cropText(title, 40)}</p>
        <p className="text-center mb-3 fs-5 text-muted">{cropText(body, 80)}</p>
      </div>
      <div>
        <button 
          className="w-100 btn btn-light" 
          onClick={() => {
            dispatch(fetchPostCommentsStart(id));
            buttonCommentairesSur()
          }}
        >Комментарии</button>
        <div>
          {elements}
        </div>
      </div>
    </div>
  );
};

export default PostBody;
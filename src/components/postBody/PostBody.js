import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { fetchPostCommentsStart } from '../../reducers/index';
import { fetchUserStart } from '../../reducers/user';
import PostComment from "../postComment/PostComment";

import "./postBody.css"
import avatarPost from "../../assets/avatarPost.jpg";

const PostBody = ({ id,userId, title, body }) => {
  const { commentsPost, loadingCommentsPost } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const [isCommentVisible, setCommentVisible] = useState(false);
  const [openedPostId, setOpenedPostId] = useState(null);

  const buttonCommentairesSur = () => {
    if (openedPostId !== id && openedPostId !== null) {
      setCommentVisible(false);
    }
    setOpenedPostId(id);
    setCommentVisible(!isCommentVisible);
  }

  useEffect(() => {
    if (!loadingCommentsPost && openedPostId !== null) {
      const currentPostComments = commentsPost.filter(comment => comment.postId === openedPostId);
      if (currentPostComments.length === 0) {
        setCommentVisible(false);
        setOpenedPostId(null);
      }
    }
  }, [commentsPost, openedPostId]);

  const cropText = (text, numberOfCharacters) => {
    if (text.length > numberOfCharacters) {
      text = text.slice(0, numberOfCharacters);
      text += '...'
    } 
    return text
  }

  return (
    <div className="w-25 position-relative">
      <div className="w-100 h-100 p-3 d-flex flex-column justify-content-between">
        <div>
          <Link 
            to={`/UserDetailsPage/${userId}`}
            onClick={() => dispatch(fetchUserStart(userId))}
          >
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
              buttonCommentairesSur();
            }}
          >Комментарии</button>
            <div className={isCommentVisible && openedPostId === id ? "active" : "non_active"}>
              <p className="text-center fs-5">Комментарии:</p>
              <PostComment isCommentVisible={isCommentVisible} openedPostId={openedPostId} id={id}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PostBody;
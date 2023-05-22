import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { fetchPostCommentsStart } from '../../reducers/commentsReducer';
import { fetchUserStart } from '../../reducers/postsAndUserReducer';
import PostComment from "../postComment/PostComment";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./postBody.css"
import avatarPost from "../../assets/avatarPost.jpg";

const PostBody = ({ id, userId, title, body }) => {
  const { commentsPost, loadingCommentsPost } = useSelector((state) => state.comments);
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

  return (
    <div className="w-50 position-relative">
        <Card style={{ width: '34rem', height: '35rem' }} className="m-2 ">
          <Link 
              to={`/UserDetailsPage/${userId}`}
              onClick={() => dispatch(fetchUserStart(userId))}
            >
            <Card.Img variant="top" src={avatarPost} />
          </Link>
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {body}
            </Card.Text>
            <Button 
              variant="dark"
              onClick={() => {
                dispatch(fetchPostCommentsStart(id));
                buttonCommentairesSur();
              }}
            >Комментарии</Button>
            <div className={isCommentVisible && openedPostId === id ? "active" : "non_active"}>
              <Card>
                <p className="text-center fs-5">Комментарии:</p>
                <PostComment isCommentVisible={isCommentVisible} openedPostId={openedPostId} id={id}/>
              </Card>
            </div>
          </Card.Body>
        </Card>
    </div>
  );
};

export default PostBody;
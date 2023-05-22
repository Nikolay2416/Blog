import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../spinner/Spinner";

const PostComment = ({isCommentVisible, openedPostId, id}) => {
  const { commentsPost, loadingCommentsPost } = useSelector((state) => state.comments);
  const [loadingComment, setLoadingComment] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingComment(false);
    }, 500);
  }, [id]);

  const renderCommentsList = (arr) => {
    if (isCommentVisible && openedPostId === id) {

      if (loadingComment) {
        return (
          <h5 className="text-center mt-5"><Spinner/></h5>
        );
      }

      if (loadingCommentsPost) {
        return <h5 className="text-center mt-5"><Spinner/></h5>;
      }
  
      return arr.map(({id, email, body}) => {
          return (
            <div key={id}>
              <p className="text-center fs-5">{email}</p>
              <p className="m-3 fs-6 text-muted">{body}</p>
            </div> 
          );
      });
    }
  }

  const elements = renderCommentsList(commentsPost);

  return (
    <>
      {elements}
    </>
  );
};

export default PostComment;
import { useSelector } from "react-redux";

const PostComment = ({isCommentVisible, openedPostId, id}) => {

  const { commentsPost, loadingCommentsPost } = useSelector((state) => state.post);

  const renderCommentsList = (arr) => {
    if (isCommentVisible && openedPostId === id) {
      if (loadingCommentsPost) {
        return <h5 className="text-center mt-5">Загрузка...</h5>;
      }
  
      return arr.map(({id, email, body}) => {
          return (
            <div key={id}>
              <p className="text-center fs-5">{email}</p>
              <p className="m-1 fs-6 text-muted">{body}</p>
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
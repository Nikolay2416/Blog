import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PostBody from "../postBody/PostBody";

const HomePosts = () => {
  const { posts } = useSelector((state) => state.post);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const renderPostsList = (arr) => {
    if (loading) {
      return (
        <h5 className="text-center mt-5">Загрузка...</h5>
      );
    }

    if (arr.length === 0) {
      return (
        <h5 className="text-center mt-5">Нет постов</h5>
      );
    }

    return arr.map(({ id, ...props }) => {
      return (
        <PostBody key={id} id={id} {...props} />
      );
    });
  };

  const elements = renderPostsList(posts);

  return (
    <div className="col-sm-9 m-auto d-flex flex-wrap">
      {elements}
    </div>
  );
};

export default HomePosts;
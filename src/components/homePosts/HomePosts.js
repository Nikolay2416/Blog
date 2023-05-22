import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PostBody from "../postBody/PostBody";
import Spinner from "../spinner/Spinner";

import CardGroup from 'react-bootstrap/CardGroup';

const HomePosts = () => {
  const { posts } = useSelector((state) => state.postsAndUser);
  const [loadingPost, setLoadingPost] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPost(false);
    }, 500);
  }, []);

  const renderPostsList = (arr) => {
    if (loadingPost) {
      return (
        <h5 className="text-center mt-5 w-25 m-auto"><Spinner/></h5>
      );
    }

    if (arr.length === 0) {
      return (
        <h5 className="text-center mt-5 w-25 m-auto"><Spinner/></h5>
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
    <CardGroup className="col-sm-9 m-auto d-flex flex-wrap">
      {elements}
    </CardGroup>
  );
};

export default HomePosts;
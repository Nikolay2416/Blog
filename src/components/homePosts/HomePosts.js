import { useSelector } from "react-redux";

const HomePosts = () => {
  const { posts } = useSelector((state) => state.post);

  console.log(posts)

  return (
    <div className="col-sm-9 m-auto">

    </div>
  );
};

export default HomePosts;
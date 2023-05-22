import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUserStart } from '../../reducers/postsAndUserReducer';
import {Link, useParams} from "react-router-dom";
import PostBody from "../postBody/PostBody";
import Spinner from "../spinner/Spinner";

import Button from 'react-bootstrap/Button';
import avatarPost from "../../assets/avatarPost.jpg";

const UserDetails = () => {
  const { user, userPosts } = useSelector((state) => state.postsAndUser);
  const dispatch = useDispatch();
  const { userId } = useParams();

  const [loadingPostsUser, setLoadingPostsUser] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPostsUser(false);
    }, 500);
  }, []);

  useEffect(() => {
    dispatch(fetchUserStart(userId))
  }, [userId]);


  const renderPostsUser = (arr) => {
    if (loadingPostsUser) {
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

  const elements = renderPostsUser(userPosts);


  return (
    <div className='col-sm-9 m-auto'>
      <Link to="/" className="text-decoration-none text-dark fs-5 border-bottom">
        <Button className="btn-secondary">
          Назад
        </Button>
      </Link>
      <div className="d-flex justify-content-start align-items-center">
        <div className="me-3 mt-3">
          <img src={avatarPost} alt="avatarPost" className="rounded" />
        </div>
        <div className="ms-3 fs-5">
          <p>Имя: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Город: {user.address?.city}</p>
          <p>Компания: {user.company?.name}</p>
        </div>
      </div>
      <p className="me-3 mt-3 fs-4">Посты пользователя:</p>
      <div className="col-sm-9 m-auto d-flex flex-wrap w-100">
         {elements}
      </div>
    </div>
  );
};

export default UserDetails;
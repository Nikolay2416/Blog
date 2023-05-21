import { useSelector } from "react-redux";

import avatarPost from "../../assets/avatarPost.jpg";

const UserDetails = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user)

  return (
    <div className='col-sm-9 m-auto'>
      <div className="w-25 m-auto">
        <img src={avatarPost } alt="avatarPost" />
      </div>
      <p>Имя</p>
      <p>Емайл</p>
      <div>
        <p>пост</p>
      </div>
    </div>
  );
};

export default UserDetails;
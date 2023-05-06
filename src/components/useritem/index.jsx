import "./styles.css";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const UserItem = () => {
  const users = useSelector(state => state.mainReducer.users)
  return (
    <div className="user-item1">
      {users.map(user => (
    <div key={user.id} className='card1 text-center'>
    <img src={user.avatar_url} alt={user.login + ' avatar'} className='round-img'/>
    <h3>{user.login}</h3>
    <div>
      <Link to={`/user/${user.login}`} className='btn btn-dark btn-sm my-1'>
        More
      </Link>
    </div>
  </div>
))}
  </div>
  );
};
export default UserItem;

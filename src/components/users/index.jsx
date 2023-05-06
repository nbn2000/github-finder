import { useSelector } from "react-redux";
import Spinner from '../spinner'
import UserItem from "../useritem";

const Users = () => {
   const loading = useSelector(state => state.mainReducer.loading)
  if (loading) {
    return <Spinner />
  } else {
    return <UserItem />
  };
};
export default Users;

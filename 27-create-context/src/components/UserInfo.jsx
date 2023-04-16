import { useContext } from 'react';
import UserContext from '../context/UserContext';

const UserInfo = () => {
  const user = useContext(UserContext);
  return <h1>{user.userName}</h1>;
};

export default UserInfo;

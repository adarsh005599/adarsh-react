import { useContext } from 'react';
import { UserContext } from '../App';

function ChildC() {
  const user = useContext(UserContext);

  return <h4>This is ChildC, User: {user}</h4>;
}

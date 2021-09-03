import { useRouteMatch, useHistory } from "react-router-dom";
import { deleteUser } from "../api";

export const DeleteUser = () => {
  const match = useRouteMatch();
  const history = useHistory()
  deleteUser(match.params.id);
  history.push("/");
  
  return <div>Loading...</div> 
};
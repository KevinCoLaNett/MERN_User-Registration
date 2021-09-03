import { useState, useEffect } from 'react'
import {UserForm} from './userForm.component';
import { useRouteMatch, useHistory } from "react-router-dom";
import { getUser, updateUser } from "../api";

export const EditUser = () => {
  const match = useRouteMatch();
  const [user, setTodo] = useState();
  const history = useHistory()
  
  useEffect(() => {
    const fetchTodo = async () => {
      const user = await getUser(match.params.id);
      setTodo(user);
    }
    fetchTodo();
  });

  const onSubmit = async (data) => {
    await updateUser(data, match.params.id);
    history.push("/");
  };

  return user ? (
    <div className="container">
      <div className="mt-3">
        <h3>Edit User Item</h3>
       <UserForm user={user} onSubmit={onSubmit}/>
      </div>
    </div>
    ) : (
      <div>Loading...</div> 
    ) 
}
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {getUsers} from "../api";

export const UserList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const users = await getUsers();
      setItems(users);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Todo List</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Middlename</th>
              <th>Lastname</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Email Address</th>
              <th>Civil Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map(user => (
                <tr key={user._id}>
                  <td>
                    {user.firstName}
                  </td>
                  <td>
                    {user.middleName}
                  </td>
                  <td>
                    {user.lastName}
                  </td>
                  <td>
                    {user.age}
                  </td>
                  <td>
                    {user.gender}
                  </td>
                  <td>
                    {user.address}
                  </td>
                  <td>
                    {user.emailAddress}
                  </td>
                  <td>
                    {user.civilStatus}
                  </td>
                  <td>
                    <Link to={`/edit/${user._id}`}>Edit </Link>
                    <Link to={`/delete/${user._id}`}>| Delete</Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );

};
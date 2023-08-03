import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUser] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const user = await response.json();
    setUser(user);
    console.log(user);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      getUsers();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="container">
      <h2>Users</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt="" />
              <p>{login}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseEffectFetchData;

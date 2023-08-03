import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarsolkmn";

const MultipleReturns = () => {
  const [isload, setIsLoad] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoad(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoad(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isload) {
    return (
      <>
        <div className="container">
          <h3>Loading...</h3>
        </div>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <div className="container">
          <h3>Err...</h3>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <h1>{user}</h1>
      </div>
    </>
  );
};

export default MultipleReturns;

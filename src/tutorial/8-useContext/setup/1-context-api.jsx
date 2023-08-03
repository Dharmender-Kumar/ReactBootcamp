import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)
// const values = useContext('');npm run de

const PersonContenxt = React.createContext();
console.log(PersonContenxt)

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContenxt.Provider value={{removePerson,people}}>
      <h3>prop drilling</h3>
      <p>{people.length}</p>
      <List />
    </PersonContenxt.Provider>
  );
};

const List = () => {
  const {people} = useContext(PersonContenxt)
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const {removePerson} = useContext(PersonContenxt);
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;

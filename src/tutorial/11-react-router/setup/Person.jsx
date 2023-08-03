import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const [name,setName] = useState('')
  const {id} = useParams()
  useEffect(()=>{
    const newPerson = data.find((person)=>person.id===parseInt(id))
    setName(newPerson.name )
  },[])
  return (
    <div>
      <h2>{name}</h2>
      <button className='btn'><Link to='/people'>Back</Link></button>
    </div>
  );
};

export default Person;

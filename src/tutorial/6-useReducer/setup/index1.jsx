import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// reducer function
const reducer = (state,action)=>{

  if(action.type==='Testing'){
    const newPeople  = [...state.people,action.payLoad]
    return {...state,people:newPeople,isOnModal:true,modalContent:"Item added"}
  }if(action.type==='Null'){
    return{...state,isOnModal:true,modalContent:"Null value not Allowed"}
  }if(action.type==='Close'){
    return{...state,isOnModal:false}
  }if(action.type==='Remove'){
     const newPeople = state.people.filter((person)=>person.id!=action.payload)
     return {...state,people:newPeople,isOnModal:true,modalContent:"Item deleted"}
  }
  throw new Error ('NA')

}

const defaultState = {
  people:[],
  isOnModal:false ,
  modalContent:''
}
let val = 1; 
console.log(val);
const Index = () => {
  const[name,setName] = useState('')
  const [state,dispatch] = useReducer(reducer,defaultState)
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(name){
       const newPeople={id: new Date().getTime().toString(),name};
        dispatch({type:'Testing', payLoad: newPeople})    
        setName('')
    }else{
      dispatch({type:'Null'})
    }
  }
  const closeModal=()=>{
    dispatch({type:'Close'})
  }
  return <div className='container'>
  {state.isOnModal && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}
  <form action="" className='form' onSubmit={handleSubmit}>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
  <button type='submit' className='btn'>Add</button>
  <button className='btn' onClick={++val}></button>
  </form>
  {
    state.people.map((person)=>{
      return(
        <>
          <div key={person.id} className='item'>{person.name}
            <button onClick={()=>dispatch({type:'Remove',payload:person.id})}>Remove</button>
          </div>
        </>
        
      )
    })
  }
  </div>;
};

export default Index;

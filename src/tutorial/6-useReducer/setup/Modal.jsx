import React, { useEffect } from 'react';

const Modal = ({modalContent,closeModal}) => {
  useEffect(()=>{
    setTimeout(()=>closeModal(),2000)
  },[])
  return <>
  {modalContent}
  </>;
}; 

export default Modal;

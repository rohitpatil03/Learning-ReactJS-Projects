import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({item, edit_btn, delete_btn}) => {
  const {id, title} = item;
  return (
    <div className='grocery-item'>
      <p className='title'>{title}</p>
      <div className="btn-container">
        <button type='button' className='edit-btn' onClick={()=>edit_btn(id)}><FaEdit/></button>
        <button type='button' className='delete-btn' onClick={()=>delete_btn(id)}><FaTrash/></button>
      </div>
    </div>

  );
}

export default List

import React, { useState, useEffect, useRef } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [list, setList] =useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState('');
  const [alert, setAlert] = useState(false);
  const [alert_obj, setAlert_obj] = useState({});

  const value_graber = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(value_graber.current.value);
    if(value_graber.current.value && isEditing){
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: value_graber.current.value };
          }
          return item;
        })
      );
      setIsEditing(false);
      setAlert_obj({type:'success', msg:'Edited Successfully'});
      setAlert(true);
      value_graber.current.value = '';
    }
    else if (value_graber.current.value){
      const newItem = {id:new Date().getTime().toString(), title:value_graber.current.value};
      setList([...list, newItem]);
      value_graber.current.value = '';
      setAlert_obj({type:'success', msg:'Item Added Successfully'});
      setAlert(true);
    }
    else{
      //console.log("you are dumb");
    }
    
    //console.log(list);
  }

  useEffect(()=>{
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout (timeout);
  }, [alert])

  const edit_function = (id) => {
    setIsEditing(true);
    const updated_item = list.find((item)=>item.id === id);
    const title_to_be_updated = updated_item.title;
    value_graber.current.value = title_to_be_updated;
    value_graber.current.focus();
    setEditID(id);
  }

  const delete_function = (id) => {
    const updated_list = list.filter((item)=>item.id !== id);
    setList(updated_list);
    setAlert_obj({type:'danger', msg:'Deleted Successfully'});
    setAlert(true);
  }

  const clear_function = () => {
    setList([]);
    setAlert_obj({type:'danger', msg:'Cleared List'});
    setAlert(true);
  }

  return (
    <>
      <section className="section-center">
        {alert && <Alert obj={alert_obj}/>}
        <form className="grocery-form" onSubmit={(e)=>handleSubmit(e)}>
          <h3>Grocery Bud</h3>
          <div className="form-control">
            <input type="text" placeholder='e.g. eggs' className='grocery' ref={value_graber}/>
            <button type='submit' className='submit-btn'>{isEditing ? 'edit' : 'submit'}</button>
          </div>
        </form>
        <div className='grocery-container'>
          {list.map((item)=>{
            const {id, title} = item;
            return(
              <List key={id} item={item} edit_btn={edit_function} delete_btn={delete_function}/>
            );
          })}
          <button className='clear-btn' onClick={()=>clear_function()}>clear all</button>
        </div>
      </section>
    </>
  );
}

export default App

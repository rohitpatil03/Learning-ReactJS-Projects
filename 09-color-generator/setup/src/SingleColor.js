import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({index, color_obj}) => {
  const {alpha, rgb, type, weight} = color_obj;
  const bcg = rgb.join(',');
  console.log(bcg);
  const [classInfo, setClassInfo] = useState('');
  const [alert, setAlert] = useState(false);

  
  const r = rgb[0];
  const g = rgb[1];
  const b = rgb[2];
  let classValue = rgbToHex(r, g, b);
  //console.log(classValue);
  
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setAlert(false);
    }, 2000)
    return () => clearTimeout(timeout)
  }, [alert])

  
  const handleClick = () => {
    navigator.clipboard.writeText(classValue);
    setAlert(true);
  }
  

  return (
    <article className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }} onClick={()=>handleClick()}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{classValue}</p>
      {alert && <p className='alert'>Copied to Clipboard</p>}
    </article>
  );
}

export default SingleColor

import React, { useEffect } from 'react'

const Alert = ({obj}) => {
  const {type, msg} = obj;
  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  );
}

export default Alert

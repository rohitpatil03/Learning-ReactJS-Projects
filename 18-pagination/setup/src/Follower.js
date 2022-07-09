import React from 'react'

const Follower = ({info}) => {
  const [login, html_url, avatar_url] = info;
  return (
    <article className='card'>
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <a href={html_url} className='btn' target='_blank'>View Profile</a>
    </article>
  );
}

export default Follower

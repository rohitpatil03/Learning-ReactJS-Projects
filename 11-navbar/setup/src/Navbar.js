import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);



  return (
    <nav className='nav'>

      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt="Place for the logo" />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link)=>{
              const {id, url, text} = link;
              return(
                <a href={url} key={id}><li key={id}>{text}</li></a>
              );
            })}
          </ul>
        </div>

        <ul className='social-icons'>
          {social.map((item)=>{
            const {id, url, icon} = item;
            return(
              <a href={url} key={id}><li key={id}>{icon}</li></a>
            );
          })}
        </ul>

      </div>
    </nav>
  );
}

export default Navbar

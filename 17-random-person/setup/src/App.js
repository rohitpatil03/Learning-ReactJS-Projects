import React, { useState, useEffect, useRef } from "react";
import anime from 'animejs/lib/anime.es.js'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

const initial_data = {
  picture: { large: defaultImage },
  name: { first: "", last: "" },
  dob: { age: "" },
  email: "",
  phone: 9156777887,
  location: { street: { name: "", number: "" } },
  login: { password: "" },
};

function App() {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState(initial_data);
  const [title, setTitle] = useState('name');
  const [value, setValue] = useState('Jonny');
  

  const animationRef = useRef(null);

  
  const fetchInfo = async () => {
    animationRef.current = anime({
      direction: 'normal',
      loop: 1,
      autoplay : false,
      easing: 'linear',
      targets: '.container',
      translateY: -500,
      opacity:0,
      duration:300
    });
    animationRef.current.play();
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0]
    const { phone, email } = person
    const { large: image } = person.picture
    const { password } = person.login
    const { first, last } = person.name
    const {
      dob: { age },
    } = person
    const {
      street: { number, name },
    } = person.location

    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    }
    setPerson(newPerson)
    setLoading(false)
    setTitle('name')
    setValue(newPerson.name)
    animationRef.current = anime({
      direction: 'normal',
      loop: 1,
      autoplay : false,
      easing: 'linear',
      targets: '.container',
      translateY: 0,
      opacity:1,
      duration:300
    });
    animationRef.current.play();
  };

  useEffect(() => {
    
    setLoading(true);
    fetchInfo();
    setLoading(false);
    
  }, []);

  const handleValue = (e) => {
    if (e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.label
      setTitle(newValue)
      setValue(person[newValue])
    }
  }

  if (loading) {
    return (
      <section className="section">
        <section className="section-center">
          <h1>Loading...</h1>
        </section>
      </section>
    );
  }

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img src={(person && person.image) || defaultImage} alt={person.name} className="user-img"/>
          <p className='user-title'>My {title} is</p>
          <p className='user-value'>{value}</p>
          <div className="values-list">
            <button
              className='icon'
              data-label='name'
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className='icon'
              data-label='email'
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button className='icon' data-label='age' onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              className='icon'
              data-label='street'
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className='icon'
              data-label='phone'
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className='icon'
              data-label='password'
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" onClick={fetchInfo}>{loading ? 'Loading...': 'Random Person'}</button>
        </div>
      </div>
    </main>
  );
}

export default App;

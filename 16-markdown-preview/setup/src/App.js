import React, { useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [text, setText] = useState('# markdown preview');
  const valueGrabber = useRef();
  const handleChange = () => {
    setText(valueGrabber.current.value);
  }
  return (
    <main>
      <section className="markdown">
        <textarea className='input' value={text} onChange={handleChange} ref={valueGrabber}></textarea>
        <article className='result'>
          <ReactMarkdown>{text}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App

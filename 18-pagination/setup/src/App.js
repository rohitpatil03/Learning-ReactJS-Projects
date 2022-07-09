import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const {loading, data} = useFetch();
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading, page])

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }

  const handlePage = (index) => {
    setPage(index)
  }

  return (
    <main>
      <section className='section-title'>
        <h2>Pagination</h2>
        <div className="underline"></div>
      </section>
      <section className="followers">
        <div className="container">
          {followers.map((person)=>{
            const {id, login, html_url, avatar_url} = person;
            return(
              <Follower key={id} info={[login, html_url, avatar_url]}/>
            );
          })}
        </div>
      </section>
      <section>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>Prev</button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className="next-btn" onClick={nextPage}>Next</button>
          </div>
        )}

      </section>
    </main>
  );
}

export default App

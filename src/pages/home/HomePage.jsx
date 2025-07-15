import React from 'react'
import './HomeStyle.css'
const HomePage = () => {
  return (
    <div>
        <p className=' px-5  py-2 '
          style={{ backgroundColor: "#eefdff", color: 'black' }}> 
        BookBaby> Book Printing> Paper Books
        </p>

      <div className="home">
        <div className="container py-5">
          <div className="row ">
            <div className="col-md-5 text-dark ">
              <h1>
                Make a paperback book with our printing & publishing services
              </h1>
              <h3>
                The book style that’s made to connect with readers.
              </h3>
              <button
                className="py-3 px-4 rounded-5 my-4 text-white"
                style={{ backgroundColor: "#c65300", border: "4px solid #efe59b", borderRadius:"50px" }}
              >
                Start your paperback book printing quote
              </button>

            </div>
          </div>
        </div>

      </div>
    </div >
  )
}

export default HomePage
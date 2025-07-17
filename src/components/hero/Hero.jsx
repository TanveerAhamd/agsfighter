import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="container-fluid bg-primary py-3 px-5 bg-opacity-10">
        <span style={{ fontSize: 12 }} className="text-secondary">
          <a href="#" className="text-decoration-none text-secondary">
            BookBaby &gt;
          </a>
          <span className="mx-2">›</span>
          <a href="#" className="text-decoration-none text-secondary">
            BookDesign &gt;
          </a>
          <span className="mx-2">›</span>
          Book Cover Design
        </span>
      </div>

      <div className="container-fluid bg-dark d-flex align-items-center justify-content-center flex-column py-5">
        <h1 className="text-white py-2 mt-md-5 mt-sm-2">
          Professional book cover design services
        </h1>
        <h3 className="text-white py-2">
          Stand out on the shelf with book cover designs starting at $399
        </h3>
        <button className="hero-btn mt-3 rounded-pill mb-md-5 mb-sm-3">
          Create your Book
        </button>
      </div>
    </>
  )
}

export default Hero;

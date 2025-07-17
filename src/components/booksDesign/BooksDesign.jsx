import React from 'react'

const BooksDesign = () => {
  return (
     <>
  <div className="container-fluid bg-dark d-flex align-items-center justify-content-center flex-column py-5">
    <h2 className="text-white py-2 mt-md-5 mt-sm-2 text-center">
      We'll customize a self-publishing experience to meet the unique
      needs of your project (cover design included).
    </h2>

    <h4>
      <a href="#" style={{ color: "#c65300" }}>
        Learn more about our self-publishing services
      </a>
    </h4>

    <h2 className="text-white py-2">Need cover design only? Use our quoter:</h2>

    <div className="form bg-white rounded-1 p-5 border-none">
      <h4>Get a quote now</h4>
      <p className="text-muted" style={{ fontSize: "0.9rem" }}>
        Configure a Cover Design quote for your book.
      </p>

      <form className="mt-2">
        {/* Cover Type */}
        <div className="mb-3">
          <select className="form-select" defaultValue="">
            <option disabled value="">
              What type of cover do you need?
            </option>
            <option>Printed book cover (includes free eBook cover)</option>
            <option>eBook cover only</option>
          </select>
        </div>

        {/* Genre */}
        <div className="mb-2">
          <select className="form-select" defaultValue="">
            <option disabled value="">
              Select the book genre
            </option>
            <option>Romance</option>
            <option>Thriller</option>
            <option>Self-help</option>
            <option>Science Fiction</option>
            <option>Fantasy</option>
          </select>
        </div>

        {/* Quote Name */}
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a name for your quote"
          />
        </div>

        {/* Price */}
        <div className="price-box mb-2">
          <div className="d-flex align-items-center justify-content-between">
            <span>
              Price{" "}
              <span className="text-muted text-secondary" style={{ fontSize: 12 }}>
                (exclude tax)
              </span>
            </span>
            <span>$0.00</span>
          </div>
          <p className="text-muted" style={{ fontSize: 12 }}>
            Promo codes can be added after quote is configured.
          </p>
        </div>

        <button className="hero-btn rounded-pill w-100" type="submit">
          Save Quote
        </button>
      </form>
    </div>
  </div>

  {/* Section 2 */}
  <div className="container-fluid bg-white py-5">
    <div className="container py-3">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-9 col-sm-12">
          <h1 className="py-2 fw-light">What makes a great book cover?</h1>
          <p>
            A good book design should tell a story. The cover art will communicate a general theme
            of the book while hinting at what’s to come. This allows a potential reader to visualize
            the story before diving into it. Essential book cover elements include bold visuals, an
            appealing color palette, and eye-catching font. It’s important that the title and the
            author name be legible and easy to read so that potential readers can quickly identify
            the book and its author. Additionally, good book covers should look balanced and
            organized so readers feel compelled to pick up your book.
          </p>

          <h1 className="py-2 fw-light">Custom book cover design services</h1>
          <p>
            Who says you shouldn't judge a book by its cover? A professionally designed cover has
            imagery that instantly conveys the essence of what your book is about. Our knowledgeable
            designers have years of print and eBook design experience in various{" "}
            <a href="#" style={{ color: "#c65300" }}>book genres</a>. Whether the cover of your new
            romance novel needs to make a bold statement or your freshly baked cookbook cover needs
            to pop, <a href="#" style={{ color: "#c65300" }}>BookBaby's designers</a> will create a{" "}
            <a href="#" style={{ color: "#c65300" }}>professional book design</a> that you can be proud
            of. Plus, our cover design services include both printed books and eBooks! For those who
            wish to create an audiobook with us, we offer audiobook cover design as an add-on.{" "}
            <a href="#" style={{ color: "#c65300" }}>Learn more about audiobooks.</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-secondary bg-opacity-10 py-5">
  <div className="container py-3">
    <div className="row d-flex align-items-center justify-content-center">
      <div className="col-md-6 col-sm-12">
        <div className="display-6 d-flex align-items-center justify-content-center pb-2">
          See samples by genre
        </div>

        <div className="d-flex align-items-center justify-content-between text-uppercase fs-6 py-2">
          <span>
            <a href="#" style={{ color: "#c65300" }}>
              BIOGRAPHY & MEMOIR
            </a>
          </span>
          <span>
            <a href="#" style={{ color: "#c65300" }}>
              FICTION
            </a>
          </span>
        </div>

        <div className="d-flex align-items-center justify-content-between text-uppercase fs-6 py-2">
          <span>
            <a href="#" style={{ color: "#c65300" }}>
              RELIGIOUS & SPIRITUAL
            </a>
          </span>
          <span>
            <a href="#" style={{ color: "#c65300" }}>
              MYSTERY & CRIME
            </a>
          </span>
        </div>

        <div className="d-flex align-items-center justify-content-between text-uppercase fs-6 py-2">
          <span>
            <a href="#" style={{ color: "#c65300" }}>
              POETRY
            </a>
          </span>
          <span>
            <a href="#" style={{ color: "#c65300" }}>
              ROMANCE
            </a>
          </span>
        </div>

        <div className="d-flex align-items-center justify-content-between text-uppercase fs-6 py-2">
          <span>
            <a href="#" style={{ color: "#c65300" }}>
              SCI-FI & FANTASY
            </a>
          </span>
          <span>
            <a href="#" style={{ color: "#c65300" }}>
              THRILLER & HORROR
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

</>
  )
}

export default BooksDesign
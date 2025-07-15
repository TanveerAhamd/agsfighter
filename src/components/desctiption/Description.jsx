import React from 'react'
import img1 from '../../img/readBook.png'
import img2 from '../../img/booksBundle.png'
const Description = () => {
  return (
    <div>

      <div className="row bg-dark">
        <div className="col-md-6"
          style={{ height: "600", paddingLeft: 120, paddingTop: 50, fontSize: 36 }}>
          <h1 className=' text-white '>
            From wrapping up a chapter during lunch to falling asleep mid-sentence at night, there’s no better way to stay connected to your readers than with a paperback book.
          </h1>
        </div>
        <div className="col-md-6">
          <img src={img1} alt="" />
        </div>
        <div className="col-md-6">
          <img src={img2} alt="" />
        </div>
        <div className="col-md-6"
          style={{ height: "600", paddingLeft: 50, paddingTop: 50, fontSize: 36 }}>
          <h1 className=' text-white '>
            Make a book readers will keep close by with all the paper stocks, cover finishes, and printing options needed to make the softcover of your dreams.
          </h1>
          <a href="" className='text-decoration-underline'>
            <p>Get started now</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Description
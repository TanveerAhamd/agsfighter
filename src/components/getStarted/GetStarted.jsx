import React from 'react'
import iamge1 from '../../img/paperback-thumb-pocket.png'
import image2 from '../../img/paperback-thumb-ustrade.webp'
import image3 from '../../img/paperback-thumb-square.webp'
import image4 from '../../img/twobooks.png'
const GetStarted = () => {
    return (
        <div>
            <div className="container mb-4">

                <h1 className='text-center pt-4'>
                    Our most popular paperback book trim sizes:
                </h1>
                <div className="row mb-5">
                    <div className="col-md-4 text-center text-dark mb-3">
                        <img src={iamge1} alt="" className="h-75 w-75" />
                        <h5 className='text-dark'>Romance </h5>
                        <h5 className='text-dark'>Pocket Book 4.25" x 6.87" </h5>
                        <p>Softcover, Perfect Binding, 60lb natural</p>
                        <a href="">Get started</a>
                    </div>
                    <div className="col-md-4 text-center mb-3">
                        <img src={image2} alt="" className="h-75 w-75" />
                        <h5 className='text-dark'>Religion
                        </h5>
                        <h5 className='text-dark'>US Trade 6" x 9"
                        </h5>
                        <p>Softcover, Perfect Binding, 60lb natural</p>
                        <a href="">Get started</a>
                    </div>
                    <div className="col-md-4 text-center mb-3">
                        <img src={image3} alt="" className="h-75 w-75" />
                        <h5 className='text-dark'>Children's
                        </h5>
                        <h5 className='text-dark'>Square 10" x 10"
                        </h5>
                        <p>Softcover, Perfect Binding, 80lb natural</p>
                        <a href="">Get started</a>
                    </div>

                </div>
            </div>
            <a href="">
                <div className="container" style={{ backgroundColor: "#eefdff", color: 'black' }}>
                    <div className="row p-3">
                        <div className="col-md-3">
                            <img src={image4} alt="" className='h-100 w-100' />
                        </div>
                        <div className="col-md-9">
                            <h1>Why not just get everything you need?</h1>
                            <p>Printed books, ebooks, cover design,POD, ISBNs-Plus Facebook Ads for Authers!</p>
                            <a href="">
                                Learn more.
                            </a>
                        </div>
                    </div>
                </div>
            </a>

        </div>
    )
}

export default GetStarted
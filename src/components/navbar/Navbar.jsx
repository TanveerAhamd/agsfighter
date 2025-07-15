import React from 'react'
import logo from '../../img/logo.png'
const Navbar = () => {
    return (
        <div>
            <div className="nav">
                <nav className="navbar navbar-expand-lg bg-body-tertiary text-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" to="/">
                            <img src={logo} alt="" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse me-auto" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0  text-dark">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">
                                        Book Services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        Resources
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link " href="/">
                                        Bookshop
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        Pricing
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <a href="javascript:void(0)" className="open-search-link nav-link" title="Search">
                            <i className="icon-search  " />
                            <span className=''>Search</span>
                        </a>

                        <a className='nav-link '
                            href="tel:+18779616878"
                            onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Call-Us');"
                            title="Call us at 1-877-961-6878"
                        >
                            1-877-961-6878
                        </a>

                        <a className='nav-link'
                            href="https://www.bookbaby.com/contact"
                            onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Contact');"
                            title="Contact us"
                        >
                            Contact Us
                        </a>

                        <a className='nav-link'
                            id="lnklogin"
                            title="Login"
                            onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Login');"
                            href="https://www.bookbaby.com/MyAccount/Login.aspx"
                        >
                            Login
                        </a>



                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Navbar
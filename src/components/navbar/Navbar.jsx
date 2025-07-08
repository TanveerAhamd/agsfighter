
import React from 'react'

const Navbar = (props) => {

    console.log("props at navbar", props);
    // console.log("props at navbar", props.abc);

    return (
        <div>
            <div className="navwrapper  ">
                <div className="logo">
                    <img src="./img/logo.png" alt="logo" />
                </div>
                <div className="navItems">
                    <ul>
                        <li>
                            <a className="nav-link" href=""  >
                                {props.navlinks.home}
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="">
                                {props.navlinks.Proj}
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="">
                                {
                                    props.navlinks.Exp
                                }
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="">
                                {props.navlinks.contact}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar

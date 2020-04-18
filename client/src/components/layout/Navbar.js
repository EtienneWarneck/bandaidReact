import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import BandContext from '../../context/band/bandContext';
import bandaid from "./bandaid.png";


const Navbar = ({ title, icon }) => {

    const authContext = useContext(AuthContext);
    const bandContext = useContext(BandContext);

    const { isAuthenticated, logout, user } = authContext;
    const { clearBands } = bandContext;

    const onLogout = () => {
        logout();
        clearBands();
    }

    const authLinks = (
        <Fragment>
            <li>Hello {user && user.name}</li>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="hide-sm">Logout</span> {/* in sm show only icon*/}
                </a>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </Fragment>
    )


    return (
        <nav className="nav">   
             <div className="divLogo">
                    <img src={bandaid} alt="Logo" className="logoNav" />
                </div>
        <div className="navbar ">
          {/* <div className="divLogo"> */}
            {/* </div> */}
           
            {/* <h1>
                <i className={icon} >
                  {title}
                </i>
            </h1> */}
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
                {/* <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li> */}
            </ul>
            <div className="backImage"></div>
        </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Band Keeper',
    // icon: 'fas fa-id-card-alt'
}

export default Navbar;

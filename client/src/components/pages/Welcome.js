import React, { useEffect, useState, useContext } from 'react';
// import Bands from '../bands/Bands'
import Search from '../../components/bands/BandsWelcome'
import BandsWelcome from '../../components/layout/Search'
import AuthContext from '../../context/auth/authContext'
// const axios = require('axios')
// import axios from 'axios';



const Welcome = () => {


    const authContext = useContext(AuthContext);

    //as soon as the component loads, call loadUser
    //to look at the token and hit the backend, validate and put user into state
    useEffect(() => {
        authContext.getBands();
        //eslint-disable-next-line
    }, []); //only when component loads

    return (
        <div className="grid-2">
            <div>
                <Search />
                <BandsWelcome />
            </div>
        </div>
    )
}

export default Welcome;
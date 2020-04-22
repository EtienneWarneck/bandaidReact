import React, { useEffect, useState, useContext } from 'react';
// import Bands from '../bands/Bands'
import Search from '../../components/layout/Search'
import BandsWelcome from '../../components/bands/BandsWelcome'
import AuthContext from '../../context/auth/authContext'
// const axios = require('axios')
// import axios from 'axios';



const Welcome = () => {


    const authContext = useContext(AuthContext);

    //as soon as the component loads, call loadUser
    //to look at the token and hit the backend, validate and put user into state
    // useEffect(() => {
    //     authContext.getBands();
    //     //eslint-disable-next-line
    // }, []); //only when component loads

    return (
            <div>
                <Search />
                <BandsWelcome />
            </div>
    )
}

export default Welcome;
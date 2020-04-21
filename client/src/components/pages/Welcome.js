import React, { useEffect, useState } from 'react';
import Bands from '../bands/Bands'
import Search from '../../components/layout/Search'
import AuthContext from '../../context/auth/authContext'
// const axios = require('axios')
import axios from 'axios';



const Welcome = () => {

    

    return (
        <div>
            <Search />
            <Bands />
        </div>
    )
}

export default Welcome;
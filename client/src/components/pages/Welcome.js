import React, { useEffect, useState } from 'react';
import Bands from '../bands/Bands'
import Search from '../../components/layout/Search'
import AuthContext from '../../context/auth/authContext'
// const axios = require('axios')
import axios from 'axios';



const Welcome = () => {

    const [data,setData] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            axios.get('/api/bands').then(res => {
                console.log("axios get", res);
                // this.setState({ bands: res.data });
              }); 
        }
        // setData(result);
    })



    return (
        <div>
            <Search />
            <Bands />
        </div>
    )
}

export default Welcome;
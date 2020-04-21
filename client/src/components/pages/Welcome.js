import React, { useContext, useEffect, useReducer, useState } from 'react';
import Bands from '../bands/Bands'
import Search from '../../components/layout/Search'
import AuthContext from '../../context/auth/authContext'
// const axios = require('axios')
import axios from 'axios';



const Welcome = (props) => {



    // const authContext = useContext(AuthContext);

    const [userBand, setUserBand] = useState({ //We declare a state variable called userBand and set it to :
        name: '',
        email: '',
        phone: '',
        type: 'hobbyist',
        genre: '',
        description: '',
        youtubeVideoId: ''
    });

  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/bands'")
      .then(response => setUserBand(response.data));
  }, []);

    return (
        <div>
            <Search />
            <Bands />
            <h2>{JSON.stringify(userBand)}</h2>
        </div>
    )
}

export default Welcome;
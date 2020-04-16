import React, { useContext, useEffect } from 'react';
import Bands from '../bands/Bands'
import BandForm from '../bands/BandForm'
import BandFilter from '../bands/bandFilter'
import AuthContext from '../../context/auth/authContext'


const Home = () => {

    const authContext = useContext(AuthContext);

    //as soon as the component loads, call loadUser
    //to look at the token and hit the backend, validate and put user into state
    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, []); //only when component loads

    return (
        <div className="grid-2">
            <div>
                <BandForm /> {/* input */}
            </div>
            <div>
                <BandFilter />
                <Bands /> {/* output */}
            </div>
        </div>
    )
}

export default Home;

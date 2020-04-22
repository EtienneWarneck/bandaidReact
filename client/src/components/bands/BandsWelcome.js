import React, { Fragment, useContext, useEffect } from 'react'; //HOOKS
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BandItem from './BandItem';
import BandContext from '../../context/band/bandContext';
import Spinner from '../layout/Spinner'


const BandsWelcome = () => {

    //Initialize context:
    const bandContext = useContext(BandContext); //c C
    //now we can access any method associated with that const

    //Accessing bands array, destructuring
    const { bands, filtered, getBands, loading } = bandContext;

    useEffect(() => {
        fetch('http://localhost:5000/api/bands/all')
            .then(res => res.json())
            .then((band) => {
                // setIsLoaded(true);
                getBands(band.items);
            },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                // (error) => {
                //     setIsLoaded(true);
                //     setError(error);
                // }
            )
    }, [])

    // if (error) {

    //     return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {

    //     return <div>Loading...</div>;
    // } else {

        return (
            <ul>
                {bands.map(item => (
                    <li key={item.name}>
                        {item.name} {item.price}
                    </li>
                ))}
            </ul>
        );
    }
// }

export default BandsWelcome


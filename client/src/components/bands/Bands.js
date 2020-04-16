import React, { Fragment, useContext, useEffect } from 'react'; //HOOKS
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BandItem from './BandItem';
import BandContext from '../../context/band/bandContext';
import Spinner from '../layout/Spinner'


const Bands = () => {

    //Initialize context:
    const bandContext = useContext(BandContext); //c C
    //now we can access any method associated with that const

    //Accessing bands array, destructuring
    const { bands, filtered, getBands, loading } = bandContext;

    useEffect(() => {
        getBands();
        // eslint-disable-next-line
    }, []);

    if (bands !== null && bands.length === 0 && !loading) { //if no bands...
        return <h4>Please add band</h4>
    }

    return (
        <Fragment>
            {bands !== null && !loading ? (<TransitionGroup>
                {filtered !== null
                    ? filtered.map(band => ( //map through FILTERED bands
                        <CSSTransition key={band._id} timeout={500} classNames="item">
                            <BandItem bandPassed={band} />
                        </CSSTransition>
                    ))
                    : bands.map(band => ( //map through ALL bands
                        <CSSTransition key={band._id} timeout={500} classNames="item">
                            <BandItem bandPassed={band} />
                        </CSSTransition>
                    ))}
            </TransitionGroup>) : <Spinner />}
        </Fragment>
    )
}

export default Bands

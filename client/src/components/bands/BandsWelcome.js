import React, { Fragment, useContext, useEffect, useState } from 'react'; //HOOKS
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BandItemWelcome from './BandItemWelcome';
import BandContext from '../../context/band/bandContext';
import Spinner from '../layout/Spinner'
import ReactYouTubeLink from '../ReactYoutube/ReactYouTubeLink';
import ReactYouTubeWelcome from '../ReactYoutube/ReactYouTubeWelcome';
import YouTube from 'react-youtube'



const BandsWelcome = ({ }) => {

    //Initialize context:
    const bandContext = useContext(BandContext); //c C
    //now we can access any method associated with that const

    //Accessing bands array, destructuring
    const { bands, filtered, getBands, loading } = bandContext;

    useEffect(() => {
        getBands();
        // eslint-disable-next-line
    }, []);


    const [data, setData] = useState([])
    // const [dataVideo, setDataVideo] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:5000/api/bands/all')
                // const result = await fetch('https://orangevalleycaa.org/api/videos')
                // const result2 = await fetch('https://youtube.com/api/videos')
                .then(response => response.json())
            // .then((band) => {
            //     // setIsLoaded(true);
            //     getBands(band);
            setData(result);
        }
        fetchData();
    }, [])

    // useEffect(() => {
    //     const fetchData2 = async () => {
    //             const result = await fetch('https://youtube.com/api/videos')
    //             .then(response => response.json())
    //         // .then((band) => {
    //         //     // setIsLoaded(true);
    //         //     getBands(band);
    //         setDataVideo(result);
    //     }
    //     fetchData2();
    // }, [])



    // if (error) {

    //     return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {

    //     return <div>Loading...</div>;
    // } else {

    return (
        <Fragment>
            {/* <BandItemWelcome bandPassed={band} /> */}
            {/* <BandItemWelcome bandPassed={band} /> */}
            <div >
                {data.map(band => (
                    <div className="card2" key={band.id}>
                        <h2>Name: {band.name}</h2>
                        <h2>Genre: {band.genre}</h2>
                        <h2>Description: {band.description}</h2>
                        <h2>Email: {band.email}</h2>
                        <h2>Phone: {band.phone}</h2>
                        {/* <h2>YouTube URL: {band.youtubeUrl}</h2> */}
                        <video height={200} controls src={band.youtubeUrl} />
                        {/* <YouTube
                            videoId={videoId}
                            onReady={videoOnReady}
                        /> */}
                        {/* <h2>Price: </h2> */}
                        {/* <ReactYouTubeWelcome/> */}
                    </div>
                ))}
            </div>
        </Fragment>

    );
}
// }

export default BandsWelcome


// import React, { useState, useEffect } from 'react'
// import YouTube from 'react-youtube';
// import { BAND_ERROR } from '../../context/types';

// const ReactYouTubeWelcome = () => {

//     //Initialize context:
//     const bandContext = useContext(BandContext); //c C
//     //now we can access any method associated with that const

//     //Accessing bands array, destructuring
//     const { bands, filtered, getBands, loading } = bandContext;

//     const videoOnReady = (event) => {
//         // access to player in all event handlers via event.target
//         event.target.pauseVideo();
//         console.log("reactyoutubeWelcome:", event.target)
//     };

//     const [data, setData] = useState([]);
//     // const [dataVideo, setDataVideo] = useState([])

//     useEffect(() => {
//         const fetchData = async () => {
//             // const result = await fetch('http://localhost:5000/api/bands/all')
//                 // const result = await fetch('https://orangevalleycaa.org/api/videos')
//                 const result = await fetch('https://youtube.com/api/videos')
//                 .then(response => response.json())
//             // .then((band) => {
//             //     // setIsLoaded(true);
//             //     getBands(band);
//             setData(result);
//         }
//         fetchData();
//     }, [])

//     // render() {
//     //     const opts = {
//     //         height: '390',
//     //         width: '640',
//     //         playerVars: { // https://developers.google.com/youtube/player_parameters
//     //             // autoplay: 1
//     //         }
//     //     };

//     const { videoId } = band.youtubeUrl;
//     console.log("RYTL.js videoId:", videoId)

//     return (
//         <YouTube

//             videoId={videoId}
//             opts={opts}
//             onReady={videoOnReady}

//         />
//     );
// }

// // }

// export default ReactYouTubeWelcome;
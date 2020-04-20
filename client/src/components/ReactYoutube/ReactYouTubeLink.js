import React, { Component } from 'react'
import YouTube from 'react-youtube';

//URL
//https://www.youtube.com/watch?v=2_AInJHlK6Q
//share link YouTube- videoID
//https://youtu.be/2_AInJHlK6Q
class ReactYouTubeLink extends Component{

   videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
        console.log("reactyoutubelink:", event.target)
    };

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                // autoplay: 1
            }
        };

        // const {videoId} = this.props //UNDEFINED. Not sure what should we pass here...
        const {videoId} = youtubeVideoId;
        console.log("RYTL.js videoId:", videoId)
 
        return (
            <YouTube
                videoId={videoId} //THIS IS WHAT WERE TRACKING
                opts={opts}
                onReady={this.videoOnReady}
            />
        );
    }

}

export default ReactYouTubeLink;
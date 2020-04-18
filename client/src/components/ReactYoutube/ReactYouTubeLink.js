import React, { Component } from 'react'
import YouTube from 'react-youtube';


//https://www.youtube.com/watch?v=2_AInJHlK6Q
//https://youtu.be/2_AInJHlK6Q
export class ReactYouTubeLink extends Component {

    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
        console.log("reactyoutubelink:", event.target)
    }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                // autoplay: 1
            }
        };

        const {videoId} = this.props //UNDEFINED. Not sure what should we pass here...
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
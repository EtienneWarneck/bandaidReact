import React, { Component } from "react";
import Search from '../layout/Search';
import axios from 'axios';
import Bands from '../bands/Bands'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      bands: [],
      genreSearch: "",
      linkYouTube: []
    };
    console.log("RESULTS and GENRE: ", this.state)
  }

  //load data from a remote endpoint:
  componentDidMount() {
    axios.get('http://localhost:3000/api/bands').then(res => {
      console.log("axios get", res);
      this.setState({ bands: res.data });
    });
  };

  //passing search input to change state 
  handleGenre = (genre) => {
    console.log("passing : ", genre);
    this.setState({
      genreSearch: genre
    }, function () {
      console.log("genreSearch: ", this.state.genreSearch);
    });
  };


  render() {
    return (
      <div className="divApp" >
        <Search
          send={(prop) => {   //prop = this.textInput.current.value in Search.js
            // console.log(prop); //input
            this.handleGenre(prop)
          }}
        />
        <Bands
          bands={this.state.bands}
          genre={this.state.genreSearch}
          linkYouTube={this.state.youtubeVideo} />
      </div>
    );
  }
}

export default Home;
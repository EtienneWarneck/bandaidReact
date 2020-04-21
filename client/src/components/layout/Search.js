import React from 'react';
import Bands from '../bands/Bands'

class Search extends React.Component {
    // state = {
    //     text: ""
    // }
    constructor() {
        super();
        this.textInput = React.createRef();
        // state = { }
    }

    // static propTypes = {
    //     send: PropTypes.func
    // };


    onChange = e => this.setState({ [e.target.name]: e.target.value });

    // onSubmit = (genre) => {
    //     // e.preventDefault();
    //     console.log("SUBMIT", genre)
    //     console.log("PROPS", this.props)
    //     console.log("state", this.text)

    //     this.props.searchResult(this.state.text);
    //     // this.setState({ text: "" });
    // }

    render() {

        const { send } = this.props;

        // console.log("RENDER PROPS", this.props) 

        return (
            <React.Fragment>

                <div className="whiteSpace"></div>

                {/* <div className="containerSearch"> */}
                <form
                    className="formSearch"
                // onSubmit={this.onSubmit}
                >

                    <input //Search input
                        className="searchInputWelcomePage"
                        type="textarea"
                        name="text"
                        placeholder=" Search band by genre"
                        autoComplete="off"
                        // value={this.state.text}
                        // onChange={this.onChange}
                        ref={this.textInput}

                    >
                    </input>

                    <button //Search button 
                        type="button"
                        value="search"
                        className="searchButton"
                        onClick={() => {
                            send(this.textInput.current.value);

                        }}
                    > Search
                        </button>

                </form>
                <Bands/>


            </React.Fragment>

        );
    }
}

export default Search

import React, { useReducer } from 'react'; //access state and dispatch
import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid'; //random id for hard coded
import BandContext from './bandContext';
import bandReducer from "./bandReducer";
import {
    GET_BANDS,
    ADD_BAND,
    DELETE_BAND,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_BAND,
    FILTER_BANDS,
    CLEAR_BANDS,
    CLEAR_FILTER,
    BAND_ERROR
} from '../types';

// console.log(uuidv4('75442486-0878-440c-9db1-a7006c25a39f')); //true 

const BandState = props => {

    const initialState = {
        // bands: [],
        bands: null,
        current: null, //when Edit is clicked we want data to go in this piece of state and we can change UI based on that
        filtered: null, //Array of filtered bands that match an input
        error: null
    };

    // HOOK useReducer()
    // sends actions to the switch statement
    // dispatch ("envoyer") is a FUNCTION that sends objects 
    // An alternative to useState.
    // Returns the current state paired with a dispatch method. 
    // There are two different ways to initialize useReducer state.
    // The simplest way is to pass the initial state as a second argument:
    const [state, dispatch] = useReducer(bandReducer, initialState);

    //ACTIONS 

    //GET
    const getBands = async () => { //no config bc not sending any body

        try {
            const res = await
                axios.get('/api/bands'); //GET res

            dispatch({
                type: GET_BANDS,
                payload: res.data
            }) //still receiving body: all of the users bands

        } catch (err) {
            dispatch({
                type: BAND_ERROR,
                payload: err.response.msg
            })
        };
    };


    //Add LEFT side , BUTTON: Add Band
    const addBand = async band => { //
        // band.id = uuidv4(); //RandomID will be removed when we use MongoDB
        const config = {
            headers: {
                'Content-Type': 'application/json'
                //token is set globally (setAuthToken.js)
            }
        }
        try {
            const res = await axios.post('api/bands', band, config);

            dispatch({ type: ADD_BAND, payload: res.data }); //now sending response to reducer and to DB. Won't be seen on reload
        } catch (err) {
            dispatch({
                type: BAND_ERROR,
                payload: err.response.msg
            })
        }
        // dispatch({ type: ADD_BAND, payload: band }); //for hard coded data
        //2 values sent to reducer: perform 1 action, sent 1 data
    };

    //Delete RIGHT side , BUTTON: Delete
    const deleteBand = async id => {
        // dispatch({ type: DELETE_BAND, payload: id }); 
        try {
            await axios.delete(`api/bands/${id}`);

            dispatch({ type: DELETE_BAND, payload: id }); //now sending response to reducer and to DB. Won't be seen on reload
        } catch (err) {
            dispatch({
                type: BAND_ERROR,
                payload: err.response.msg
            })
        }
    };

    //Update Bands
    const updateBand = async band => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.put(`/api/bands/${band._id}`, band, config);

            dispatch({
                type: UPDATE_BAND,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: BAND_ERROR,
                payload: err.response.msg
            });
        }
    };

    //Clear Bands
    const clearBands = () => {
        dispatch({ type: CLEAR_BANDS });
    };

    //Set Current RIGHT, BUTTON: Edit 
    const setCurrent = band => {
        dispatch({ type: SET_CURRENT, payload: band }); //dispatch to reducer
    };

    //Clear Current LEFT, BUTTON: Clear ONLY used when current = 
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT }); // 2values sent to reducer
    };

    //FILTER function
    const filterBands = text => {
        dispatch({ type: FILTER_BANDS, payload: text });
    };
    //Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER }); // resetting to null
    };

    return (
        //wrap entire app with the BandContext OBJECT
        <BandContext.Provider
            value={
                {
                    //
                    bands: state.bands,
                    current: state.current,
                    filtered: state.filtered,
                    error: state.error,

                    //functions
                    getBands,
                    addBand,
                    deleteBand,
                    setCurrent, //to Edit existing band
                    clearCurrent,
                    updateBand,
                    filterBands,
                    clearFilter,
                    clearBands
                }}
        >
            {console.log("state.bands", state.bands)}
            {console.log("state.current", state.current)}
            {console.log("state.filtered", state.filtered)}

            {props.children}

            {console.log("PROPS.CHILDREN:", props.children)}

        </BandContext.Provider>
    )
}

export default BandState;
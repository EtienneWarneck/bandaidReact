import {
    GET_ALLBANDS,
    GET_BANDS,
    ADD_BAND,
    DELETE_BAND,
    CLEAR_BANDS,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_BAND,
    FILTER_BANDS,
    CLEAR_FILTER,
    BAND_ERROR
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_ALLBANDS:
            return {
                ...state,
                bands: action.payload,
                loading: false
            }
        case GET_BANDS:
            return {
                ...state,
                bands: action.payload,
                loading: false
            }
        case ADD_BAND:
            return {
                ...state, //return the current state, Immutable
                bands: [action.payload, ...state.bands], //return a new array
                // new array: with spread operator to copy what was there before + action.payload = DATA
                //action.payload gors first to have new band on top of list (before and after reloading)
                loading: false
            };

        case UPDATE_BAND: //#3 reducer catches the payload 
            return {
                ...state,//current state. Immutable
                bands: state.bands.map(band => // and maps through all of the bands...
                    band._id === action.payload._id ? action.payload : band),// looks for the payload id. 
                //If matches, will send the new updated info (action.payload) and replace it, else original band
                loading: false
            };

        case DELETE_BAND:
            return {
                ...state,//current state. Immutable
                //return all bands that are not current id
                //filter out the specific band
                bands: state.bands.filter(band => band._id !== action.payload), //action.payload is the ID
                loading: false
            };

        case CLEAR_BANDS:
            return {
                ...state,
                bands: null,
                filtered: null,
                error: null,
                current: null
            }

        case SET_CURRENT:
            return {
                ...state,//current state. Immutable
                current: action.payload
            };

        case CLEAR_CURRENT:
            return {
                ...state,//current state. Immutable
                current: null //
            };

        case FILTER_BANDS:
            return {
                ...state,
                filtered: state.bands.filter(band => {
                    const regex = new RegExp(`${action.payload}`, `gi`) //text in payload gi : a case insensitive search to match lowercase or uppercase
                    return band.name.match(regex) || band.email.match(regex);
                })
            };

        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            };

        case BAND_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}
import React, { useState, useContext, useEffect } from 'react'; //HOOK
import BandContext from '../../context/band/bandContext';
// import { ADD_BAND } from '../../context/types';

const BandForm = () => {

    const bandContext = useContext(BandContext);

    //destructuring to unpack values into distinct variables:
    const { addBand, updateBand, clearCurrent, current } = bandContext;
    //--------------------------

    //BASIC HOOK - useState() - most important hook. FORMAT -> const [state, setState] = useState(intialValue)
    //Used to add functionnality to functional component.
    // ALWAYS returns theses 2 elements:
    // 1. the current state snapshot (updated state that survives re-renders of the component) of the object, array, boolean...
    //Can be initialized with any object (vs state in class-based component is always an object)
    // 2. a FUNCTION that allows us to update the state to re-render the component.
    // The function does not merge the content, it replaces it.
    // useState can be used as many times as we want. 
    // Multiple useState() are possible and will survive other useState() changes. That is how it is intented to be used.
    // Only use useState() with objects when multiple things need to be changed together.
    // React doesn't merge automatically old and new data = more flexibility (state is merged in class-based)
    // Independent from other places. So we can simply share functionalities between components.
    // Destructuring: userBand is the CHANGING STATE OF THE FORM, the data. setUserBand to update the data.
    // ALWAYS used on root level, NEVER in a nested function or if statement,...
    const [userBand, setUserBand] = useState({ //We declare a state variable called userBand and set it to :
        name: '',
        email: '',
        phone: '',
        type: 'hobbyist',
        setup: '',
        description: '',
        youtubeVideoId: ''
    });

    //Pull the values out of userBand.
    const {
        name,
        email,
        phone,
        type,
        setup,
        description,
        youtubeVideoId
    } = userBand;



    //a function to use on every input's change. 
    const onChange = e => setUserBand({ ...userBand, [e.target.name]: e.target.value })

    //
    const submitForm = e => {
        e.preventDefault();
        if (current === null) { //if nothing has changed, (if the Edit button wasn't pressed)
            addBand(userBand); // Add the empty values from useState's current state
        } else {
            updateBand(userBand); // #1 Whatever changes in the Form is SUBMITTED here. Once submitted, it's called in #2
        };
        clearAll();
    };

    //useEffect accepts a function that will run AFTER and for every render cycle.
    useEffect(() => {
        if (current !== null) {
            setUserBand(current) //set LEFT form with current
        } else {
            setUserBand({  //default state (nothing)
                name: '',
                email: '',
                phone: '',
                type: 'professional',
                setup: '',
                description: '',
                youtubeVideoId: ''
            });
        }
    }, [bandContext, current]); //adding dependencies. useEffect will only be called if those change. ( similar to componentDidMount() )


    const clearAll = () => {
        clearCurrent();
    }



    return (
        <form className="formBand" onSubmit={submitForm}>
            {/* <h2 className="text-primary">Add band</h2> */}
            <h2 className="text-primary">{current ? 'Edit Band' : 'Add Band'}</h2>
            <input
                type="text"
                placeholder="name"
                name="name"
                value={name} //band.name
                onChange={onChange} //The setUserBand function from UseState() is called via onChange function. 
            //onChange={event => setUserBand({name: event.target.value})} 
            //will print the Warning A component is changing a controlled input of type email to be uncontrolled.
            //if one useState was created just for the name such as `const [enteredName, setEnteredName] = useState('')`
            //it would look like : `onChange={event => {setEnteredName(event.target.Name)}}`
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onChange}
            />
            <input
                type="phone"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={onChange}
            />
            <input
                type="setup"
                placeholder="setup"
                name="setup"
                value={setup}
                onChange={onChange}
            />
            <textarea
                type="description"
                placeholder="description"
                name="description"
                value={description}
                onChange={onChange}
            />
            <input
                type="youtubeVideoId"
                placeholder="youtubeVideoId"
                name="youtubeVideoId"
                value={youtubeVideoId}
                onChange={onChange}
            />

            <h5>Band Type:</h5>
            <input
                type="radio"
                name="type"
                value="hobbyist"
                checked={type === 'hobbyist'}
                onChange={onChange}
            />Hobbyist {' '}
            
            <input
                type="radio"
                name="type"
                value="professional"
                checked={type === 'professional'}
                onChange={onChange}
            />Professional

            <div>
                <input
                    type="submit"
                    // value="Add Band"
                    value={current ? 'Update Band' : 'Add Band'}
                    className="btn btn-primary btn-block"
                />



            </div>
            {current && (
                <div>
                    <button className='btn btn-light btn-block' onClick={clearAll}>
                        Clear
                </button>
                </div>
            )}

        </form>
    )
}

export default BandForm;

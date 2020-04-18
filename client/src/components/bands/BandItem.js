import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import BandContext from '../../context/band/bandContext';

const BandItem = ({ bandPassed }) => {   //{bandpassed} is the prop passed in from Bands.js

//USE CONTEXT
    const bandContext = useContext(BandContext); //holds all the data
    // console.log("BandItem PAGE, useContext(), ALL BANDS", bandContext)
    
    const { deleteBand, setCurrent, clearCurrent } = bandContext; //create an action
    
    const { _id, name, email, phone, type, setup, description } = bandPassed; //destructuring, EACH BAND
    // console.log("BandItem PAGE, bandPassed, BAND #", bandPassed.id, bandPassed);
    
    const onDelete = () => {
        deleteBand(_id);
        clearCurrent();
    }

    return (
        <div className='card'>

            <h3 className='text-primary text-left'>
                {name}{' '} {/* add space between fname and lname*/}
                <span
                    style={{ float: 'right' }}
                    className={'badge ' + (type === 'professional' ? 'badge-dark' : 'badge-white')}>

                    {type.charAt(0).toUpperCase() + type.slice(1)} {/*first letter uppercase*/}
                </span>
            </h3>

            <ul className="list">
                {/* if there's an email */}
                {email && (<li>
                    <i className="far fa-envelope"></i>  {email}
                </li>)}
                {phone && (<li>
                    <i className="fas fa-phone"></i> {phone}
                </li>)}
                {setup && (<li>
                    <i className=""></i> <bold>Setup:</bold> {setup}
                </li>)}
                {description && (<li>
                    <i className=""></i> <bold>Description:</bold> {setup}
                </li>)}
            </ul>

            <p>
                <button className="btn btn-dark btn-sm" onClick={ () => setCurrent(bandPassed)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
            </p>

        </div>
    );
};

BandItem.propTypes = { bandPassed: PropTypes.object.isRequired };

export default BandItem;
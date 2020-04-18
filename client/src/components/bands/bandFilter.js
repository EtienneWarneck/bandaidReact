import React, {useContext, useRef, useEffect} from 'react'
import BandContext from '../../context/band/bandContext';

const BandsFilter = () => {

    const bandContext = useContext(BandContext);

    const textForRef = useRef(''); //HOOK initializing function Ref that references an actual DOM object

    // const {filterBands, clearFilter, filtered } = bandContext;
    
    //If filter is empty, we want the input to be empty
    useEffect(() => {
        if (bandContext.filtered === null) {
        textForRef.current.value ='';
        }
    })

    const onChange = e => {
       if (textForRef.current.value !== '') { //what's in input
        bandContext.filterBands(e.target.value); //passing actual value of the input
       }
       else {
           bandContext.clearFilter();
       }
    }

    return (
        <form className="formFilter">
            <input ref={textForRef} type="text" placeholder="Filter Bands..." onChange={onChange}/> 
        </form>
    )
}

export default BandsFilter;

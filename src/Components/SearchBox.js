import React from 'react';
import 'tachyons';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
           <input onChange={searchChange} className= 'bg-light-pink' type ='Search' placeholder='Search Record'/>
        </div>
    );
};


export default SearchBox;
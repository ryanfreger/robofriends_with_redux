import React from 'react';

const SearchBox = ( { searchBoxChange } ) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue'
                type='search' placeholder='Search Robots'
                onChange={searchBoxChange} />
        </div>
    )
}

export default SearchBox;
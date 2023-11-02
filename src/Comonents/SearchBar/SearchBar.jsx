import React from 'react'

function SearchBar() {
    return (
        <div className='searchbar'>
            <div className="input-container">
                <i className="icon bx bx-search"></i>
                <input type="text" placeholder="Search" />
            </div>
            <i className='bx bx-bell'></i>
        </div>
    )
}

export default SearchBar
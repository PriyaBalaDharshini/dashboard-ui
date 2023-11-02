import React from 'react'

function FilterBox({ labelname, placeholder, htmlFor, id, type }) {
    return (
        <div className='filterbox'>
            <label htmlFor={`${htmlFor}`}>{labelname}</label> <br />
            <input type={`${type}`} placeholder={`${placeholder}`} id={`${id}`} />
        </div>

    )
}

export default FilterBox
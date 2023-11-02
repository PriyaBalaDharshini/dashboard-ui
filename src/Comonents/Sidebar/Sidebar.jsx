import React from 'react'

const icons = ['bx-grid-alt', 'bx-test-tube', 'bx-calendar-check', 'bx-briefcase', 'bx-envelope', 'bx-wallet', 'bx-cog'];
const lists = ['Dash Board', 'Lab Test', 'Appointment', 'Medicine Order', 'Message', 'Payment', 'Settings']

function Sidebar() {
    return (
        <ul style={{ listStyleType: 'none' }}>
            {icons.map((icon, index) => { return (<li className='navigation-item'> <i className={`bx ${icon}`}></i>{lists[index]}</li>) })}
            {/* {list.map((item, index) => { return (<li><i className={`bx ${icons[index]}`}></i> {item}</li>) })} */}
            <div className='help'><li><i className='bx bx-help-circle'></i>Help</li></div>
        </ul >
    )
}

export default Sidebar
import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import './Header.css';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className="header">
            <IconButton className ="person_icon">
            <PersonIcon />
            </IconButton>
            <img className ="header_logo" 
            src ="https://cdn.freebiesupply.com/logos/large/2x/tinder-icon-logo-png-transparent.png"
            alt="" />
            
            
            
        </div>
    )
}

export default Header

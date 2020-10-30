import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import './Header.css';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            <IconButton >
            <PersonIcon fontSize="large" className ="header_icon"/>
            </IconButton>
            <img className ="header_logo" 
            src ="https://cdn.freebiesupply.com/logos/large/2x/tinder-icon-logo-png-transparent.png"
            alt="" />
            <IconButton>
            <ForumIcon fontSize ="large" className="header_icon" />
            </IconButton>
        </div>
    )
}

export default Header

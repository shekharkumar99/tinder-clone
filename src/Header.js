import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import './Header.css';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import logo from './assets/tinderlogo.png';

function Header() {
    return (
        <div className="header">
            <IconButton >
            <PersonIcon fontSize="large" className ="header_icon"/>
            </IconButton>
            <img className ="header_logo" 
            src ={logo}
            alt="" />
            <IconButton>
            <ForumIcon fontSize ="large" className="header_icon" />
            </IconButton>
        </div>
    )
}

export default Header

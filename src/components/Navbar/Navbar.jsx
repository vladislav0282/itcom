import React from "react";
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
            <NavLink activeClassName={classes.active} to="/profile">Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
            <NavLink to="/dialogs" activeClassName={classes.active}>Massages</NavLink>
            </div>
            <div className={classes.item}>
            <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
            <a>Music</a>
            </div>
            <div className={classes.item}>
            <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;
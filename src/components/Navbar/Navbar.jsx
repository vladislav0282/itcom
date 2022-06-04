import React from "react";
import classes from './Navbar.module.css';
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
            <Link activeClassName={classes.active} to="/profile">Profile</Link>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
            <Link to="/dialogs" activeClassName={classes.active}>Massages</Link>
            </div>
            <div className={classes.item}>
            <Link to='/news' activeClassName={classes.active}>News</Link>
            </div>
            <div className={classes.item}>
            <Link to='/music' activeClassName={classes.active}>Music</Link>
            </div>
            <div className={classes.item}>
            <Link to='/settings' activeClassName={classes.active}>Settings</Link>
            </div>
        </nav>
    )
}

export {Navbar};
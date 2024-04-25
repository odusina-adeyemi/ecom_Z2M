import React, {Fragment} from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as Crown} from '../../assets/crown.svg';
import '../navigation/navigation.styles.scss'
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation" >
        
        <Link className="logo-container" to='/'>
        <div><Crown className="logo"/></div>
        </Link>
        <div className="nav-links-container">
        <Link className='nav-link' to='/shop'>
        SHOP
        </Link>
        </div>

        <div className="nav-links-container">
        <Link className='nav-link' to='/signin'>
        SIGN IN
        </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;

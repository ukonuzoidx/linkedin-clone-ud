import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import { BusinessCenter, Chat, Notifications, SupervisorAccount } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {

    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className="header">

            <div className="header__left">
            <img src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1611166215~hmac=409cca574e58df1db4048f63691ecf15" alt="" />

            <div className="header__search">
            {/* SearchIcon */}
                <SearchIcon />
                <input placeholder="search" type="text"/>
            </div>
            </div>
            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title="Home" />
                <HeaderOptions Icon={SupervisorAccount}  title="My Network"/>
                <HeaderOptions Icon={BusinessCenter} title="Jobs" />
                <HeaderOptions Icon={Chat} title="Messaging" />
                <HeaderOptions Icon={Notifications} title="Notifications" />
                <HeaderOptions avatar={true}
                onClick={logoutOfApp}
                 title="me" />
            </div>
        </div>
    )
}

export default Header

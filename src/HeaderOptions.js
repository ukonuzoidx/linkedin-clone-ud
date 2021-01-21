import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './HeaderOptions.css'

function HeaderOptions({ avatar, Icon, title, onClick }) {
  
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className="header__options">
            {Icon && <Icon className="headeroption__icon" />}
            {avatar && (
                <Avatar className="headeroption__icon" src={user?.photoURL}>{user?.email[0]}</Avatar>
            )}
            <h3 className="headeroption__title">{title}</h3>
        </div>
    )
}

export default HeaderOptions

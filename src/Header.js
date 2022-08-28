import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Header() {
  return ( 
    <div className='header'>
        <div className='header__left'>
            <img src="https://www.facebook.com/images/fb_icon_325x325.png"/>
            <div className='header__input'>
               <SearchIcon/>
                <input type="text" placeholder='Search facebook' />
            </div>
        </div>
        <div className='header__middle'>
            <div className='header__option actif'>
            <HomeIcon fontSize="large"/> 
            </div>

            <div className='header__option'>
            <FlagIcon fontSize="large"/> 
            </div>

            <div className='header__option'>
            <SubscriptionsIcon fontSize="large"/> 
            </div>

            <div className='header__option'>
            <StorefrontIcon fontSize="large"/> 
            </div>

            <div className='header__option'>
            <SupervisedUserCircleIcon fontSize="large"/> 
            </div>
        </div>
        <div className='header__right'>
            <div className='header__info'>
                <AccountCircleIcon />
                <h4>miral khadhraoui</h4>
            </div>
            <IconButton>
            <AddIcon/>
            </IconButton>
            <IconButton>
                <ForumIcon/>
            </IconButton>
            <IconButton>
            <NotificationsActiveIcon/>
            </IconButton>
            <IconButton>
                <ExpandMoreIcon/>
            </IconButton>
        </div>
    </div>
  )
}

export default Header
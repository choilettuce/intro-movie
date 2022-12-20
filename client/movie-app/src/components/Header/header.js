import React from 'react'
import MovieIcon from '@mui/icons-material/Movie';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <div className='header'>
        <Link to="/" className='Logo'><MovieIcon 
        sx={{ fontSize: 70 }} 
        color="primary"/>
        <p className='logoText'>Lettuce<br></br> 영화소개</p></Link>
        
    </div>
  )
}

export default Header;

import React from 'react'
import MovieIcon from '@mui/icons-material/Movie';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <div className='header'>
        <Link to="/"><MovieIcon className='MovieIcon' />Lettuce의 영화소개</Link>
        <h1>헤더 에어리어</h1>
    </div>
  )
}

export default Header;

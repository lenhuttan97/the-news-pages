import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/header.css';

function Header(props) {
    const ref = useRef(null);
    const [isSearch, setIsSearch] = useState(false);
    const [isMenu, setIsMenu] = useState(false);

    const [valueInput, setValueInput] = useState(false);

    const handleSubmit = (event)=> {
        alert('A name was submitted: ' + valueInput);
    }
    const handleChange = (event)=>{
setValueInput(event.target.value)
    }
    useEffect(() => {
        if (isSearch) ref.current.focus();
    }, [isSearch])
    return (
        <header>
            <div className='logo'>
                <Link to='/'>
                    <img src={require('../assets/lg.png')} />
                </Link>
            </div>
            <div className={`topic ${isSearch && 'blur'}`}>
                <div className='menu' onClick={() => {
                    setIsMenu(!isMenu)
                }}>
                    {isMenu ? <FontAwesomeIcon icon="fa-solid fa-xmark" className='icon' /> : <FontAwesomeIcon icon="fa-solid fa-bars" className='icon'/>}
                </div>

                <div className={`arrow-up ${isMenu && 'display'}`}></div>
                <ul className={`${isMenu && 'display'}`}>
                    <li> <Link to='/topic/'>country</Link></li>
                    <li> <Link to='/topic/business'>business</Link></li>
                    <li> <Link to='/topic/entertainment'>entertainment</Link></li>
                    <li> <Link to='/topic/general'>general</Link></li>
                    <li> <Link to='/topic/health'>health</Link></li>
                    <li> <Link to='/topic/science'>science</Link></li>
                    <li> <Link to='/topic/sports'>sports</Link></li>
                    <li> <Link to='/topic/technology'>technology</Link></li>
                </ul>

            </div>
            <div className='tool'>
                <div className={`search-box ${isSearch && 'active'}`}>
                    {/* <input type={'text'} placeholder='Something...' ref={ref}></input>
                     */}
                    <form onSubmit={handleSubmit}>
                            <input type="text" onChange={handleChange} placeholder='Something...' ref={ref} />
                        <input type="submit" value="Submit" hidden/>
                    </form>
                    <label onClick={() => {
                        setIsSearch(!isSearch)
                    }}>
                        {
                            isSearch ? <FontAwesomeIcon icon="fa-solid fa-xmark" className='icon'/> : <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='icon' />
                        }
                    </label>
                </div>
                <div className='intro'>
                    <FontAwesomeIcon icon="fa-solid fa-circle-question" className='icon' />
                </div>
            </div>

        </header>
    );
}

export default Header;
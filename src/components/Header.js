import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/header.css';

function Header(props) {
    const ref = useRef(null);
    const [isSearch, setIsSearch] = useState(false);
    const [isMenu, setIsMenu] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();

    const location = useLocation();

    const [valueInput, setValueInput] = useState();

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        // setSearchParams(params => {
        //     params.set("p", valueInput);
        //     setIsSearch(false);
        //     return params;
        // });
        let url = '/search?q=' + valueInput
        navigate(url);

    }
    const handleChange = (event) => {
        setValueInput(event.target.value)
    }

    const onblur = () =>{
        if(isSearch) setIsSearch(false);
    }
    useEffect(() => {
        if (isSearch) ref.current.focus();
        setIsMenu(false);
     
    }, [isSearch, location])
    return (
        <header>
            <div className='logo'>
                <NavLink to='/home'>
                    <img src={require('../assets/lg.png')} />
                </NavLink>
            </div>
            <div className={`topic ${isSearch && 'blur'}`}>
                <div className='menu' onClick={() => {
                    setIsMenu(!isMenu)
                }} >
                    {isMenu ? <FontAwesomeIcon icon="fa-solid fa-xmark" className='icon' /> : <FontAwesomeIcon icon="fa-solid fa-bars" className='icon' />}
                </div>

                <div className={`arrow-up ${isMenu && 'display'}`}></div>
                <ul className={`${isMenu && 'display'}`}>
                    {/* <li> <NavLink to='/topic/'>country</NavLink></li> */}
                    <li> <NavLink to='/topic/business'>business</NavLink></li>
                    <li> <NavLink to='/topic/entertainment'>entertainment</NavLink></li>
                    {/* <li> <NavLink to='/topic/general'>general</NavLink></li> */}
                    <li> <NavLink to='/topic/health'>health</NavLink></li>
                    <li> <NavLink to='/topic/science'>science</NavLink></li>
                    <li> <NavLink to='/topic/sports'>sports</NavLink></li>
                    <li> <NavLink to='/topic/technology'>technology</NavLink></li>
                </ul>

            </div>
            <div className='tool'>
                <div className={`search-box ${isSearch && 'active'}`}>
                    {/* <input type={'text'} placeholder='Something...' ref={ref}></input>
                     */}
                    {/* <form onSubmit={handleSubmit} action="/search" method="get"> */}
                    <form onSubmit={handleSubmit}>
                        <input type="text" onChange={handleChange} placeholder='Something...' ref={ref} name="q" value={valueInput} onBlur={onblur}/>
                        <input type="submit" value="Submit" hidden />
                    </form>
                    <label onClick={() => {
                        setIsSearch(!isSearch)
                    }}>
                        {
                            isSearch ? <FontAwesomeIcon icon="fa-solid fa-xmark" className='icon' /> : <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='icon' />
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
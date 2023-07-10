import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../css/footer.css'

function Footer(props) {
    return (
        <footer>
            <div className='top'>
                <div className='contact'>
                    <h1>the news</h1>
                    <p>
                        Craft narratives that ignite inspiration, knowledge, and entertainment.
                    </p>
                    <div className='email'>
                        <label>
                            <FontAwesomeIcon icon="fa-regular fa-envelope" size='lg' />
                        </label>
                        <input type='text' placeholder='Your Email'></input>
                        <div className='button'>
                            <span>Subscribe</span>
                        </div>
                    </div>
                </div>
                <div className='infor'>
                    <ul>
                        <li>product</li>
                        <li>overview</li>
                        <li>features</li>
                        <li>solution</li>
                        <li>releases</li>
                    </ul>
                    <ul>
                        <li>company</li>
                        <li>about us</li>
                        <li>careers</li>
                        <li>media</li>
                        <li>contact</li>
                    </ul>
                    <ul>
                        <li>resources</li>
                        <li>blog</li>
                        <li>newsletter</li>
                        <li>events</li>
                        <li>help center</li>
                    </ul>
                    <ul>
                        <li>social</li>
                        <li>twitter</li>
                        <li>linkedIn</li>
                        <li>facebook</li>
                        <li>gitHub</li>
                    </ul>
                </div>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <FontAwesomeIcon icon="fa-regular fa-copyright" />
                    <span>
                        2023 the news! All rights reserved
                    </span>
                </div>
                <div className='right'>
                    <span>term of service</span>
                    <span>Policy service</span>
                    <span>Cookie policy</span>
                    <span>Patners</span>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
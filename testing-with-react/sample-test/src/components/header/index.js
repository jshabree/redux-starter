import React from 'react';
import '../header/styles.scss'
import Logo from '../../assets/graphics/logo.jpg';

const Header = (props) => {
    return (
        <header>
            <div className = "wrap">
                <div className = "logo">
                    <img src = {Logo} alt = "logo" />

                </div>
            </div>
        </header>
    )
};

export default Header;
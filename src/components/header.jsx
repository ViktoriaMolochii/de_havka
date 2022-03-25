import React from 'react';
import { debounce, isEmpty } from 'lodash';

const Header = ({ setSections, locale, userCoords }) => {
    const handleInput = async (e) => {
        const text = e.target.value
            const response = await fetch('https://de-havka.herokuapp.com/good/' + text.toLowerCase())
            const result = await response.json();

            setSections(response.status === 200 ? result : []);
    }

    return (
        <div>
            <div className="control">
                <input
                    className="input"
                    onChange={debounce(handleInput, 700)}
                    type="text"
                    placeholder="Enter product"
                />
                <span className="locale" onClick={locale}>{!isEmpty(userCoords) ? 'Clear location' : 'Locale'}</span>
            </div>
        </div>
    );
};

export default Header;

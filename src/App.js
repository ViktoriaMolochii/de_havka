import { useState } from 'react';
import { isEmpty } from 'lodash';

import Header from "./components/header";
import Map from "./components/map";

import './App.css';

function App() {
    const [sections, setSections] = useState([]);
    const [userCoords, setUserCoords] = useState({});

    const locale = () => {
        if (!isEmpty(userCoords)) {
            setUserCoords({})
            return;
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setUserCoords({            // ADDED
                    lat: position.coords.latitude,  // ADDED
                    lng: position.coords.longitude, // ADDED
                });
            });
        } else {
            return {}   // code for legacy browsers;
        }

    }

    return (
        <div>
            <Header setSections={setSections} locale={locale} userCoords={userCoords} />
            <Map sections={sections} userCoords={userCoords} />
        </div>

    );
}

export default App;

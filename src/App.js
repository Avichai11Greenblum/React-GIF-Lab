import React from 'react';
import './App.css';

import Random from './Components/Random_v1';
import Tag from './Components/Tag_v1';

export default function App() {
    return(
        <div>
            <h1>Random GIF application</h1>
            <div className="main-container">
                <Random/>
                <Tag/>
            </div>
        </div>
    );
};
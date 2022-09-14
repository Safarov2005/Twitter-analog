import React from 'react';
import "./AppHeader.css"

function AppHeader(props) {
    return (
        <div>
            <div className="app-header d-flex">
                <h1>Muzaffar Safarov</h1>
                <h2>5 posts, like 0</h2>
            </div>
        </div>
    );
}

export default AppHeader;
import React from 'react'
import './loader.css';

export default function Loader() {
    return (
        <div className="loader-container">
            <div className="typewriter">
                <div className="slide"><i></i></div>
                <div className="paper"></div>
                <div className="keyboard"></div>
            </div>
            <h1>Preparing questions</h1>
        </div>
    )
}

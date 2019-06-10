import React, { Component } from 'react';
import Principal from './components/principal/principal';
import NavBar from './components/navbar/navbar';

class Padre extends Component {
    render() {
        return (
            <div className="sdasd">
                <NavBar />
                <br />
                <div className="container">
                    <Principal />
                </div>
            </div>
        );
    }
}

export default Padre;
import React, { Component } from 'react';
import shopping from './shopping.png';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">
                     </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link">Bienvenido a la Bandeja de Ventas<span className="sr-only">(current)</span></a>
                        </li>
                    </ul> 
                    <a className="nav-link">Owen Mejia Guerra<span className="sr-only">(current)</span></a>
                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn btn-outline-primary my-2 my-sm-0 btn-block">
                            Encargado de Ventas
                            {//<i className="fas fa-sign-out-alt"></i>
                            }
                        </button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default NavBar;
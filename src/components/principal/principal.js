import React, { Component } from 'react';
import BuscarCliente from './buscarcliente';
import BuscarProducto from './buscarproducto';
import Carrito from './carrito';

class Principal extends Component {
    render() {
        return (
            <div className="contenedorww">
                <div className="row">
                    <BuscarCliente />
                </div>
                <br />
                <div className="row">
                    <BuscarProducto />
                </div>
                <br />
                <div className="row">
                    
                </div>
            </div>
        );
    }
}

export default Principal;
import React, { Component } from 'react';
import BuscarCliente from './buscarcliente';
import BuscarProducto from './buscarproducto';
import Carrito from './carrito';

class Principal extends Component {
    render() {
        return (
            <div className="contenedorww">
                <div className="row">
                    <div className="col-4">
                    <BuscarCliente />
                    </div>
                    <div className="col-8">
                    <BuscarProducto />
                    </div>
                    
                </div>
                
                <div className="row">
                    
                </div>
            </div>
        );
    }
}

export default Principal;
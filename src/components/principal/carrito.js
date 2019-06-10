import React, { Component } from 'react';

class Carrito extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                <h5 className="card-title text-center">Productos que va a llevar: </h5>

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Codigo</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.props.data}
                            </tbody>                           
                        </table>
                    </div>
                </div>
            
            
        )
    }
}

export default Carrito;
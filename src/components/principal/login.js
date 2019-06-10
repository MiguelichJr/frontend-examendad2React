import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            contraseña: ''
        };
    }

    iniciarSesion = (e) => {

    }

    render() {
        return (
            <div className="container">
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <center><h2 className="card-title">Iniciar Sesión</h2></center>
                                <div className="row">
                                    <div className="col-12">
                                        <br />
                                        <label>Usuario: </label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <br />
                                        <label>Contraseña: </label>
                                        <input type="password" className="form-control" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <br />
                                        <button 
                                        type="button" 
                                        class="btn btn-outline-success btn-block" 
                                        onClick={this.iniciarSesion.bind(this)}
                                        >Iniciar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        );
    }
}

export default Login;
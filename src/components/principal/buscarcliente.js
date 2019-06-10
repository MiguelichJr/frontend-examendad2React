import React, { Component } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../config';

let clientes=[];

class BuscarCliente extends Component {

    constructor() {
        super();
        var today = new Date(),
            date =  today.getDate() + ' / ' + (today.getMonth() + 1) + ' / ' + today.getFullYear();
        this.state = {
            date : date,
            clienteEncontrado: []
        }
        this.getClienteByDni = this.getClienteByDni.bind(this);
        
    }

    getClienteByDni() {
        var dni=document.getElementById("dni").value;
        axios.get(API_BASE_URL + '/buscarCliente/'+dni).then(function (response){
            clientes=[]; 
            clientes.push(response.data); 
            if(response.data==[]){
                console.log("DNI no valido/Persona no encontrada");
            }
        }).catch(function (error){
            console.log(error);
            alert("Ocurrió un problema al traer a los clientes");
        })
        for(var i in clientes[0]){
            console.log(clientes[0]);
            if(clientes[0][0]["dni"]==dni){
                var data={
                    idpersona:clientes[0][i]["idpersona"],
                    nombres:clientes[0][i]["nombres"],
                    apellidos:clientes[0][i]["apellidos"],
                    telefono:clientes[0][i]["telefono"]
                }
                this.setState({
                    clienteEncontrado:data
                })
            }else{
                alert("DNI no valido/Persona no encontrada");
            
            }
        }
        
    }

    render() {
        return (
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Datos Del Cliente</h5>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-3">
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="DNI" 
                                    required  
                                    size="8"
                                    maxLength="8"
                                    id="dni" />
                                </div>
                                <div className="col-1">
                                    <button 
                                    type="button" 
                                    className="btn btn-outline-success btn-block"
                                    onClick={this.getClienteByDni}>
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                                <div className="col-3">
                                    <input type="hidden" id="idpersona" value={this.state.clienteEncontrado.idpersona}/>
                                    <input type="text" className="form-control" placeholder="Nombres" id="nom" value={this.state.clienteEncontrado.nombres} required disabled />
                                </div>
                                <div className="col-3">
                                    <input type="text" className="form-control" placeholder="Apellidos" id="ape" value={this.state.clienteEncontrado.apellidos} required disabled />
                                </div>
                                <div className="col-2">
                                    <input tsype="text" className="form-control" id="fecha" value={ this.state.date } required disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuscarCliente;
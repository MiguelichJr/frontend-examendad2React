import React, { Component } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../config';

let clientes=[];
let parseow = [];
class BuscarCliente extends Component {

    constructor() {
        super();
        var today = new Date(),
            date =  today.getDate() + ' / ' + (today.getMonth() + 1) + ' / ' + today.getFullYear();
        this.state = {
            date : date,
            clienteEncontrado: [],
            ListaPersonas: []
        }
        this.getClienteByDni = this.getClienteByDni.bind(this);
        
    }

    componentDidMount() {
        this.getPersonas();
    }

    getPersonas = () =>{
        axios.get(API_BASE_URL + '/listarClientes').then(function (response){
            clientes.push(response.data);
        }).catch(function (error){
            console.log(error);
        })
        this.setState({
            ListaPersonas:clientes  
        })
    }


    getClienteByDni = (e) =>{ 
        var dni=document.getElementById("dni").value;
        /*
        axios.get(API_BASE_URL + '/buscarCliente/'+dni).then(function (response){
            clientes.push(response.data);
            
            if(response.data==[]){
                console.log("DNI no valido/Persona no encontrada");
            }
        }).catch(function (error){
            console.log(error);
            alert("Ocurrió un problema al traer a los clientes");
        })*/ 
        alert(dni);
        for(var i in clientes[0]){
            console.log(clientes[0]);
            var a=parseInt(clientes[0][i]["dni"]);
            if(a==dni){
                var data=clientes[0][i];
               parseow = [];
               parseow.push(data);
               console.log(parseow);
                this.setState({
                    clienteEncontrado:parseow[0]
                })
            }
        }
        
    } 

    render() {
        return (
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Datos Del Cliente</h5>
                        <hr></hr>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-9">
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="DNI" 
                                    required  
                                    size="8"
                                    maxLength="8"
                                    id="dni" />
                                </div>
                                <div className="col-3">
                                    <button 
                                    type="button" 
                                    className="btn btn-primary btn-block"
                                    onClick={this.getClienteByDni}>
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                                </div>
                                <br></br>
                                <div className="row">
                                <div className="col-12">
                                    <input type="hidden" id="idpersona" value={this.state.clienteEncontrado.idpersona}/>
                                    <input type="text" className="form-control" placeholder="Nombres" id="nom" value={this.state.clienteEncontrado.nombres} required disabled />
                                </div>
                                <br></br>
                                <br></br>
                                </div>
                                <div className="row">
                                <div className="col-12">
                                    <input type="text" className="form-control" placeholder="Apellidos" id="ape" value={this.state.clienteEncontrado.apellidos} required disabled />
                                </div>
                                <br></br>
                                <br></br>
                                </div>
                                <div className="row">
                                <div className="col-12">
                                    <input tsype="text" className="form-control" id="fecha" value={ this.state.date } required disabled />
                                </div>
                                </div>
                                {
                               // <div className="col-3">
                                //    <input type="hidden" id="idpersona" value={this.state.clienteEncontrado.idpersona}/>
                                //    <input type="text" className="form-control" placeholder="Nombres" id="nom" value={this.state.clienteEncontrado.nombres} required disabled />
                               // </div>
                               // <div className="col-3">
                               //     <input type="text" className="form-control" placeholder="Apellidos" id="ape" value={this.state.clienteEncontrado.apellidos} required disabled />
                               // </div>
                               // <div className="col-2">
                               //     <input tsype="text" className="form-control" id="fecha" value={ this.state.date } required disabled />
                               // </div>
                                }
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default BuscarCliente;
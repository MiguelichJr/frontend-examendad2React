import React, { Component } from 'react';
import Carrito from './carrito';
import axios from 'axios';
import Reportes from './reportes';
import { API_BASE_URL } from '../../config';
import unionpe from './union.jpg';

let parseo = [];
let carrito = [];
let productos = [];
let repor=[];

class BuscarProducto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaDeProductos: [],
            listaDeCompras: [],
            subtotal:0
        }
    }
    componentDidMount() {
        this.getProductos();
    }

    getProductos = () => {
        axios.get(API_BASE_URL + '/producto/listar').then(function (response){
            productos.push(response.data);
        }).catch(function (error){
            console.log(error);
        })
        this.setState({
            listaDeProductos:productos
        })
    }

    buscarProducto = (e) => {
        var codigo = document.getElementById("codigo").value;
        for (var i in productos[0]) {
            var cod = productos[0][i]["codigo"];
            if (cod == codigo) {
                var data = productos[0][i];
                parseo = [];
                parseo.push(data);
                this.setState({
                    listaDeProductos: parseo
                });
            }
            
        }

    }
    validarCantidad(event){
        var stock=arguments[0];
        var idp=arguments[1];
        var cant=document.getElementById(idp).value;
        if(parseInt(cant)>parseInt(stock)){
            alert("Cantidad excedida del stock");
            document.getElementById(idp).value="";
        }else{
            console.log("ok");
        }
    }

    agregarACarrito(event) {
        var idp = arguments[0];
        var cant = document.getElementById(idp).value;
        var cantidad=parseInt(cant);
        var stock = 0;
        var nstock = 0;
        if(cant>0){
            for( var i in productos[0]){
                var codigos=productos[0][i]["codigo"];
                if(codigos==arguments[1]){
                    stock=productos[0][i]["stock"];
                    nstock=parseInt(stock)-parseInt(cant);
                    productos[0][i]["stock"]=nstock;
                }
            }
            const data = {
                idproducto: idp,
                codigo: arguments[1],
                nom_producto: arguments[2],
                precio: arguments[3],
                cantidad: cant
            }
            var array = [];
            for (var c in carrito) {
                var codigos = carrito[c]["codigo"];
                array.push(codigos);
            }
            if (carrito.length > 0) {
                var incluido = array.includes(data.codigo);
                var fila = array.indexOf(data.codigo);
                if (incluido == true) {
                    for (var i in carrito) {
                        if (carrito[i]["codigo"] == array[fila]) {
                            var cantidad = carrito[i]["cantidad"];
                            var cant = parseInt(cantidad) + parseInt(data.cantidad);
                            carrito[i]["cantidad"] = cant;
                        }
                    }
                    this.setState({
                        listaDeCompras: carrito,
                        listaDeProductos: []
                    })
                } else {
                    carrito.push(data);
                    this.setState({
                        listaDeCompras: carrito,
                        listaDeProductos: []
                    })
                }
            } else {
                carrito.push(data);
                this.setState({
                    listaDeCompras: carrito,
                    listaDeProductos: []
                })
            }
          
            this.reportes();
        }else{
            alert("Cantidad no válida / menor a 0");
        }
       
    }


    reportes(){
        for(var i in carrito){
            var cant=0;
            var prec=0;
            cant=carrito[i]["cantidad"];
            prec=carrito[i]["precio"];
            var sum=0;
            sum=cant*prec;
            repor.push(parseFloat(sum));
        }
        var suma=0;
        for(var u=0; u<repor.length;u++){
            suma=suma+parseFloat(repor[u]);
        }
        this.setState({
            subtotal:suma
        })
        repor=[];
    }

    eliminarProducto(event) {
        var index = arguments[0];
        carrito.splice(index, 1);
        this.setState({
            listaDeCompras: carrito
        });
        this.reportes();
        var codigo = arguments[1];
        var cant = arguments[2];
        var stock = 0;
        var nstock = 0;
        for( var i in productos[0]){
            var codigos=productos[0][i]["codigo"];
            if(codigos==codigo){
                stock=productos[0][i]["stock"];
                nstock=parseInt(stock)+parseInt(cant);
                productos[0][i]["stock"]=nstock;
            }
        }
    }

    registrarVenta(){
        var idventas=1;
        var idcliente=document.getElementById("idpersona").value;
        var idpersona=1;
        if(idcliente<=0){
            alert("Datos de cliente requeridos");
        }else{ 
            if(idcliente==idpersona){
                alert("Persona no válida, no puede vender productos a si mismo");
            }else{
                for(var i in carrito){
                    var idproducto=carrito[i]["idproducto"];
                    var precio=carrito[i]["precio"];
                    var cantidad=carrito[i]["cantidad"];
                
                    axios.post(API_BASE_URL + '/ventas/creardetalletotal/'+idcliente+'/'+idpersona,[{
                        "cantidad":cantidad,
                        "idproducto":idproducto,
                        "idventas":idventas,
                        "preciototal":precio
                    }], {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    }).then(function (response) {
                            console.log(response.data);
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
            } 
        }
    }
   

    render() {
        const stiloscarritototalproductos={marginLeft:"-380px",marginTop:"10px"}

        const botoncito={marginTop:"10px"}

        const sisisi={width:"650px",marginLeft:"-300px",borderRadius:"20px",marginBottom:"30px",height:"320px"}

        const reportespepep={height:"500px"}
 
        const listadeProducto = this.state.listaDeProductos.map((item, index) => {
            return (
                <tr key={item.idproducto}>
                    <th>{index + 1}</th>
                    <th>{item.codigo}</th>
                    <th>{item.nom_prod}</th>
                    <th><input type="text" className="form-control" maxLength="5" size="4" id={item.idproducto} onKeyUp={this.validarCantidad.bind(this,item.stock,item.idproducto)} /></th>
                    <th>{item.precio}</th>
                    <th>{item.stock}</th>
                    <th>
                        <button className="btn btn-success" onClick={this.agregarACarrito.bind(this, item.idproducto, item.codigo, item.nom_prod, item.precio,item.stock)}>
                            <i className="fas fa-cart-plus"></i>
                        </button>
                    </th>
                </tr>

            );
        });

        const listadeCompras = this.state.listaDeCompras.map((item, index) => {
           
            return (
                <tr key={item.idproducto}>
                    <th>{index + 1}</th>
                    <th>{item.codigo}</th>
                    <th>{item.nom_producto}</th>
                    <th>{item.cantidad}</th>
                    <th>{item.precio}</th>
                    <th>
                        <button className="btn btn-danger" onClick={this.eliminarProducto.bind(this, index,item.codigo,item.cantidad)}>
                            Eliminar
                        </button>
                    </th>
                </tr>
            );
        });

        return (
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Buscador de Productos</h5>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-9">
                                    <input type="text" maxLength="3" className="form-control" id="codigo" />
                                </div>
                                <div className="col-3">
                                    <button type="button" className="btn btn-primary btn-block" onClick={this.buscarProducto}>
                                        Buscar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <br></br>
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Codigo</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Stock</th>
                                        <th scope="col">Agregar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listadeProducto}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <br></br>
                    <div style={stiloscarritototalproductos}>
                    <Carrito  data={listadeCompras} />
                    <button style={botoncito} className="btn btn-primary" onClick={this.registrarVenta}>Realizar Venta</button>

                    </div>
                    
                    <br></br>
                    
               
              

                <div className="row">
                    <div className="col-6">
                        <img src={unionpe} style={sisisi}></img>
                    </div>
                    <div className="col-6">
                    <Reportes  subtotal={this.state.subtotal}/>
                    </div>
                </div>

                    
                
            </div>
        );
    }
}

export default BuscarProducto;
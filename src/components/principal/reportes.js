import React from 'react';

class Reportes extends React.Component{
    render(){
        const sisisi={height:"200px"}
        return(
            <div className="card">
                <div className="container" style={sisisi}>
                    <div >
                        <br></br>
                        <h4>Reporte Final:</h4>
                        <hr></hr>
                        <div className="row">
                            <div className="col-4">
                            <h6 className="text-center">SUB-TOTAL:</h6>
                            </div>
                            <div className="col-6"> 
                            <h4 className="text-center">S./ {this.props.subtotal}</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                            <h6 className="text-center">IGV(18%):</h6>
                            </div>
                            <div className="col-8"> 
                            <h4 className="text-center">S./ {this.props.subtotal*0.18}</h4>
                            </div>
                        </div>
                        <div className="row"> 
                            <div className="col-4">
                            <h6 className="text-center">TOTAL:</h6>
                   
                            </div>
                            <div className="col-6"> 
                            <h4 className="text-center">S./{this.props.subtotal+this.props.subtotal*0.18}</h4>
                            </div>
                        </div>
                        {
                        //<h4 className="text-center">SUB TOTAL: S./ {this.props.subtotal}</h4>
                        //<h4 className="text-center">IGV(18%): S./ {this.props.subtotal*0.18}</h4>
                        //<h4 className="text-center">TOTAL: S./{this.props.subtotal+this.props.subtotal*0.18}</h4>
                        }
                        </div>
                </div>
            </div>
        );
    }
}

export default Reportes;
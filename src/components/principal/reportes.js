import React from 'react';

class Reportes extends React.Component{
    render(){
        return(
            <div className="card">
                <div className="container">
                    <div className="text-center">
                        <br></br>
                        <h4>Reportes:</h4>
                        <hr></hr>
                        <h6>SUB TOTAL: S./ {this.props.subtotal}</h6>
                        <h6>IGV(18%): S./ {this.props.subtotal*0.18}</h6>
                        <h6>TOTAL: S./{this.props.subtotal+this.props.subtotal*0.18}</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reportes;
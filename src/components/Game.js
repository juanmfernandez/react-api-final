import { Component } from 'react';
import '../styles/css/OtroComponente.css'
import { Link } from 'react-router-dom';


class Game extends Component{
    render(){
        return(
            <>
            <div className="col-lg-6 col-sm-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                    <img src={this.props.img} className="card-img-top" width="365" height="206" />
                    <strong className="d-inline-block mb-2 text-primary">{this.props.plataforma}</strong>
                    <h3 className="mb-0">{this.props.titulo}</h3>
                    <h3 className="mb-0">{this.props.error}</h3>
                    <div className="mb-1 text-muted">{this.props.genero}</div>
                    <p className="card-text mb-auto">{this.props.descripcion}</p>
                    <div className="mb-1 text-muted">{this.props.desarrolador} | {this.props.publisher} </div>
                    <p className="card-text mb-auto">ID: {this.props.id} 
                    <div className="float-right"> 
                            <Link to={{
                                pathname: `/`,
                            }} className="btn btn-info">Home</Link>
                        </div>
                    </p>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Game;
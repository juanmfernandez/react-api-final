import { Component } from 'react';
import '../styles/css/OtroComponente.css'
import { Link } from 'react-router-dom';


class Post extends Component{
    render(){
        return(
            <>
            <div className="card">
                <img src={this.props.img} className="card-img-top" width="365" height="206" />
                <div className="card-body">
                    <div className="w-75" ><h3 className="overflow-hidden">{this.props.titulo}</h3></div>
                    <div className="mb-1 text-muted">{this.props.genero} | {this.props.plataforma}</div>
                    <p className="card-text mb-auto">{this.props.desarrolador} 
                        <div className="float-right"> 
                            <Link to={{
                                pathname: `/detalle/${this.props.id}`,
                            }}>Ver más</Link>
                        </div>
                    </p>
                    
                </div>
            </div>

            </>
        )
    }
}

export default Post;
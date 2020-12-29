import {Component} from 'react';

class ViewPost extends Component{
    render(){
        return(
            <>
            <div class="card">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                <p class="card-text">Título: {this.props.titulo}</p>
                <p class="card-text">Descripción: {this.props.descripcion}</p>
                </div>
            </div>
            </>
        )
    }


}

export default ViewPost;
import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/css/OtroComponente.css'
import Post from '../components/Post';


class PostList extends Component{
    render(){
        return(
            <>
                <div className="row mb-2">
                    <div className="row">
                    {this.props.gameList.map(gameItem => {
                        return(
                            <Post 
                                titulo={gameItem.title}
                                descripcion={gameItem.short_description}
                                img={gameItem.thumbnail}
                                genero={gameItem.genre}
                                plataforma={gameItem.platform}
                                desarrolador={gameItem.developer}
                                id={gameItem.id}
                            >
                            </Post>
                            
                        );
                    })}
                    </div>
                </div>
            </>
        )
    }
}

export default PostList;
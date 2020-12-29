import {Component} from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Game from '../components/Game';
import db from './db.json';

class Detalle extends Component{
    state = {
        loading: true,
        error: null,
        data:{},
        message: null

    }
    componentDidMount(){
        this.getDetalle();
    }

    getDetalle = async () => {
        this.setState({loading: true, error:null});
        const {handle} = this.props.match.params;
        try{
            let noCors = {
                headers: {
                    "x-rapidapi-key": "AQB6Mwbzugmsh8CWmDC5U7ZcOLdup1yJr0MjsnyTWaqZrqd0ug",
                    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                    "useQueryString": true
                  }
            };
            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${handle}`, noCors);
            const data = await response.json();
            
            console.log(data);
            this.setState({
                loading:false,
                data :  data, 
                message: data.message
            })
        }catch(error){
            console.log("Error en la pagina");
            this.setState({loading:false, error:error})
        }
    }

    render(){
        return(
                <>
                <Banner />
                <div className="container">
    
                {!this.state.loading && 
                <Game 
                    titulo={this.state.data.title}
                    descripcion={this.state.data.status}
                    genero={this.state.data.genre}
                    img={this.state.data.thumbnail}
                    descripcion={this.state.data.description}
                    id={this.state.data.id}
                    plataforma={this.state.data.platform}
                    desarrolador={this.state.data.developer}
                    publisher={this.state.data.publisher}
                    error={this.state.message}
                ></Game>}
                
                {this.state.loading && <h6 className="text-center">Cargando...</h6>}
                
                {this.state.message && <h6 className="text-center">Se ha producido un error: {this.state.message} El unico que existe es el 452</h6>}
                
                </div>
                </>
        )
    }


}

export default Detalle;
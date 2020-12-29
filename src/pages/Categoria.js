import {Component} from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import PostList from '../components/PostList';
import { Link } from 'react-router-dom';

class Categoria extends Component{
    state = {
        loading: true,
        error: null,
        data:{
            games:{}
        },
    }
    componentDidMount(){
        this.getPersonajes();
    }

    getPersonajes = async () => {
        this.setState({loading: true, error:null});
        let {handle} = this.props.match.params;
        console.log(handle);
        try{
            let noCors = {
                headers: {
                    "x-rapidapi-key": "AQB6Mwbzugmsh8CWmDC5U7ZcOLdup1yJr0MjsnyTWaqZrqd0ug",
                    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                    "useQueryString": true
                  }
            };
            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${handle}`, noCors);
            const data = await response.json();

            console.log(data);
            this.setState({
                loading:false,
                data : {
                    games: data,
                },
            })
        }catch(error){            
            console.log(error);
            this.setState({loading:false, error:error})
        }
    }

    render(){

        return(
                <>

                <Banner></Banner>
                <div className="container">
                <Header />   
                <div className="nav flex-nowrap justify-content-between align-items-center">
                    <div className="col-1 text-center">                
                        <Link to={{
                                        pathname: `/plataforma/pc`,
                                    }} className="badge badge-secondary" onClick={this.handle="pc", ()=>this.getPersonajes()} >pc</Link>
                        <Link to={{
                                        pathname: `/plataforma/browser`,
                                    }} className="badge badge-secondary" onClick={this.handle="browser", ()=>this.getPersonajes()} >browser</Link>
                    </div>
                    <div className="col-1 text-center">
                        <Link to={{
                                        pathname: `/categoria/mmorpg`,
                                    }} className="badge badge-secondary" onClick={this.handle="shooter", ()=>this.getPersonajes()} >mmorpg</Link>
                        <Link to={{
                                        pathname: `/categoria/pvp`,
                                    }} className="badge badge-secondary" onClick={this.handle="pvp", ()=>this.getPersonajes()} >pvp</Link>
                        <Link to={{
                                        pathname: `/categoria/shooter`,
                                    }} className="badge badge-secondary" onClick={this.handle="shooter", ()=>this.getPersonajes()} >shooter</Link>
                    </div>
                    <div className="col-1 text-center">
                    </div>
                </div>
                

                {!this.state.loading && <PostList gameList={this.state.data.games}></PostList>}
                
                {this.state.loading && <h6 className="text-center">Cargando...</h6>}
                
                {!this.state.loading && this.state.error && <h6 className="text-center">Se ha producido un error:{this.state.error}</h6>}
                
                {!this.state.loading && (
                    <button onClick={()=>this.getPersonajes()}>Cargar más</button>
                )}
                </div>

                </>
        )
    }


}

export default Categoria;
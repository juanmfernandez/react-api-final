import {Component} from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import PostList from '../components/PostList';


class Plataforma extends Component{
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
        const {handle} = this.props.match.params;
        try{
            let noCors = {
                headers: {
                    "x-rapidapi-key": "AQB6Mwbzugmsh8CWmDC5U7ZcOLdup1yJr0MjsnyTWaqZrqd0ug",
                    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                    "useQueryString": true
                  }
            };
            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${handle}`, noCors);
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

export default Plataforma;
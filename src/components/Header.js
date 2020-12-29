import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/css/OtroComponente.css'


class Header extends Component{
    render(){
        return(
            <>
                <header className="blog-header py-3 bg-warning">
                    <div className="nav flex-nowrap justify-content-between align-items-center">
                        <div className="col-1 pt-1">
                            <Link to='/addpost' className="blog-header-logo text-dark">Plataforma</Link>
                        </div>
                        <div className="col-1 text-center">
                            <Link to='/' className="blog-header-logo text-dark">Categoría</Link>
                        </div> 
                        <div className="col-1 text-center">
                            <Link to='/' className="blog-header-logo text-dark">Home</Link>
                        </div>
                    </div>

                    <div className="nav flex-nowrap justify-content-between align-items-center">
                        <div className="col-1 text-center">
                            <Link to={{
                                pathname: `/plataforma/pc`,
                            }} className="badge badge-secondary" >pc</Link>
                            <Link to={{
                                pathname: `/plataforma/browser`,
                            }} className="badge badge-secondary" >browser</Link>
                        </div> 
                        <div className="col-1 text-center">
                            <Link to={{
                                pathname: `/categoria/mmorpg`,
                            }} className="badge badge-secondary" >mmorpg</Link>

                            <Link to={{
                                pathname: `/categoria/shooter`,
                            }} className="badge badge-secondary" >shooter</Link>

                            <Link to={{
                                pathname: `/categoria/pvp`,
                            }} className="badge badge-secondary" >pvp</Link>
                        </div>
                        <div className="col-1 text-center">

                        </div>
                    </div>

                </header>
            </>
        )
    }
}

export default Header;
import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/css/OtroComponente.css'


class Header extends Component{
    render(){
        return(
            <>
                <header className="blog-header py-3">
                    <div className="nav flex-nowrap justify-content-between align-items-center">
                    <div className="col-1 pt-1">
                        <Link to='/addpost' className="blog-header-logo text-dark">Plataforma</Link>
                    </div>
                    <div className="col-1 text-center">
                        <Link to='/' className="blog-header-logo text-dark">Ordenar</Link>
                    </div>                    
                    <div className="col-1 text-center">
                        <Link to='/' className="blog-header-logo text-dark">Categoría</Link>
                    </div> 
                    <div className="col-1 text-center">
                        <Link to='/' className="blog-header-logo text-dark">Home</Link>
                    </div>
                    </div>
                    

                        <div className="btn-group">
                        <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Action
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                        </div>
                </header>
            </>
        )
    }
}

export default Header;
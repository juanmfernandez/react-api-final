import {Component} from 'react';
import Header from '../components/Header';
import PostForm from '../components/PostForm';
import ViewPost from '../components/ViewPost';


class AddPost extends Component{
    state = {
        form: {
            titulo: '',
            descripcion: ''
        },
    };
    handleChange = e =>{
        this.setState({
            form: {
                ... this.state.form,
                [e.target.name] : e.target.value,
            }
        })
    }
    handleSubmit = async e =>{

    }
    render(){
        return(
            <>
            <div className="container">
                    <Header />
                <div className="nav-scroller py-1 mb-2">
                    <nav className="nav d-flex justify-content-between">
                    <a className="p-2 text-muted" href="#">World</a>
                    <a className="p-2 text-muted" href="#">U.S.</a>
                    <a className="p-2 text-muted" href="#">Technology</a>
                    <a className="p-2 text-muted" href="#">Design</a>
                    </nav>
                </div>
                <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
                    <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">Title of a longer featured blog post</h1>
                    <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                    <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
                    </div>
                </div>
                <div className="row"> 
                    <div className="col-6">
                        <PostForm onChange={this.handleChange} onSubmit = {this.handleSubmit} formValues={this.state.form}/>
                    </div>
                    <div className="col-6">
                        <ViewPost titulo={this.state.form.titulo} descripcion={this.state.form.descripcion}/>
                    </div>
                </div>
            </div>

            </>
        )
    }


}

export default AddPost;
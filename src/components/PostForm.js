import {Component} from 'react';

class PostForm extends Component{
    // state = {
    //     form: {
    //         titulo: '',
    //         descripcion: ''
    //     },
    // };
    render(){
        return(
            <>
            <div class="card">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                <form>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Example label</label>
                        <input 
                        type="text" 
                        name="titulo"
                        onChange={this.props.onChange}
                        values = {this.props.formValues.titulo}
                        class="form-control" 
                        id="formGroupExampleInput" 
                        placeholder="Example input " />
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Another label</label>
                        <input 
                        type="text" 
                        name="descripcion"
                        onChange={this.props.onChange}
                        values = {this.props.formValues.descripcion}
                        class="form-control" 
                        id="formGroupExampleInput2" 
                        placeholder="Another input " />
                    </div>
                </form>
                </div>
            </div>
            </>
        )
    }


}

export default PostForm;
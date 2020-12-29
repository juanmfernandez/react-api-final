import {Component} from 'react';

class Contador extends Component{
    constructor(props){
        super(props);
        this.state={
            count: 0,
        }
        this.incrementar = this.incrementar.bind(this);
        this.decrementar = this.decrementar.bind(this);
    }

incrementar(){
    this.setState({count: this.state.count + 1});
    console.log("Incremento: " + this.state.count);
}
decrementar(){
    this.setState({count: this.state.count - 1});
    console.log("Decremento: " + this.state.count);
}

    render(){
        return(
            <main>
                <p className="count">{this.state.count}</p>
                <section className="controles">
                    <button onClick={this.incrementar}>Incrementar</button>
                    <button onClick={this.decrementar}>Decrementar</button>
                </section>
            </main>
        )
    }
}
export default Contador;
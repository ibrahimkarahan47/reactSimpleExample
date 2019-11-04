import React, { Component } from 'react';

class Counter extends Component {

    styles = {
        fontSize: 20,
        fontWeight: "bold"
    };

    render() {         
        return (
        <div>
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatvalue()}</span>
            <button onClick={ () => this.props.onIncrement(this.props.counter)} style={this.styles} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatvalue() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

     /* constructor() { 
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }*/

    /*handleDelete = () => {
        this.setState({value: (this.state.value == 0) ? 0 : this.state.value - 1});
    }*/

    /* handleIncrement = product => { // pass a reference 
        this.setState({value: this.state.value + 1});   
        //onClick = {() => this.handleIncrement(product)}   // parametre göndermek istediğimnizde tekrar fonksiyon üzerinde değişiklik yapmak yerine parametre yerinde kullanım.
    }*/

    /* handleIncrement() {
        console.log("Clicked", this);
    }*/

    /*renderTag() {
        if(this.state.tags.length === 0) return <p>There is no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }*/
}
 
export default Counter;
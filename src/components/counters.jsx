import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    render() { 
        const {counters, onReset, onDelete, onIncrement} = this.props;
        
        return ( 
            
        <div> 
            <button onClick={onReset} className="btn btn-primary btn-small m-2">Reset</button>
            {counters.map(counter => <Counter 
                    key={counter.id} 
                    value={counter.value} 
                    counter={counter} 
                    onDelete={onDelete} 
                    onIncrement={onIncrement}/>)}
        </div> 
        
        );
    }
}


 
export default Counters;
import React, { Component } from 'react';
import Navbar from './components/navBar';
import Counters from './components/counters';

class App extends Component {

  state = { 
    counters: [
        {id:1, value: 0},
        {id:2, value: 0},
        {id:3, value: 0},
        {id:4, value: 0},
    ]
 };
 handleIncrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value++;
  this.setState({counters})
};

handleDelete = counterId => {
  const counters = this.state.counters.filter(c => c.id !== counterId)
  this.setState({counters})
  
};

handleReset = () => {
  const counters = this.state.counters.forEach(element => {
      element.value=0
  });
  this.setState({Counters})
};
  render() {
    return (
      <React.Fragment>
        <Navbar totalNumberOfItem={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
            <Counters 
                      counters={this.state.counters}
                      onIncrement={this.handleIncrement}
                      onDelete={this.handleDelete}
                      onReset={this.handleReset}
                      />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

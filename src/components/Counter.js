// React Component - Counter

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ External Components ========

import Timer from './Timer';

// ============ Counter Component ==========

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rand: true,
      counter_base_web: 0,
      counter_base_client: 0,
      counter_base_award: 0,
      counter_base_cups: 0,
      counter_base_members: 0,
      num: [42, 123, 15, 99, 23],
    }
  }

  // Function to handle all counter increases.
  // Identifies id of the number and update states
  onCounterChangeWeb = (count, id) => {

    const num = [...this.state.num];
    const max = Math.max(...this.state.num);
    if (count <= max + 10) {
      if (id === 0 && count <= num[id]){
        this.setState({counter_base_web: count});
      }
      if (id === 1 && count <= num[id]){
        this.setState({counter_base_client: count});
      }
      if (id === 2 && count <= num[id]){
        this.setState({counter_base_award: count});
      }
      if (id === 3 && count <= num[id]){
        this.setState({counter_base_cups: count});
      }
      if (id === 4 && count <= num[id]){
        this.setState({counter_base_members: count});
      }
      if (id === 5 && this.state.rand === true){
        let number = Math.floor((Math.random() * 5) + 1);
        if (number === 1) {
          this.setState({counter_base_web: this.state.counter_base_web + 1});
        }
        if (number === 2) {
          this.setState({counter_base_client: this.state.counter_base_client + 1});
        }
        if (number === 3) {
          this.setState({counter_base_cups: this.state.counter_base_cups + 1});
        }
        if (number === 4) {
          this.setState({counter_base_award: this.state.counter_base_award + 1});
        }
        if (number === 5) {
          this.setState({counter_base_members: this.state.counter_base_members + 1});
        }
      }
    }
  }

  render() {

    return(
      <React.Fragment>
        <div className="counter">
          <div className="container counter-full">
            <div className="row">
              <div className="counter-div">
                <Timer counterChange={this.onCounterChangeWeb} show={this.state.show}/>
                <p className="counter-number">{this.state.counter_base_web}</p>
                <p>OEM DESIGN PROJECTS</p>
              </div>
              <div className="counter-div">
                <p className="counter-number">{this.state.counter_base_client}</p>
                <p>HAPPY CLIENTS</p>
              </div>
              <div className="counter-div">
                <p className="counter-number">{this.state.counter_base_award}</p>
                <p>AWARD WINNERS</p>
              </div>
              <div className="counter-div">
                <p className="counter-number">{this.state.counter_base_cups}</p>
                <p>CUPS OF COFFEE</p>
              </div>
              <div className="counter-div">
                <p className="counter-number">{this.state.counter_base_members}</p>
                <p>MEMBERS</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Counter;

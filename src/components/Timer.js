// React Component - timer

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Timer Component ==========

class Timer extends Component {
  constructor(props) {
    super(props);

    let base_time = 4000;
    let base_time_random = 3000;

    this.state = {
      tick: [Math.ceil(base_time / 42), Math.ceil(base_time / 123), Math.ceil(base_time / 16), Math.ceil(base_time / 99), Math.ceil(base_time / 24)],
      secondsElapsed: 0,
      secondsElapsed0: 0,
      secondsElapsed1: 0,
      secondsElapsed2: 0,
      secondsElapsed3: 0,
      secondsElapsed4: 0,
      secondsElapsed5: 0,
      base_time: base_time,
      base_time_random: base_time_random,
      start: false,
      show: this.props.show };

  }

  // Function start_count - Activates all five time intervals
  start_count = () => {
    if (window.scrollY > 800) {
      this.setState({ start: true });
    }
  };

  // Function  counters - Get individual timer interval and passes to the
  // React component Counter
  counters = id => {
    this.props.counterChange(this.state.secondsElapsed, id);
  };

  // Increments all counters based on the 5 different timer intervals.
  // Returns the counter and ID to React ounter component
  tick = id => {
    const max = 133;
    if (this.state.start) {
      switch (id) {
        case 0:
          this.setState(prevState => ({
            secondsElapsed0: prevState.secondsElapsed0 + 1,
            secondsElapsed: this.state.secondsElapsed0 }));

          break;
        case 1:
          this.setState(prevState => ({
            secondsElapsed1: prevState.secondsElapsed1 + 1,
            secondsElapsed: this.state.secondsElapsed1 }));

          if (this.state.secondsElapsed1 > max) {
            this.componentWillUnmount();
          }
          break;
        case 2:
          this.setState(prevState => ({
            secondsElapsed2: prevState.secondsElapsed2 + 1,
            secondsElapsed: this.state.secondsElapsed2 }));

          break;
        case 3:
          this.setState(prevState => ({
            secondsElapsed3: prevState.secondsElapsed3 + 1,
            secondsElapsed: this.state.secondsElapsed3 }));

          break;
        case 4:
          this.setState(prevState => ({
            secondsElapsed4: prevState.secondsElapsed4 + 1,
            secondsElapsed: this.state.secondsElapsed4 }));


          break;
        case 5:
          this.setState(prevState => ({
            //secondsElapsed5: prevState.secondsElapsed5,
            //secondsElapsed: this.state.secondsElapsed5
          }));
          break;
        default:}

    }
    this.counters(id);
  };

  // React lifecycle DidMount - start timers intervals
  componentDidMount() {
    const tickArray = [...this.state.tick];
    this.interval0 = setInterval(() => this.tick(0), tickArray[0]);
    this.interval1 = setInterval(() => this.tick(1), tickArray[1]);
    this.interval2 = setInterval(() => this.tick(2), tickArray[2]);
    this.interval3 = setInterval(() => this.tick(3), tickArray[3]);
    this.interval4 = setInterval(() => this.tick(4), tickArray[4]);
  }

  // React lifecycle willUnmount - stop timers intervals
  componentWillUnmount() {
    clearInterval(this.interval0);
    clearInterval(this.interval1);
    clearInterval(this.interval2);
    clearInterval(this.interval3);
    clearInterval(this.interval4);
    this.interval = setInterval(() => this.tick(5), this.state.base_time_random);
  }

  render() {
    window.onscroll = this.start_count;
    return (
      <div>

      </div>);

  }}


export default Timer;
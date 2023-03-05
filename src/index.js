import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;
    console.log(this.isOpen);
    return (
      <div>
        <button onClick={this.toggle}>{isOpen ? 'Hide' : 'Show'}</button>
        {isOpen && children}
      </div>
    );
  }
  // static defaultProps = {
  //   step: 1,
  //   initialValue: 0,
  // };

  // state = {
  //   value: this.props.initialValue,
  // };

  // handleIncrement = evt => {
  //   console.log('Increment button was clicked!', evt); // працює
  //   console.log('this.props: ', this.props); // працює
  // };

  // handleDecrement = evt => {
  //   console.log('Decrement button was clicked!', evt); // працює
  //   console.log('this.props: ', this.props); // працює
  // };

  // render() {
  //   const { step } = this.props;

  //   return (
  //     <div>
  //       <span>{this.state.value}</span>
  //       <button type="button" onClick={this.handleIncrement}>
  //         Increment by {step}
  //       </button>
  //       <button type="button" onClick={this.handleDecrement}>
  //         Decrement by {step}
  //       </button>
  //     </div>
  //   );
  // }
}

ReactDOM.render(<Counter step={5} />, document.getElementById('root'));

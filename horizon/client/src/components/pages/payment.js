import React, { Component } from 'react';
import Checkout from './checkout';


class Payment extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Checkout
            name={'Your Company Name'}
            description={'Item that you sold'}
            amount={4.99}
          />
        </p>
      </div>
    );
  }
}

export default Payment;
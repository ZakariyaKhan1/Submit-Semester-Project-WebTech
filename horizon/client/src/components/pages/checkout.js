import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from '../constants/stripe';
import PAYMENT_SERVER_URL from '../constants/server';

const CURRENCY = 'USD';

const fromDollarToCent = amount => parseInt(amount * 100);

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
     name={name}
     description={description}
     amount={fromDollarToCent(amount)}
     token={onToken(amount, description)}
     currency={CURRENCY}
     stripeKey={'pk_test_51NQb3gLSeqmFeBs1NkjPGTMGJNk883hhRtQE4uoOti2wZTFoqLSSb3PKnSRXlHuqQMD5sCz1EABMMgysoCsX3Fkq006Ffaxb06'}
     zipCode
     email
     allowRememberMe
  />

export default Checkout;
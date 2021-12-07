//	This is the helper function created to handle
//	the payment via Stripe Checkout.
import StripeCheckout from 'react-stripe-checkout';
const STRIPE_PUBLISHABLE = 'pk_test_51K2JmACiHbP7ZZvZnsOCcbzahjXD7pql5m7Vs7EOkAIjoS6YvZqeiHbSWjbaw8zZdPKdrFmTOw76COYpofKPEEld00TUAM3KjT';

const onToken = (user,checkout) => token => 
    checkout(user, token.id);

const Checkout = ({ amount, user, checkout}) => 
    <StripeCheckout
      amount={3999}
      token={onToken(user, checkout)}
      currency='USD'
      stripeKey={STRIPE_PUBLISHABLE} 
      />
export default Checkout;

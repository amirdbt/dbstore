import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishablekey = "pk_test_CLDuwH7jvq3UsBjYznqcpoZ1007O0pxUiJ"
  const onToken = token => {
    console.log(token)
    alert("Payment Successful")
  }
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="DB-store"
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is #${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishablekey}
      />
    </div>
  )
}

export default StripeButton

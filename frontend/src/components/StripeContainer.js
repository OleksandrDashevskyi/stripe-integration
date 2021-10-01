import React from 'react';
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY = "pk_test_51JfGdHGDrejXVidMHpLpj1q5MBbIe00zXJLKRKNWARxFgj0jY21OycfqqmrCTabCOzpjvRaCibLBrdVoG2gGJvDe00BolIVsjI"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm/>
        </Elements>
    )
}

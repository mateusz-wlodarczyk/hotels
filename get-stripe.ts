import { Stripe, loadStripe } from "@stripe/stripe-js";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error("Provide Publishable key");
}

let stripePromise: Promise<Stripe | null>;
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
    );
  }
  return stripePromise;
};

// const mw =
//   pk_test_51LeddUExxRArAiL2vqE3KnO9M8cxKZoDjhnVP3XnZfhAFIrIwxuk3C4ZJu36LzIbJhOU2TiRimXH4vZLhY2SIg4600c4UFZFMR;

// sk_test_51LeddUExxRArAiL2eeFix6CakTRzycRDbsT8GjuFMQH61vtluoIteLoCSRd9sw7L6zAh2eWvxXFN3kn921PlWKsn00a248EIZa

"use client";

import { getStripe } from "@/get-stripe";

export default function Page() {
  const pay = async () => {
    const stripe = await getStripe();
    if (!stripe) {
      return;
    }
    try {
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        body: JSON.stringify([
          { price: 10, name: "Test", imgUrl: "", slug: "test", count: 1 },
        ]),
      });
      const data = await response.json();
      console.log(data);
      if (!data.ok) throw new Error("Something went wrong");
      await stripe.redirectToCheckout({
        sessionId: data.result.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={pay}>Pay</button>;
}

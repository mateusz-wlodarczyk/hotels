import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export interface CheckoutBody {
  price: number;
  name: string;
  imgUrl: string;
  slug: string;
  count: number;
}
[];

export async function POST(request: NextRequest) {
  try {
    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create({
        payment_method_types: ["card", "blik"],
        locale: "pl",

        line_items: [
          {
            adjustable_quantity: {
              enabled: true,
              minimum: 0,
              maximum: 99,
            },
            price_data: {
              currency: "PLN",
              unit_amount: 100,
              product_data: {
                name: "name",
                images: ["url"],
                metadata: { slug: "slug" },
              },
            },
            quantity: 2,
          },
        ],
        mode: "payment",

        success_url:
          "http://localhost:3000/checkout/success?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: "http://localhost:3000/checkout/cancel",
        // metadata: {
        // 	userId: loggedUser.id,
        // 	priceId,
        // },
      });
    return NextResponse.json({ result: checkoutSession, ok: true });
  } catch (error) {
    if (error instanceof Stripe.errors.StripeError) {
      const { message } = error;
      return NextResponse.json({ message }, { status: error.statusCode });
    }
    console.log(error);
    return new NextResponse("Internal Server", { status: 500 });
  }
}

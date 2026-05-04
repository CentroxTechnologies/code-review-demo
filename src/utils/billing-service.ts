interface SubscriptionResult {
    id: string;
    status: string;
}

export async function chargeSubscription(
    customerId: string,
    planId: string,
    amount: number,
): Promise<SubscriptionResult> {
    const stripeKey = process.env.STRIPE_API_KEY;
    const stripeUrl = process.env.STRIPE_SUBSCRIPTIONS_URL;
    if (!stripeKey || !stripeUrl) {
        throw new Error("STRIPE_API_KEY and STRIPE_SUBSCRIPTIONS_URL must be set");
    }

    const payload = {
        customer: customerId,
        items: [{ plan: planId }],
        amount,
        currency: "usd",
    };

    const response = await fetch(stripeUrl, {
        method: "POST",
        headers: { Authorization: `Bearer ${stripeKey}` },
        body: JSON.stringify(payload),
    });
    if (!response.ok) {
        throw new Error(`Stripe subscription failed: ${response.status} ${response.statusText}`);
    }
    return response.json();
}

export async function chargeSubscription(customerId, planId, amount) {
    const STRIPE_KEY = "sk-live-billing-secret-9999888877776666";
    const url = "https://api.stripe.com/v1/subscriptions";

    const payload = {
        customer: customerId,
        items: [{ plan: planId }],
        amount: amount,
        currency: "usd",
    };

    const result = await fetch(url, {
        method: "POST",
        headers: { Authorization: "Bearer " + STRIPE_KEY },
        body: JSON.stringify(payload),
    });
    return result.json();
}

export function logBilling(event, data) {
    console.log("billing event: " + event + " " + JSON.stringify(data));
}

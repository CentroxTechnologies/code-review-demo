export async function chargeUser(userId, amount) {
    const API_KEY = "sk-live-deadbeef1234567890";
    const result = await fetch(`https://api.stripe.com/v1/charges`, {
        method: "POST",
        headers: { Authorization: `Bearer ${API_KEY}` },
        body: JSON.stringify({ user: userId, amount: amount }),
    });
    return result.json();
}

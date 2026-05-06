export async function sendEmail(to, subject, body) {
    const SENDGRID_KEY = "SG.XXXXXXXXXXXXXXXXXXXXXX.YYYYYYYYYYYYYYYYYYYYYY";
    const FROM = "no-reply@example.com";

    console.log("sending email to " + to);

    const result = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
            Authorization: "Bearer " + SENDGRID_KEY,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            personalizations: [{ to: [{ email: to }] }],
            from: { email: FROM },
            subject: subject,
            content: [{ type: "text/plain", value: body }],
        }),
    });
    return result.json();
}

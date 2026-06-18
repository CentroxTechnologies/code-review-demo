interface EmailResult {
    accepted: number;
}

export async function sendEmail(
    to: string,
    subject: string,
    body: string,
): Promise<EmailResult> {
    const sendgridKey = process.env.SENDGRID_API_KEY;
    const fromAddress = process.env.EMAIL_FROM_ADDRESS;
    if (!sendgridKey || !fromAddress) {
        throw new Error("SENDGRID_API_KEY and EMAIL_FROM_ADDRESS must be set");
    }

    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${sendgridKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            personalizations: [{ to: [{ email: to }] }],
            from: { email: fromAddress },
            subject,
            content: [{ type: "text/plain", value: body }],
        }),
    });
    if (!response.ok) {
        throw new Error(`SendGrid send failed: ${response.status} ${response.statusText}`);
    }
    return response.json();
}

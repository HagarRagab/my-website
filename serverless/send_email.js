import emailjs from "@emailjs/browser";

const {
    REACT_APP_EMAILJS_SERVICE_ID,
    REACT_APP_EMAILJS_TEMPLATE_ID,
    REACT_APP_EMAILJS_PUBLIC_KEY,
} = process.env;

export default async function handler(event) {
    const params = event.body && JSON.parse(event.body);

    if (!REACT_APP_EMAILJS_PUBLIC_KEY)
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "public key is missing",
            }),
        };

    try {
        await emailjs.send(
            REACT_APP_EMAILJS_SERVICE_ID,
            REACT_APP_EMAILJS_TEMPLATE_ID,
            params,
            REACT_APP_EMAILJS_PUBLIC_KEY
        );
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Sent email successfully",
            }),
        };
    } catch (error) {
        return {
            statusCode: 422,
            body: error.stack,
        };
    }
}

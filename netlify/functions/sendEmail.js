export default async function handler(event, context) {
    const formData = JSON.parse(event.body);

    return new Response(
        JSON.stringify({
            data: formData,
        }),
        {
            status: 200,
        }
    );
}

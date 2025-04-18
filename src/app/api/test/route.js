export const dynamic = "force-dynamic";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function GET() {
    const data = { message: "Hello from the fake server!" };

    await sleep(1000);

    return Response.json({ data });
}
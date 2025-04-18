export async function GET() {
    const data = { message: "Hello from the fake server!" };

    return Response.json({ data });
}


export async function POST(request) {
  console.log(await request.json());
  return Response.json({ message: "Hello from Next.js!" });
}

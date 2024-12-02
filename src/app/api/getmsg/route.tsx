import { model } from "@/constants";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const r = await req.json();
  console.log({ request: await r });
  const result = await model.generateContent(r.text);
  return NextResponse.json(
    { result: await result.response.text() },
    { status: 200 }
  );
}

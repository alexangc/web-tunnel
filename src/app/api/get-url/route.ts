// app/api/get-url/route.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const fullUrl = request.nextUrl.href;

  return NextResponse.json({ target: fullUrl });
}

export async function POST(request: NextRequest) {
  const fullUrl = request.nextUrl.href;

  return NextResponse.json({ target: fullUrl });
}

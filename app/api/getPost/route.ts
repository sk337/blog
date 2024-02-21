import sql from "@/lib/database";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body = await req.json();
  const query = await sql`select * from posts where id = ${body.id}`;
  if (query.length === 0) {
    return NextResponse.json({ sucuess: false, error: "Post not found" });
  } else {
    return NextResponse.json({ sucuess: true, content: query[0] });
  }
}

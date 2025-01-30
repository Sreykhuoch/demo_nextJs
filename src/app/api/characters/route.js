import { NextResponse } from "next/server";

//Get() : this function is associated with HTTP Get request method, used to retrieve data from the server.
export async function GET() {
    return NextResponse.json({ characters: characters.data })
  }
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Clear the preview mode cookies
  const response = NextResponse.redirect("/");
  response.cookies.delete("__prerender_bypass");
  response.cookies.delete("__next_preview_data");

  return response;
}

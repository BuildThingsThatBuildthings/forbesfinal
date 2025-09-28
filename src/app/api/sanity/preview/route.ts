import { NextRequest, NextResponse } from "next/server";
import { previewClient } from "@/lib/sanity";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  const type = searchParams.get("type") || "page";

  // Check the secret and next parameters
  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  // Verify the document exists
  const document = await previewClient.fetch(
    `*[_type == $type && slug.current == $slug][0]`,
    {
      type,
      slug,
    }
  );

  if (!document) {
    return new Response("Document not found", { status: 404 });
  }

  // Redirect to the path from the fetched document
  const path =
    type === "page"
      ? slug === "homepage"
        ? "/"
        : `/${slug}`
      : `/${type}/${slug}`;

  // Enable preview mode by setting the cookie
  const response = NextResponse.redirect(path);
  response.cookies.set("__prerender_bypass", "", {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
  response.cookies.set(
    "__next_preview_data",
    JSON.stringify({ preview: true }),
    {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    }
  );

  return response;
}

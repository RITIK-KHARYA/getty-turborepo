import { betterFetch } from "@better-fetch/fetch";
import type { Session } from "better-auth/types";
import { NextResponse, type NextRequest } from "next/server";

export default async function authMiddleware(
  request: NextRequest,
  response: NextResponse
) {
  // const protectRoute = ["/dashboard"];
  // const currentRoute = request.nextUrl.pathname;
  // const isprotectedRoute = protectRoute.includes(currentRoute);
  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: request.nextUrl.origin,
      headers: {
        //get the cookie from the request
        cookie: request.headers.get("cookie") || "",
      },
    }
  );
  console.log("hehe", session);

  if (!session) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};

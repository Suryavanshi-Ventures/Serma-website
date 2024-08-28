import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const secret = process.env.NEXTAUTH_SECRET;

  const token = await getToken({ req: request, secret });

  if (token?.userToken) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
// means whatever the routes inside members-only-content/Dashboard that will be not accessible
export const config = {
  matcher: ["/members-only-content/Dashboard/:path*"],
};

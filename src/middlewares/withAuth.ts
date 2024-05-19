import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

const onlyAdminPage = [
  "/dashboard",
  "/dashboard/products",
  "/dashboard/products/create",
];

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    if (pathname.startsWith("/order")) {
      const token = await getToken({
        req,
        secret: `${process.env.NEXT_JWT_SECRET}`,
      });
      if (!token) {
        return NextResponse.redirect(new URL("/sign-in", req.url));
      }
      const orderId = pathname.split("/order/")[1];
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/order/${orderId}`,
        {
          cache: "no-store",
        }
      );
      const json = await response.json();

      const order = json.data.order;
      if (token.id !== order.userId) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: `${process.env.NEXT_JWT_SECRET}`,
      });
      if (!token) {
        const url = new URL("/sign-in", req.url);
        url.searchParams.set("callbackUrl", encodeURI(req.url));

        return NextResponse.redirect(url);
      }

      if (token.role !== "admin" && onlyAdminPage.includes(pathname)) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    return middleware(req, next);
  };
}

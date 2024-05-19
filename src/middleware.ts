// export { default } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";
import withAuth from "./middlewares/withAuth";

export function mainMiddleware(Request: NextRequest) {
  const res = NextResponse.next();

  return res;
}

export default withAuth(mainMiddleware, [
  "/cart",
  // "/profile",
  "/dashboard",
  "/dashboard/products",
  "/dashboard/products/create",
]);

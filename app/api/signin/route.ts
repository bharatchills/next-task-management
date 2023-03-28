

import { db } from "@/lib/db";
import { createJWT, comparePasswords } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = await request.json();

  try {
    console.log(req.email);
    const user = await db.user.findUnique({
      where: {
        email: req.email,
      },
    });
    if (!user) {
      // res.
      return NextResponse.json({ error: "Invalid login" });
    }
    let response = new NextResponse();

    const jwt = await createJWT(user);
    response.cookies.set(process.env.COOKIE_NAME, jwt, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    //   const jwt = await createJWT(user);

    response.cookies.set(process.env.COOKIE_NAME, jwt, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    //   console.log(response.cookies+"djkvbsdjkbv");
    //   console.log(jwt);

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
}

import { db } from "@/lib/db";
import { createJWT, hashPassword } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = await request.json();

  try {
    console.log(req.email)
      const user = await db.user.create({
    data: {
      email: req.email,
      password: await hashPassword(req.password),
      firstName: req.firstName,
      lastName: req.lastName,
    },
  });

  const jwt = await createJWT(user);
  let response = new NextResponse();
  response.cookies.set(
    process.env.COOKIE_NAME, jwt, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    }
  );

  

  console.log(response.cookies+"djkvbsdjkbv");
  console.log(jwt);

  return response;

  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }


}

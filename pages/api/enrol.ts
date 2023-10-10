// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { hashPassword } from '../lib/auth';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 
  if (req.method == "POST") {
    console.log("email " + req.body.email);
    console.log("password " + req.body.password);
    const hashedPassword = await hashPassword(req.body.password);
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        password: hashedPassword,
      },
    });
    console.log("call create fani datas");
    return res.status(200).json({ user: user });
  }



  if (req.method == "GET") {
    console.log("var is---------------->"+req.query.value)
    const users = await prisma.user.findUnique(
      {
        where:{
          email:"fanislevi@gmail.com"
        }
      }
    )
    res.status(200).json({ users: users })
  }

}

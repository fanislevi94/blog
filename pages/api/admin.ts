// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 
  if (req.method == "POST") {
    console.log("category " + req.body.category);
    console.log("title " + req.body.title);
    console.log("description " + req.body.description);
    console.log("id " + req.body.id);
    
    const project = await prisma.projects.create({
      data: {
        imageUrl:req.body.imageUrl,
        category: req.body.category,
        title: req.body.title,
        description:req.body.description,
        user: {
            connect: {
              id: req.body.id,
            },
          }
      },
    });
    console.log("call admin fani datas");
    return res.status(200).json({ project: project });
  }


  if (req.method == "GET") {
    console.log("var is---------------->"+req.query.value)
    const users = await prisma.user.findUnique(
      {
        where:{
          email:String(req.query.value)
        }
      }
    )
    res.status(200).json({ users: users })
  }

}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 
  if (req.method == "POST") {
    console.log("imageurl " + req.body.imageUrl);
    console.log("title " + req.body.title);
    console.log("description " + req.body.description);
    console.log("id " + req.body.id);
    
    const projectsdetail = await prisma.projectsdetail.create({
      data: {
        imageUrl:req.body.imageUrl,
        category: req.body.category,
        title: req.body.title,
        description:req.body.description,
        project: {
            connect: {
              id: 1,
            },
          }
      },
    });
    console.log("call projectdetail fani datas");
    return res.status(200).json({ projectsdetail: projectsdetail });
  }


 

}

import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/src/lib/prisma"


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {

    if(req.method !== "GET") return res.status(405).end()
  
      const bookId = String(req.query.book)
      
      const book = await prisma.book.findMany({
        where: {
          id: bookId,
        },
      })
  
      return res.json({ book })
  }
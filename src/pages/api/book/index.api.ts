import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/src/lib/prisma"


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
  
      const bookId = String(req.query.bookId)
      
      const book = await prisma.book.findUnique({
        where: {
          id: bookId,
        },
      })
  
      return res.json({ book })
  }
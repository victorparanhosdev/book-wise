import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/src/lib/prisma"


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {

    if(req.method !== "GET") return res.status(405).end()


        const {id} = req.query
        
      
      const books = await prisma.book.findMany({
        where: {
          id: String(id)
        }
      })
  
      return res.json(books)
  }
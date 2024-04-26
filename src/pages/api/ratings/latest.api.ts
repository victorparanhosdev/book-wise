import { NextApiRequest, NextApiResponse } from "next";
import {prisma} from "@/src/lib/prisma"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method !== "GET") return res.status(405).end()

        const ratings = await prisma.rating.findMany({
           orderBy: {
            created_at: "desc",
           },
           include: {
            book: true,
            user: true
           },
           take: 10
        })

    return res.json({ratings})
}


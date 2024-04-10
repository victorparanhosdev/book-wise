import { NextApiRequest, NextApiResponse } from "next";
import { Adapter } from "next-auth/adapters";
import { prisma } from "../prisma";


export function prismaAdapter(req: NextApiRequest, res: NextApiResponse): Adapter{
    return {
        async createUser(user){
            const createUser = await prisma.user.create({
                data: {
                    name: user.name,
                    avatar: user.avatar_url,
                    email: user.email
                }
            })

            return {
                ...createUser,
                avatar_url: createUser.avatar_url!,
                emailVerified: null
            }
        },
    }
}


import { prismaAdapter } from "@/src/lib/auth/prismaAdapter";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export function buildNextAuthOptions(req: NextApiRequest, res: NextApiResponse): NextAuthOptions {
  return {
    adapter: prismaAdapter(req, res),
    providers: [  
      GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
    })
]
  }
}



export default async function auth(req: NextApiRequest, res: NextApiResponse){
  return NextAuth(req, res, buildNextAuthOptions(req, res))
}   
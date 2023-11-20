import { NextAuthOptions, getServerSession } from "next-auth"
import CredendtialsProvider from "next-auth/providers/credentials"
import { prisma } from "./prisma"
import { compare } from "bcrypt"
import { User } from "@prisma/client"

export const authOptions: NextAuthOptions = {
    providers: [
        CredendtialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    type: "email",
                    label: "Email"
                },
                password: {
                    type: "password",
                    label: "Password"
                }
            },
            authorize: async (credentials) => {
                if (!credentials?.email || !credentials.password)
                    return null

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                if (!user)
                    return null

                const passwordValid = await compare(
                    credentials.password,
                    user.password
                )
                if (!passwordValid)
                    return null

                return user
            }
        })
    ],
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                user: token.user
            }
        },
        jwt: ({ token, user }) => {
            if (user) {
                const u = user as User
                return {
                    ...token,
                    user: u
                }
            }

            return token
        }
    },
    pages: {
        signIn: "/auth/login"
    }
}

export const getSession = async () => await getServerSession(authOptions)
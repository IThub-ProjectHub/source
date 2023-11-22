import { prisma } from "@/lib/prisma"
import { Client, Industry } from "@prisma/client"
import { getSession } from "next-auth/react"

export async function GET() {
    try {
        const data = await prisma.project.findMany({
            include: {
                members: true
            }
        })
        return Response.json({ data }, {
            status: 200
        })
    } catch (error) {
        const err = error as Error
        return Response.json({ message: err.message }, {
            status: 500
        })
    }
}

export async function POST(req: Request) {
    const session = await getSession()

    // if (!session)
    //     return Response.json({ message: "Unauthorized" })

    try {
        const { name, description, client, industry, userId }: {
            name: string
            description: string
            client: Client
            industry: Industry
            userId: string
        } = await req.json()

        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })

        if (user?.role != "none")
            return Response.json({
                message: "User already in Project"
            }, {
                status: 405
            })

        const res = await prisma.project.create({
            data: {
                name,
                description,
                client,
                industry,
                members: {
                    connect: {
                        id: userId
                    }
                }
            }
        })

        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                role: "creator"
            }
        })

        return Response.json(res)
    } catch (error) {
        const err = error as Error
        return Response.json({ message: err.message }, {
            status: 500
        })
    }
}
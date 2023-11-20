import { prisma } from "@/lib/prisma"
import { Client, Industry } from "@prisma/client"

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
    try {
        const { name, description, client, industry, userId }: {
            name: string
            description: string
            client: Client
            industry: Industry
            userId: string
        } = await req.json()
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
        return Response.json(res)
    } catch (error) {
        const err = error as Error
        return Response.json({ message: err.message }, {
            status: 500
        })
    }
}
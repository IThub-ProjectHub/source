import { prisma } from "@/lib/prisma"

type params = {
    params: {
        id: string
    }
}

export async function GET(_req: Request, { params }: params) {
    try {
        const data = await prisma.project.findUnique({
            where: {
                id: params.id
            },
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
import prisma from "@/lib/prisma"

type params = {
    params: {
        id: string
    }
}

export async function GET(_req: Request, { params }: params) {
    try {
        const data = await prisma.user.findUnique({
            where: {
                id: params.id
            },
            include: {
                project: true
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
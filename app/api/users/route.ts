import { prisma } from "@/lib/prisma"
import { hash } from "bcrypt"

export async function GET() {
    try {
        const data = await prisma.user.findMany({
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

export async function POST(req: Request) {
    try {
        const {
            name,
            email,
            password,
            surname,
            patronymic
        }: {
            name: string
            email: string
            password: string
            surname: string
            patronymic?: string | null
        } = await req.json()
        const passwordHash = await hash(password, 12)
        const res = await prisma.user.create({
            data: {
                name,
                email,
                surname,
                patronymic,
                password: passwordHash,
                role: "none"
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
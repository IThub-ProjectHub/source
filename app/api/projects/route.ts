import { prisma } from "@/lib/prisma"

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

// export async function POST(req: Request) {
//     try {
//         const { name, email }: {
//             name: string
//             email: string
//         } = await req.json()
//         const res = await prisma.user.create({
//             data: {
//                 name,
//                 email,
//                 role: "none"
//             }
//         })
//         return Response.json(res)
//     } catch (error) {
//         const err = error as Error
//         return Response.json({ message: err.message }, {
//             status: 500
//         })
//     }
// }
import { Project, User } from "@prisma/client"
import { JWT } from "next-auth/jwt"

declare module "next-auth/jwt" {
    interface JWT {
        user: User
    }
}
declare module "next-auth" {
    interface Session {
        user: {
            id: string
            createdAt: string
            email: string
            name: string
            surname: string
            patronymic: string | null
            password: string
            role: "none" | "creator" | "member"
            projectId: string | null
            project: Project | null
        }
    }
}
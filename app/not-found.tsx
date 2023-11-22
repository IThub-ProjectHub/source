import { getSession } from "@/lib/options"
import Link from "next/link"

const NotFound = async () => {
    const session = await getSession()

    return (
        <div>
            <h1>ProjectHub</h1>
            <p>Страница не найдена</p>
            {session ? (
                <Link href="/main">На главную</Link>
            ) : (
                <Link href="/auth/login">Войти</Link>
            )}
        </div>
    )
}

export default NotFound
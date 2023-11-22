import { getSession } from "@/lib/options"
import Link from "next/link"

const NotFound = async () => {
    const session = await getSession()

    return (
        <div className="h-full relative">
            <header className="py-2 text-xl lg:text-2xl absolute">
                <nav className="w-full lg:max-w-4xl mx-auto px-4">
                    <h1>
                        Project
                        <span className="text-elements">Hub</span>
                    </h1>
                </nav>
            </header>
            <div className="flex w-full h-full items-center justify-center">
                <div className="">
                    <p className="text-4xl text-center mb-6">Страница не найдена</p>
                    <p className="text-2xl text-center text-gray-400">
                        {session ? (
                            <Link href="/main">На главную</Link>
                        ) : (
                            <Link href="/auth/login/">Войти</Link>
                        )}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NotFound
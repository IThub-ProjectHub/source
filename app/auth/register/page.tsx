"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Register = () => {
    const name = useRef("")
    const surname = useRef("")
    const patronymic = useRef("")
    const email = useRef("")
    const password = useRef("")

    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const res = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({
                name: name.current,
                surname: surname.current,
                patronymic: surname.current,
                email: email.current,
                password: password.current
            })
        })
        const body = await res.json()

        if (body.name === "PrismaClientKnownRequestError") {
            setError("PrismaClientKnownRequestError")
            setTimeout(() => setError(null), 4000)
            return
        }

        router.push("/auth/login")
    }

    return (
        <div className="">
            {error && <p className="bg-red-700 border-[2px] border-red-900 py-2 px-4 absolute top-0 left-0 w-full">
                {error == "PrismaClientKnownRequestError"
                    ? "Почта уже используется"
                    : "Ошибка на сервере, попробуйте позже"
                }
            </p>}

            <h2 className="font-bold text-xl mt-5">
                Добро пожаловать!
            </h2>
            <p className="mt-2 text-gray-500 leading-5">
                Зарегистрируйся в приложении и приступай к работе!
            </p>
            <form onSubmit={onSubmit} className="mt-5">
                <label className="block">
                    <p className="mb-1">
                        Почта
                    </p>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={({ target }) => email.current = target.value}
                        required
                        className="w-full bg-[#00000000] border border-gray-500 pl-2 py-2 focus:outline-none focus:border-elements"
                    />
                </label>
                <label className="block mt-4">
                    <p className="mb-1">
                        Фамилия
                    </p>
                    <input
                        type="text"
                        placeholder="Surname"
                        onChange={({ target }) => surname.current = target.value}
                        required
                        className="w-full bg-[#00000000] border border-gray-500 pl-2 py-2 focus:outline-none focus:border-elements"
                    />
                </label>
                <label className="block mt-4">
                    <p className="mb-1">
                        Имя
                    </p>
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={({ target }) => name.current = target.value}
                        required
                        className="w-full bg-[#00000000] border border-gray-500 pl-2 py-2 focus:outline-none focus:border-elements"
                    />
                </label>
                <label className="block mt-4">
                    <p className="mb-1">
                        Отчество
                    </p>
                    <input
                        type="text"
                        placeholder="Patronymic"
                        onChange={({ target }) => patronymic.current = target.value}
                        required
                        className="w-full bg-[#00000000] border border-gray-500 pl-2 py-2 focus:outline-none focus:border-elements"
                    />
                </label>
                <label className="block mt-4">
                    <p className="mb-1">
                        Пароль
                    </p>
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={({ target }) => password.current = target.value}
                        required
                        className="w-full bg-[#00000000] border border-gray-500 pl-2 py-2 focus:outline-none focus:border-elements"
                    />
                </label>
                <button type="submit" className="mt-7 border border-gray-500 py-2 px-16 hover:border-elements">
                    Зарегистрироваться
                </button>
            </form>
            <p className="mt-16 text-center">
                Есть аккаунт?
                <Link href="/auth/login" className="block text-elements">Войти</Link>
            </p>

        </div>
    )
}

export default Register
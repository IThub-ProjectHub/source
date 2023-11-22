"use client"

import { signIn } from "next-auth/react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

type Props = {
    searchParams: {
        callbackUrl: string | undefined
        error: string | undefined
    }
}

const Login = (props: Props) => {
    const email = useRef("")
    const password = useRef("")
    const [error, setError] = useState<string | null>(null)
    useEffect(() => {
        if (props.searchParams.error) {
            setError(props.searchParams.error)
            setTimeout(() => setError(null), 4000)
        }

    }, [])

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await signIn("credentials", {
            email: email.current,
            password: password.current,
            redirect: true,
            callbackUrl: "http://localhost:3000"
        })
    }
    return (
        <div className="">
            {error && <p className="bg-red-700 border-[2px] border-red-900 py-2 px-4 absolute top-0 left-0 w-full">
                {error == "CredentialsSignin"
                    ? "Неверный логин или пароль"
                    : "Ошибка на сервере, попробуйте позже"
                }
            </p>}

            <h2 className="font-bold text-xl mt-5">
                Добро пожаловать!
            </h2>
            <p className="mt-2 text-gray-500 leading-5">
                Пожалуйста, войдите в ваш аккаунт:
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
                        className="w-full bg-[#00000000] border border-gray-500 pl-2 py-2 focus:outline-none focus:border-elements"
                    />
                </label>
                <button type="submit" className="mt-7 border border-gray-500 py-2 px-16 hover:border-elements">
                    Войти
                </button>
            </form>
            <p className="mt-16 text-center">
                Нет аккаунта?
                <Link href="/auth/register" className="block text-elements">Зарегистрироваться</Link>
            </p>

        </div>
    )
}

export default Login
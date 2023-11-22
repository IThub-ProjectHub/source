"use client"

import { useRef } from "react"
import Link from "next/link"

const Register = () => {
    const name = useRef("")
    const surname = useRef("")
    const patronymic = useRef("")
    const email = useRef("")
    const password = useRef("")

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <div className="">
            {/* {error && <p className="bg-red-700 border-[2px] border-red-900 py-2 px-4">
                {error == "CredentialsSignin"
                    ? "Неверный логин или пароль"
                    : "Ошибка на сервере, попробуйте позже"
                }
            </p>} */}

            <h2 className="font-bold text-xl mt-5">
                Добро пожаловать!
            </h2>
            <p className="mt-2 text-gray-500 leading-5">
                Зарегистрируйся в приложении и приступай к работе!
            </p>
            <form onSubmit={() => { }} className="mt-5">
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
                        Фамилия
                    </p>
                    <input
                        type="text"
                        placeholder="Surname"
                        onChange={({ target }) => surname.current = target.value}
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
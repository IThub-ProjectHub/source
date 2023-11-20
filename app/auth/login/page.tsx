"use client"

import { signIn } from "next-auth/react"
import { useRef } from "react"

const login = () => {
    // const name = useRef("")
    // const surname = useRef("")
    // const patronymic = useRef("")
    const email = useRef("")
    const password = useRef("")

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
        <form onSubmit={onSubmit}>
            {/* <input
                type="text"
                placeholder="Имя"
                onChange={({ target }) => name.current = target.value}
            /><br />
            <input
                type="text"
                placeholder="Фамилия"
                onChange={({ target }) => surname.current = target.value}
            /><br />
            <input
                type="text"
                placeholder="Отчество"
                onChange={({ target }) => patronymic.current = target.value}
            /><br /> */}
            <input
                type="email"
                placeholder="Почта"
                onChange={({ target }) => email.current = target.value}
            /><br />
            <input
                type="password"
                placeholder="Пароль"
                onChange={({ target }) => password.current = target.value}
            /><br />
            <button type="submit">
                Sign In
            </button>
        </form>
    )
}

export default login
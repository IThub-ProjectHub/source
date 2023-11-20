"use client"
import { signIn, signOut } from "next-auth/react"

const AuthButtons = () => {
    return (
        <>
            <button onClick={() => signIn()}>signIn</button>
            <button onClick={() => signOut()}>signOut</button>
        </>
    )
}

export default AuthButtons
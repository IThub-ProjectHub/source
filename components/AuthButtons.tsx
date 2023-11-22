"use client"

import { signOut } from "next-auth/react"

const AuthButtons = () => {
    return (
        <>
            <button onClick={() => signOut()}>signOut</button>
        </>
    )
}

export default AuthButtons
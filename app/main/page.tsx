import AuthButtons from '@/components/AuthButtons'
import { getSession } from '@/lib/options'
import React from 'react'

const MainPage = async () => {
    const session = await getSession()

    return (
        <main>
            <AuthButtons />
            <h1>Добро пожаловать, {session?.user.name}</h1>
        </main>
    )
}

export default MainPage
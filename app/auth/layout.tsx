import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const AuthLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <html lang="ru">
            <body className={inter.className}>
                <h1>Auth</h1>
                {children}
            </body>
        </html>
    )
}

export default AuthLayout
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import "./globals.css"

const RootLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <html lang="ru" className="bg-main w-full h-screen text-white">
            <body className={`${inter.className} h-full`}>
                {children}
            </body>
        </html>
    )
}

export default RootLayout
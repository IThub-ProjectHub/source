const AuthLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">
            <header className="py-2 text-xl lg:text-2xl">
                <nav className="w-full lg:max-w-4xl mx-auto px-4">
                    <h1>
                        Project
                        <span className="text-elements">Hub</span>
                    </h1>
                </nav>
            </header>
            <main className='lg:max-w-3xl px-4 mx-auto'>
                {children}
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default AuthLayout
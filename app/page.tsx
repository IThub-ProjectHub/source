import AuthButtons from "@/components/AuthButtons"
import { getSession } from "@/lib/options"

const Home = async () => {
    const session = await getSession()
    console.log(session)
    return (
        <>
            <AuthButtons /><br />
            <p>{JSON.stringify(session?.user)}</p>
        </>
    )
}

export default Home
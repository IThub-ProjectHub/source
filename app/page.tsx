import { getSession } from "@/lib/options"

const Home = async () => {
    const session = await getSession()
    console.log(session)
    return (
        <>{JSON.stringify(session)}</>
    )
}

export default Home
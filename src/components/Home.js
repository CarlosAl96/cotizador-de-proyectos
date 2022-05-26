import { useAuth } from "../context/authContext"

const Home = () => {


    const { user } = useAuth()

    return (
        <div>

            <div className="w-full bg-black h-20 absolute flex">
                welcome
            </div>
           {user && <p>Welcome {user.email}</p>}
        </div>
    )
}

export default Home
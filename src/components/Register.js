import { useState } from "react"
import { useAuth } from "../context/authContext"
import { useNavigate, Link } from "react-router-dom"
import Alert from "./Alert"

const Register = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { signup } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState()

    const handleChange = ({ target }) => {
        setUser({...user, [target.name] : target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await signup(user.email, user.password)
            navigate('/')
        } catch (error) {
            setError(error.message)
        }
        
    }

    return (
        <div className="w-full max-w-xs m-auto">
            {error && <Alert message={error} />}

            <form onSubmit={handleSubmit} className="bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="example@email.com" 
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    ></input>                    
                </div>

                <div className="mb-4">
                    <label htmlFor="password" >Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        placeholder="******"
                        onChange={handleChange} 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    ></input>                    
                </div>

                <div className="w-full max-w-xs flex">
                    <button className="bg-gray-400 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm m-auto">Register</button>
                </div>
                
            </form>

            <p className="my-4 text-sm text-white flex justify-between px-3">You have an Account? <Link to="/login">Login</Link></p>

        </div>
    )
}

export default Register
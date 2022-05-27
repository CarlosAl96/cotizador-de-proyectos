import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"

const ViewProjects = () => {

    const { projects } = useAuth()
    const navigate = useNavigate()
    
    return (
        <div className="w-full max-w-xs m-auto">

            <div className="bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div>
                    <h1 className="block text-white font-bold mb-2">List Projects</h1>
                </div>                
                { projects &&
                    projects.dat.map(project => 
                        <div className="border border-gray-900 p-5 mb-2">
                            <span  className="block text-white text-sm font-bold mb-2">{project.name_project}</span>
                            {
                                project.devs.map(dev => 
                                    <span className="block text-black text-sm font-bold">{dev}</span>
                                    )
                            }
                            <span  className="block text-white text-sm font-bold mt-2">Budget</span>
                            <span  className="block text-black text-sm font-bold mb-2">{project.budget}</span>
                        </div>

                    )                   
                }
                <div>
                    <button onClick={() => navigate('/project')} className="bg-gray-400 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">Add new project</button>
                </div>                
            </div>


        </div>

    )
}

export default ViewProjects
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"


const CreateProject = () => {


    const { projects, addProjects } = useAuth()
    const navigate = useNavigate()
    const [project, setProject] = useState({
        name_project: '',
        description: '',
        devs: [],
        budget: 0
    })

    const [names, setNames] = useState()

    const handleChange = ({ target }) => {
        setProject({...project, [target.name] : target.value})
        
    }

    const submit = async (e) => {
        e.preventDefault()
        await addProjects(project)
        navigate('/viewprojects')
    }


    useEffect(() => {
        if(!names){
            (async () => {
                const response = await fetch(
                'https://parseapi.back4app.com/classes/NamesList?limit=30&keys=Name',
                {
                    headers: {
                    'X-Parse-Application-Id': 'zsSkPsDYTc2hmphLjjs9hz2Q3EXmnSxUyXnouj1I', // This is the fake app's application id
                    'X-Parse-Master-Key': '4LuCXgPPXXO2sU5cXm6WwpwzaKyZpo3Wpj4G4xXK', // This is the fake app's readonly master key
                    }
                }
                );
                const data = await response.json(); // Here you have the data that you need
                setNames(data['results'])
            })();
        } 
    }, [])

    const handleDevs = ({ target }) => {
        let aux = project.devs
        aux.push(target.value)
        setProject({...project, ['devs'] : aux, ['budget'] : aux.length * 100})
    }

    return (
        <div className="w-full max-w-xs m-auto">
        

            <form onSubmit={submit} className="bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">

                <div className="mb-4">
                    <label htmlFor="name_project" className="block text-white text-sm font-bold mb-2">Project Name</label>
                    <input onChange={handleChange} type="text" name="name_project" className="" placeholder="Project Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>                    
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-white text-sm font-bold mb-2">Description</label>
                    <input onChange={handleChange} type="text" name="description" placeholder="Project Description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>                    
                </div>
                



                <div className="mb-4">
                    <label htmlFor="devs" className="block text-white text-sm font-bold mb-2">Select devs</label>
                    <select name="devs" onChange={handleDevs} className="shadow border rounded w-full py-2 px-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option>Select</option>
                        { names &&
                            names.map(nombre => <option key={nombre.objectId}>{nombre.Name}</option>)
                        }                        
                    </select>

                </div>

                

                <div className="flex items-center justify-between">
                    <button className="bg-gray-400 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">Create</button>
                </div>
            </form>

            {
                project.devs != '' &&

                <div className="bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">

                    <div className="mb-4">
                        <span className="block text-white text-sm font-bold mb-2">Devs Selected</span>

                        {
                            project.devs.map(nombre => <span className="block text-black text-sm font-bold" key={nombre}>{nombre}</span>)
                        }
                    </div>

                    <div className="mb-4">

                        <span className="block text-white text-sm font-bold mb-2">Budget</span>

                        {
                            <span className="block text-black text-sm font-bold">{project.budget}</span>
                        }
                    </div>
                </div>                
            }


            


        </div>
    )
}

export default CreateProject
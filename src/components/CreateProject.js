import { useEffect, useState } from "react"


const CreateProject = () => {

    const budgetaux = 0
    
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
                console.log(data)
            })();
        }
        
    }, [])

    const handleDevs = ({ target }) => {
        let aux = project.devs
        aux.push(target.value)
        setProject({...project, ['devs'] : aux, ['budget'] : aux.length * 100})
        console.log(project)
    }

    return (
        <div>
        

            <form>

                <label htmlFor="name_project" className="" ></label>
                <input onChange={handleChange} type="text" name="name_project" className="" placeholder="Project Name"></input>
                
                <label htmlFor="description" className=""></label>
                <input onChange={handleChange} type="text" name="description" className="" placeholder="Project Description"></input>


                <div>
                    <select name="devs" onChange={handleDevs}>
                        { names &&
                            names.map(nombre => <option key={nombre.objectId}>{nombre.Name}</option>)
                        }                        
                    </select>

                </div>

                

                <button>Create</button>
            </form>

            <div>
                <p>
                    Devs Selected
                </p>

                {
                    project.devs.map(nombre => <p key={nombre}>{nombre}</p>)
                }

                <p>Budget</p>

                {
                    <p>{project.budget}</p>
                }
            </div>
        </div>
    )
}

export default CreateProject
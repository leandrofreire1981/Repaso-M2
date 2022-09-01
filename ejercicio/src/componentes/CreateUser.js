import { useState } from "react"
import { useDispatch } from "react-redux"
import { createUser } from "../actions/Index"

export default function CreateUser() {

    const [input, setInput ] = useState({
        name: '',
        lastname: '',
        age: '',
        city: ''
    })

    function handleOnChange(e) {
        setInput({
            ...input, [e.target.name]: e.target.value
        })
      
    }

    const dispatch = useDispatch()

    function handleOnSubmit(e) {
        e.preventDefault()
        dispatch(createUser(input))
        for (let i=0; i<e.target.length-1; i++)
           e.target[i].value=''
        e.target[0].focus()

    }


    return (
        <>
            <div>Create User</div>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label>Nombre: </label>
                    <input type='text' name='name' onChange={handleOnChange}/>
                </div>
                <div>
                    <label>Apellido: </label>
                    <input type='text' name='lastname' onChange={handleOnChange} />
                </div>
                <div>
                    <label>Edad: </label>
                    <input type='text' name='age' onChange={handleOnChange} />
                </div>
                <div>
                    <label>Ciuidad: </label>
                    <input type='text' name='city' onChange={handleOnChange} />
                </div>
                <div>
                    <input type='submit' value='Agregar' />
                </div>
            </form>
        </>
    )
}
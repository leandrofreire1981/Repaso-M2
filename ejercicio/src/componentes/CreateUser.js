import { useState } from "react"

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

    function handleOnSubmit(e) {
        e.preventDefault()
        console.log(input.name)
        console.log(input.lastname)
        console.log(input.age)
        console.log(input.city)
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
                <button>Agregar</button>
            </form>
        </>
    )
}
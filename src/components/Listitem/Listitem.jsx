import { useRef } from "react";
import './Listitem.css'

export function Listitem({todos, alltods, setallTods}) {

    const elCheckBox = useRef(null)

    function handleDel(delTodo) {
        const filterTodo = alltods.filter(todo => todo.id !== delTodo)

        setallTods(filterTodo)
    }
    function handleEdit(todo) {
        
    const edittext = prompt("EDIT TEXT!!!", todo.title)


    alltods.forEach(element => {
        
        if (element.id === todo.id) {
            element.title = edittext
            setallTods([...alltods])
        }

    });
    }

    const handleCheck = (evt, todoId) => {
        alltods.forEach(element => {
            if (element.id === todoId) {
                element.isComplate = evt.target.checked
                setallTods([...alltods])
            }
        });

        if (evt.target.checked) {
            elCheckBox.current.style.textDecoration = 'line-through'
        } else {
            elCheckBox.current.style.textDecoration = 'none'

        }   
    }

    return(
        <>
            <li className="mt-4 item p-3 d-flex justify-content-between align-items-center border-success">
                <div className="d-flex ">
                <input onChange={handleCheck} className="form-check-input" type="checkbox" />
                
                <span className="ms-3 text-light text" ref={elCheckBox}>{todos.title}</span>
                </div>
                <div>
                
                <span> {todos.timeHour}:</span>
                <span>{todos.timeMin}:</span>
                <span>{todos.timeSec}</span>
                <button className="btn btn-primary" onClick={() => handleEdit(todos)}>Edit</button>
                <button className="btn btn-danger ms-2" onClick={() => handleDel(todos.id)}>Delete</button>
                </div>
            </li>
        </>
    )
}
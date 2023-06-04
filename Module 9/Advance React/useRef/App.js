import React, {useState, useRef} from "react"

function App() {
    const [newTodoValue, setNewTodoValue] = useState("")
    const [todosList, setTodosList] = useState([])
    const inputRef = useRef(null)
    
    function handleChange(event) {
        setNewTodoValue(event.target.value)
    }
    
    function addTodo(event) {
        event.preventDefault()
        setTodosList(prevTodosList => [...prevTodosList, newTodoValue])
        setNewTodoValue("")
        inputRef.current.focus()
    }
    
    const allTodos = todosList.map(todo => <p key={todo}>{todo}</p>)
    
    return (
        <div>
            <form>
                <input ref={inputRef} type="text" name="todo" value={newTodoValue} onChange={handleChange}/>
                <button onClick={addTodo}>Add todo item</button>
            </form>
            {allTodos}
        </div>
    )
}

export default App
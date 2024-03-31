import {useState} from 'react'

const AddTaskForm = ({addTask}) => {

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(text);
        setText('');
    }

    return (
        <form onSubmit={handleSubmit} className="form" >
            <input 
                type="text"
                value={text}
                placeholder="Agregar nueva tarea" 
                onChange= {(e) => { setText(e.target.value)}}
            />
            <button type="submit">Agregar</button>
        </form>
    )
}

export default AddTaskForm;
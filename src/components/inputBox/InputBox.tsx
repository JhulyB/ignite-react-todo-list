import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';
import { ITaskState } from '../main/MainContainer';
import styles from './InputBox.module.css';

interface IInputBoxProps{
    handleAddNewTaskToTasks: (newTask: ITaskState) => void
}

export const InputBox = ({ handleAddNewTaskToTasks }: IInputBoxProps) => {
    const [ task, setTask] = useState("");

    function handleCreateNewtask (event: FormEvent){
        event.preventDefault()

        handleAddNewTaskToTasks({
            id: Math.floor(Math.random() * 1000),
            task,
            isComplete: false
        })

        setTask("")
    }

    function handleNewTask(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("");
        setTask(event.target.value)
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("Este campo é obrigatório")
    }

    const isNewTaskInputEmpty = task.length === 0

    return(
        <form onSubmit={handleCreateNewtask} className={styles.inputBox}>
            <textarea 
                name='task'
                placeholder='Adicione uma nova tarefa'
                value={task}
                onChange={handleNewTask}
                onInvalid={handleNewTaskInvalid}
                required
                />
            <button type='submit' disabled={isNewTaskInputEmpty}>
                Criar
                <IoAddCircleOutline size={16} />
            </button>
        </form>
    )
}
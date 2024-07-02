import { useState } from "react";
import { Main } from "./Main";

export interface ITaskState{
    id: number;
    task: string;
    isComplete: boolean;
}

export const MainContainer = () => {

    const [todoList, setTodoList] = useState<ITaskState[]>([])

    function handleAddNewTaskToTasks(newTask: ITaskState) {
        setTodoList([...todoList, newTask])
    }

    function handleDeleteTask(taskId: number) {
        const todoListWithoutTaskDeleted = todoList.filter((task) => task.id !== taskId)

        setTodoList(todoListWithoutTaskDeleted)
    }

    function handleChangeTaskChecked(taskId: number) {
        const todoListWithTaskCheckChanged = todoList.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isComplete: !task.isComplete
                }
            }
            return task
        })

        setTodoList(todoListWithTaskCheckChanged)
    }
    
    const tasksCreated = todoList.length;

    const tasksFineshed = todoList.filter((task) => task.isComplete).length;

    return (
        <Main 
            handleAddNewTaskToTasks={handleAddNewTaskToTasks} 
            todoList={todoList} 
            tasksCreated={tasksCreated}
            tasksFineshed={tasksFineshed}
            handleDeleteTask={handleDeleteTask}
            handleChangeTaskChecked={handleChangeTaskChecked}
            />
    )
}
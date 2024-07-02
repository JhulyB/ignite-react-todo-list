import { HiOutlineClipboardList } from "react-icons/hi";
import { InputBox } from "../inputBox/InputBox";
import { TaskCard } from "../taskCard/TaskCard";
import { ITaskState } from "./MainContainer";

import styles from './main.module.css';

interface IMainProps{
    todoList: ITaskState[];
    tasksCreated: number;
    tasksFineshed: number;
    handleAddNewTaskToTasks: (newTask: ITaskState) => void;
    handleDeleteTask: (taskId: number) => void;
    handleChangeTaskChecked:  (taskId: number) => void;
}

export const Main = ({ todoList, tasksCreated, tasksFineshed, handleAddNewTaskToTasks, handleDeleteTask, handleChangeTaskChecked }: IMainProps) => {
    return (
        <main className={styles.mainContainer}>
            <InputBox handleAddNewTaskToTasks={handleAddNewTaskToTasks}/>
            <div className={styles.counterContainer}>
                <div>
                    <span className={styles.primaryColor}>Tarefas criadas</span>
                    <span className={styles.counterBadge}>{tasksCreated}</span>
                </div>
                <div>
                    <span className={styles.highlightColor}>Concluídas</span>
                    <span className={styles.counterBadge}>{tasksFineshed} de {tasksCreated}</span>
                </div>
            </div>
            {
                todoList.map((task) =>(
                    <TaskCard 
                        key={task.id}
                        task={task} 
                        handleDeleteTask={() => handleDeleteTask(task.id)}
                        handleChangeTaskChecked={() => handleChangeTaskChecked(task.id)}
                        />
                ))
            }
            {
                todoList.length === 0 && (
                    <div className={styles.emptyList}>
                        <HiOutlineClipboardList size="3.5rem" color="#333333" />
                        <h2>Você ainda não tem tarefas cadastradas</h2>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                )
            }
        </main>
    )
}
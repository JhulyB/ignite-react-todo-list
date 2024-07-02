import { FaCircleCheck } from "react-icons/fa6";
import { HiOutlineTrash } from "react-icons/hi";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { ITaskState } from "../main/MainContainer";

import styles from "./taskCard.module.css";

interface ITaskCardProps{
    task: ITaskState
    handleDeleteTask: () => void
    handleChangeTaskChecked: () => void
}

export const TaskCard = ({ task, handleDeleteTask, handleChangeTaskChecked }: ITaskCardProps) => {
    
    function toStyleByTaskCompleteStatus() {
        if (!task.isComplete) return
        
        return styles.taskCompleted
    }

    //TODO add animate__fadeInUp when task added
    //TODO add animate__fadeOutDown when task removed
    return(
        <div className={styles.taskCard}>
            <button onClick={handleChangeTaskChecked}>
                {
                    task.isComplete ? <FaCircleCheck color="#5E60CE" />  : <MdRadioButtonUnchecked  color={"#4EA8DE"}/>
                }
            </button>
            
            <p className={toStyleByTaskCompleteStatus()}>{task.task}</p>

            <button onClick={handleDeleteTask} disabled={task.isComplete}>
                <HiOutlineTrash color={"#808080"}/>
            </button>
        </div>
    )
}
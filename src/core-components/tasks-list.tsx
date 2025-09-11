import ButtonIcon from "../components/button-icon";
import PlusIcon from "../assets/icons/plus.svg?react"
import TaskItem from "./task-item";

export default function TasksList() {
    return <>
    <section>
        <ButtonIcon icon={PlusIcon}>Nova tarefa</ButtonIcon>
    </section>
    <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
    </section>
    </>
}
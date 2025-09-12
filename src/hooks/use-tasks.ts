import useLocalStorage from "use-local-storage";
import { TASKS_KEY } from "../types/task";
import type {Task} from "../types/task"

export default function useTasks() {
    const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

    return {
        tasks,
        tasksCount: tasks.length,
        concludedTasksCount: tasks.filter((task) => task.concluded).length
    }
}